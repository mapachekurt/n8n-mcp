# Chat Trigger for Manual Input Collection

## Pattern Overview

**Category:** User Input Patterns  
**Complexity:** Simple  
**Use Case:** Workflows requiring manual text input (URLs, IDs, names, parameters)

## Problem Statement

When building workflows that need manual user input on each execution, developers often default to using a Manual Trigger with a Set node containing an empty value field. This creates a poor user experience:

- User must open the workflow editor to input data
- Easy to forget to update the value before execution
- No validation before expensive operations
- Not suitable for repeated executions with different inputs

## Solution: Chat Trigger Pattern

Use n8n's Chat Trigger to create a conversational interface for collecting user input.

### Architecture

```
Chat Trigger → Extract Input → Validate Input → Process
                                      ↓ (invalid)
                                Error Message
```

### Implementation

#### 1. Chat Trigger Node
```javascript
{
  "type": "@n8n/n8n-nodes-langchain.chatTrigger",
  "parameters": {
    "options": {}
  }
}
```

#### 2. Extract Input (Set Node)
```javascript
{
  "type": "n8n-nodes-base.set",
  "parameters": {
    "assignments": {
      "assignments": [{
        "name": "userInput",
        "type": "string",
        "value": "={{ $json.chatInput }}"
      }]
    }
  }
}
```

#### 3. Validate Input (IF Node)
```javascript
{
  "type": "n8n-nodes-base.if",
  "parameters": {
    "conditions": {
      "string": [{
        "value1": "={{ $json.userInput }}",
        "operation": "isNotEmpty"
      }]
    }
  }
}
```

#### 4. Error Handling (Set Node on False Branch)
```javascript
{
  "type": "n8n-nodes-base.set",
  "parameters": {
    "assignments": {
      "assignments": [{
        "name": "error",
        "type": "string",
        "value": "Please provide valid input"
      }]
    }
  }
}
```

## Comparison: Anti-Pattern vs. Recommended Pattern

### ❌ Anti-Pattern: Manual Trigger + Set Node

```
Manual Trigger → Set Node (empty field) → Process
```

**Problems:**
- Requires editing workflow for each execution
- No validation before processing
- Poor developer experience
- Error-prone (forgetting to update value)

**When to use:** Never for production workflows requiring regular manual input

### ✅ Recommended: Chat Trigger Pattern

```
Chat Trigger → Extract → Validate → Process
```

**Benefits:**
- Natural conversational interface
- No workflow editing required
- Built-in validation opportunity
- Supports continuous interaction
- Better error handling

**When to use:** Any workflow requiring manual text input per execution

## Real-World Example: YouTube URL Processor

**Scenario:** Extract knowledge from YouTube videos by analyzing them with AI.

**Implementation:**
```
Chat Trigger 
  → Extract YouTube URL (Set: youtubeUrl = $json.chatInput)
    → Validate URL Exists (IF: youtubeUrl isNotEmpty)
      → TRUE: Analyze Video (Gemini API)
      → FALSE: Error "Please provide YouTube URL"
```

**User Experience:**
1. User opens chat interface
2. User pastes: `https://www.youtube.com/watch?v=VIDEO_ID`
3. Workflow automatically validates and processes
4. User receives results in chat

## Variations

### For Multiple Inputs
Use Code node to parse structured input:
```javascript
// User sends: "url: https://example.com, depth: 3"
const input = $json.chatInput;
const urlMatch = input.match(/url:\s*([^\s,]+)/);
const depthMatch = input.match(/depth:\s*(\d+)/);

return {
  json: {
    url: urlMatch ? urlMatch[1] : null,
    depth: depthMatch ? parseInt(depthMatch[1]) : 1
  }
};
```

### For Menu Selection
Use IF nodes to route based on chat input:
```javascript
// IF chatInput contains "option A" → Path A
// IF chatInput contains "option B" → Path B
// ELSE → Show menu
```

## Best Practices

1. **Always validate input** - Check for empty strings, correct format, etc.
2. **Provide helpful error messages** - Tell users exactly what format is expected
3. **Document expected input** - Use workflow description or chat welcome message
4. **Handle edge cases** - Extra whitespace, case sensitivity, malformed input
5. **Add examples** - Show users the correct input format in error messages

## Performance Considerations

- **Chat Trigger is efficient** - No polling, event-driven
- **Validate early** - Before expensive API calls or computations
- **Fail fast** - Return errors immediately rather than processing invalid input

## Security Notes

- Chat Trigger inputs should be treated as untrusted user input
- Always sanitize/validate before using in:
  - File paths
  - Database queries
  - API calls
  - Code execution

## Migration Path

### From Manual Trigger to Chat Trigger

**Before:**
1. Identify all Set nodes with empty or placeholder values
2. Note which values change with each execution

**After:**
1. Replace Manual Trigger with Chat Trigger
2. Add Extract node to pull from `$json.chatInput`
3. Add Validate node to check input quality
4. Update documentation for users

**Effort:** ~5 minutes per workflow  
**Impact:** Significant UX improvement

## Related Patterns

- **Form Trigger** - For structured input with multiple fields
- **Webhook Trigger** - For programmatic input from external systems
- **Schedule Trigger + External Input** - For hybrid automated/manual workflows

## References

- [n8n Chat Trigger Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/)
- [n8n IF Node Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/)

## Changelog

- **2025-10-16**: Initial documentation created from real-world workflow improvement

---

**Pattern Source:** Learned from manual workflow improvement during YouTube Knowledge Extractor development  
**Contributed By:** Kurt Anderson (@mapachekurt)  
**MCP Integration:** This pattern should be used by n8n MCP when designing workflows that require manual text input

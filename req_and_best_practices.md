# Requirements and Best Practices for Creating Components
## Component Rules
1. Components must import `React`
2. Called within JSX using uppercase first letter
3. Must return some form of UI
4. Must be exported from file to be imported into another Component
## JSX Rules
1. Return only one top level element
2. Any JS within JSX must be enclosed in curly braces `{}`
3. Keyword `class` is reserved, so classes must be renamed `classname`
## Best Practices
1. Each Component should be in it's own file
2. Each Component file should be in a separate folder
3. Each Component should reference it's own CSS
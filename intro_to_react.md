# React

## About

React is a Javascript Library used to craft modern day UI.

## Top Sites using React

- Airbnb
- Cloudflare
- Dropbox
- Facebook
- Instagram

## Notes about React

1. React App gets sent over from server
2. Everything is downloaded unlike html where everything is downloaded when needed
3. React has many ways to do a thing in constrast to Angular
4. Other famous frameworks: Angular, Vue

## How to create React app:

`npx create-react-app name-of-app`

## How to install with package.json:

`npm install`

## JSX - JavaScript XML

- className="myClass"
- Only one parent can be returned in JSX component
- Html cannot read javascript objects
- Wrap javascript in curly braces. E.g. {variableName}

## Functional component

- Each js file should only hold one functional component
- Component naming convention: CamelCase

## Props

- Props are properties that can be passed down to a child component from a parent component
- Props is a javascript object
- Each prop is a key-value pair
- Props passing is unidirectional (Parent -> Child)
- Example usage: <br/><br/>
  Parent:
  ```
  const Parent = () => {
    return ( <Child title="hello" /> )
  }
  ```
  Child:
  ```
  const Child = (props) => {
    return ( <div>{props.title}</div> )
  }
  ```

## State

### How to import

`import { useState } from React`

### How to use

Using array destructuring: <br />
`const [state, setState] = useState(initialValue);`

### About

- Component rerenders when the function setState is called
- Rerendering happens only after changing of state
- Console.log does not log the correct values of state

### Controlled Form for Inputs

```
const [state, setState] = useState(initialValue);
const handleInput = (event) => {
  setState(event.target.value);
}

return (
<input value={state} onChange={handleInput}>
)
```

## Ref

### How to import

`import { useRef } from React`

### About

- Does not rerender when executed, might rerender

### Uncontrolled Form

```
const reference = useRef(initialValue);
<input ref={reference} />
const focus = () => {reference.current.focus()} // this changes focus to the input element
```

## Component Lifecycle

### Class Components

- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

### Functional Components Equivalent

- useEffect(() => {}, [])
- useEffect(() => {})
- useEffect(() => { return () => {}})

## Conditional Rendering

### Usage

- Shortcircuiting of logic: <br />

```
{!{isLoading} && {displayComponent}}
```

- Ternary Operator: <br />

```
{isLoading ? <LoadingSpinner /> : {displayComponent}}
```

## About conditionals

- Logical AND (&&) return false when it hits a false-y value and return last value if all earlier values are truth-y
- Logical OR (||) continues evaluating when it hits a false-y value until it hits a truth-y value


## Create Portal

### How to import
`import ReactDOM from "react-dom`

### Usage
```

```
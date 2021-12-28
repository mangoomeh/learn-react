# React

## Table of contents

1. [About](#about)
2. [Props](#props)
3. [State](#state)
4. [UseRef](#ref)
5. [UseEffect](#component-lifecycle)
6. [ConditionalRendering](#conditional-rendering)
7. [CreatePortal](#create-portal)
8. [HTTP-Requests](#http-requests)
9. [UseContext](#context)
10. [Reducer](#reducer)
11. [ReactRouter](#react-router)

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

`import { useState } from "react"`

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
<input value={state} onChange={handleInput} />
)
```

## Ref

### How to import

`import { useRef } from "react"`

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
- useEffect(() => { return () => {} })

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

### About conditionals

- Logical AND (&&) return false when it hits a false-y value and return last value if all earlier values are truth-y
- Logical OR (||) continues evaluating when it hits a false-y value until it hits a truth-y value

## Create Portal

### How to import

`import ReactDOM from "react-dom"`

### About

- create portal takes in JSX component followed by where to put it

### Usage

Error modal: <br />

```
const OverLay = () => {}
const mainFunctionName => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />, document.querySelector("#modal-root")
      )}
    </>
  )
}
```

## HTTP Requests

### Javascript ES6 Fetch API

```
try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong.") // throw will go to catch
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
```

### Abort Controller

```
useEffect(() => {
  const url = "https://jsonplaceholder.typicode.com/posts/" + selection;
  const controller = new AbortController();
  fetchPost(url, controller.signal);

  return () => {
    controller.abort();
  };
}, [selection]);
```

## Context

### About

- useContext is used to pass props easily as opposed to the usual props drilling
- Danger of useContext is that everything within the context provider gets rerendered when states changes

### How to use

1. Create a context file: <br />

```
import { createContext } from "react";
const MyContext = createContext();
export default MyContext;
```

2. Import context and wrap the components: <br />

```
import MyContext from "./MyContext";

const MyComponent = () => {
  const var1 = "1234"
  const var2 = "abcd"
  return (
    <MyContext.Provider value={var1, var2}>
      <ChildComponent />
    </MyContext.Provider>
  )
}
```

3. Access values in child component: <br />

```
import MyContext from "./MyContext";
import { useContext } from "react";
const ChildComponent = () => {
  const myContext = useContext(MyContext);
  return (
    <>
      <div>{myContext.var1}</div>
      <div>{myContext.var2}</div>
    </>
  )
}
```

## Reducer

### About

Similar to useState, reducer is used to deal with more complex state structures such as array and javascript objects or complex logic

### Reducer Function with UseState Hook

```
import { useState } from "react";
const [state, setState] = useState(initialValue);

const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
      break;
    case "decrease":
      return state - 1;
      break;
    case "reset":
      return 0
      break;
    default:
      return state;
  }
}

<button onClick={setState(reducer(state, "increase"))}>Increase</button>
<button onClick={setState(reducer(state, "decrease"))}>Decrease</button>
<button onClick={setState(reducer(state, "reset"))}>Reset</button>
```

### UseReducer Hook

```
import { useReducer } from "react";
const [state, dispatch] = useReducer(reducer, initialValue);

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + action.value;
      break;
    case "decrease":
      return state - action.value;
      break;
    case "reset":
      return action.value
      break;
    default:
      return state;
  }
}

return (
  <button onClick={dispatch({type: "increase", value: 1})}>Increase</button>
  <button onClick={dispatch({type: "decrease", value: 1})}>Decrease</button>
  <button onClick={dispatch({type: "reset", value: 0})}>Reset</button>
);
```

## React Router

### React Router 5

1. Install router:

```
npm i react-router-dom@5
```

2. Set up router in index.js:

```
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

3. Set up routes in your component:

- import Route
- import Pages
- set route paths to wrap each page

```
import React from "react";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div className="container">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/page-one">
        <PageOne></PageOne>
      </Route>
      <Route path="/page-two">
        <PageTwo></PageTwo>
      </Route>
      <Route path="/page-three">
        <PageThree></PageThree>
      </Route>
    </div>
  );
}

export default App;
```

4. Use links to link to your pages

```
import { Link } from "react-router-dom";

<Link to="/">Main</Link>
<Link to="/page-one">Page One</Link>
<Link to="/page-two">Page Two</Link>
<Link to="/page-three">Page Three</Link>
```

### Some notes

- React router dom 5 use greedy search for path so it will always display the main page
- To fix the issue where only main page is shown is to use exact keyword as seen in "3. Set up routes"
- Using switch ensures that only one page is displayed at a time, however does not eliminate the greedy search for path problem:

```
import { Switch } from "react-router-dom";

<Switch>
  <Route exact path="/">
    <Main />
  </Route>
  <Route path="/page-one">
    <PageOne />
  </Route>
</Switch>
```

### React Router 6
- Install latest react router:
```
npm i react-router-dom
```
#### Notes about React Router 6
- Pretty new, might not be implemented in many companies
- No need for Switch
- No need for exact keyword
- Wrap all route in `<Routes>`
- NavLink


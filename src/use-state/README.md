# Use State
Returns a stateful value, and a function to update it.

During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

## Example
State as single value
```javascript
const [value, setValue] = useState(initialState);

const handleOnChange = (e) => {
    setValue(e.target.value);
}
```
State as object value
```javascript
const {state, setState} = useState({
    foo: "",
    bar: ""
});

const handleFooChange = (e) => {
    setState({
        ...state,
        foo: e.target.value
    });
}

const handleBarChange = (e) => {
    setState({
        ...state,
        bar: e.target.value
    });
}
```
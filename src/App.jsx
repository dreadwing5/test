
import { useReducer } from 'react';


const initialState = {
    count: 0,
    step: 1
};


function reducer(state, action) {

    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + state.step };
        case 'dec':
            return { ...state, count: state.count - state.step };

        case 'setCount':
            return { ...state, count: Number(action.payload) };

        case 'setStep':
            return { ...state, step: Number(action.payload) };

        case 'reset':
            return { ...initialState };

        default:
            throw new Error("Unknown action");
    }
}


export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState);


    const { count, step } = state;
    const inc = function () {
        dispatch({ type: 'inc' })
    }

    const dec = function () {
        dispatch({ type: 'dec' })
    }

    const setCount = function (value) {
        dispatch({ type: 'setCount', payload: value })
    }

    const setStep = function (value) {
        dispatch({ type: 'setStep', payload: value })
    }

    const reset = function () {
        dispatch({ type: 'reset' })
    }

    // Dispatch is used to trigger an action
    return (
        <div>
            <h1>Count: {count}</h1>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={step}
                    onChange={(e) => setStep(e.target.value)}
                />
                <p style={{ marginLeft: '10px' }}>Step: {step}</p>
            </div>
            <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
            <button onClick={() => inc()}>+</button>

            <button onClick={() => dec()}>-</button>
            <br />
            <button onClick={() => reset()}>Reset</button>
        </div >
    );
}
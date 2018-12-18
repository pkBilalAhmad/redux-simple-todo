import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { incrementReducer } from './recuers/increment';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { MyState } from './recuers/increment'


const rootReducer = combineReducers({
    // MyState,
    red: incrementReducer
})

const store = createStore(rootReducer);


const root = document.getElementById('root')


class CounterIndex extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <App />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<CounterIndex />, root)
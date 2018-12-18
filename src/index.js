import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import incrementReducer from './recuers/increment';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(incrementReducer);


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
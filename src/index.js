import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import incrementRed from './reducer/increment';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(combineReducers({
    secRed: incrementRed,
    
}));

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
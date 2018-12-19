import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { userListRed } from './recuers/userlistRed'
import userDetail from './recuers/userDetail';



const rootReducer = combineReducers({
    list: userListRed,
    detail: userDetail
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
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'
import App from './components/app'

class Todos extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />

            </Provider>
        )
    }
}

ReactDOM.render(<Todos />, root)
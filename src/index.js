import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

const root = document.getElementById('root')


class CounterIndex extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

ReactDOM.render(<CounterIndex />, root)
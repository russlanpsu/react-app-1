import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    name: "Ruslan",
    age: 35
}

const User = (props) => {
    const {name, age} = props;
    return (
        <div>
            <p>Имя:{name}</p>
            <p>Возраст:{age}</p>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>        
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

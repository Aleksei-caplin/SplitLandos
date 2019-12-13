import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';

export class Auth extends Component{

    state = {
        'username': '',
        'password': '',
    };

    handleSignIn = () => {
        const { username, password } = this.state;
        // axios.post("http://127.0.0.1:8000/auth/token/login/", {
        //   username, password
        // }
        // )
        // .then(response => response.json())
        // .then((data) => {console.log(data)})
        // .catch(error => {console.log( 'the error has occured: ' + error) })
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/auth/token/login/',
            data: JSON.stringify({ username, password }),
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        })
        .then((response) => {
            console.log(response);
        })

    };

    handleTextChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        })
    };

    render() {
        const { username, password} = this.state;
        return (
            <div className="login_form">
                <div className="form_item">
                    <input onChange={ this.handleTextChange } type="text" name="username" defaultValue={ username } placeholder="Укажите имя" />
                </div>
                <div className="form_item">
                    <input onChange={ this.handleTextChange } type="password" name="password" defaultValue={ password } placeholder="Введите пароль" />
                </div>

                <button onClick={ this.handleSignIn }>Отправить</button>
            </div>
        )
    }
}
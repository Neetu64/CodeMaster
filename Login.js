import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const{username,password} = this.state
        //login magic
        if(username === "Neetu" && password=== "Neetu24"){
            this.setState({
                loggedIn: true
            })
        }
    }


    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return (
            <div className="box">
            <div className="Login">
            <h1>Login Page</h1>
                <form onSubmit={this.submitForm}>
                Username : <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                <br/><br/>
                Password : <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <br/><br/>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div><br></br>
                <a href="#">Lost your password? </a></div>
            </div>
            </div>
        );
    }

}

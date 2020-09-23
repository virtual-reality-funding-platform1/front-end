import React from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import axios from 'axios'

class Login extends React.Component {
    state = {
        user: {
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        axios
            .post("https://lambdabw-virtual-backend.herokuapp.com/users/auth/login", this.state.user)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                // console.log(res.data)
                this.props.history.push("/protected")
                console.log("api data login working", res)
            })
            .catch((err) => console.log("login api ",err))
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                        />
                </form>
            </div>
        )
    }


}

export default Login
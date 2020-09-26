import React from 'react'
import axios from 'axios'

class userRegister extends React.Component {
    state = {
        user: {
            username: "",
            email: "",
            password: "",
            userRole: "",
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

    createUser = event => {
        event.preventDefault();
        axios
            .post("https://lambdabw-virtual-backend.herokuapp.com/users/", this.state.user)
            .then((res) => {
                console.log("user post working", res)
            })
            .catch((err) => console.log("user post error ",err))
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.createUser}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.user.username}
                            onChange={this.handleChange}
                        />
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
                            type="text"
                            name="userRole"
                            placeholder="user_role"
                            value={this.state.user.userRole}
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

export default userRegister
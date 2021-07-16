import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
   // console.log(this.state.username)
   if (this.state.username !== '' && this.state.password !== '') {
    this.props.handleLogin({username: this.state.username, password: this.state.password})
   }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
              value={this.state.username}
              onChange={(event) => this.setState({username: event.target.value})}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              value={this.state.password}
              onChange={(event) => this.setState({password: event.target.value})}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

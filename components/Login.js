import React from 'react';
import fire from '../firebase/Firebase';
import { Form, Container } from 'semantic-ui-react';




class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email : '', password : '' };
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {alert("Login Successful")}).catch((e) => alert(e.message));
    
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const { email, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
              type='password'
            />
            <Form.Button content='Login' />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default LoginForm
import React from 'react';
import fire from '../firebase/Firebase';
import { Redirect, } from 'react-router-dom';
import { Form, Container } from 'semantic-ui-react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= { };
    }


   
  handleSubmit = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(() => (alert("ERROR in sign, Please again sign up.")));
  }


    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    render() {

        const { email, password } = this.state;

        return (
            <Container>
              
            <Form onSubmit={this.handleSubmit}>
            <Form.Field required>
                <label>Email</label>
              <Form.Input 
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field required>
                  <label>Password</label>
              <Form.Input
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleChange} 
                type='password'
              />
              <Form.Button content='Register' />
            </Form.Field>
          </Form>
          </Container>
        );
    }
}


export default SignUpForm
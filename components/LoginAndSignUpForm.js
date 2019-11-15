import React from 'react';
import fire from '../firebase/Firebase';
import LoginForm from './Login'
import SignUpForm from './SignUp'
import { Redirect } from 'react-router-dom';
import { Form, Container, Menu, Segment } from 'semantic-ui-react';

class LoginAndSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state= { activeItem:'Login' };
    }

    componentDidMount() {
      this.authListener();
    } 
   
     authListener() {
       fire.auth().onAuthStateChanged(( user ) => {
     if(user){
       this.setState({email:user.email});
     } else {
       this.setState({email:null});
     }
     });
   }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <Container text>
          { this.state.email ? <Redirect to='/' /> : null }
          <Menu attached='top' tabular widths={2} >
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            >Login</Menu.Item>
            <Menu.Item
              name='SignUp'
              active={activeItem === 'SignUp'}
              onClick={this.handleItemClick}
            >Sign Up</Menu.Item>

          </Menu>
  
          <Segment attached='bottom'>

            

            { activeItem==='Login' ? <LoginForm /> : <SignUpForm  /> }
          </Segment>
          
        </Container>
      );
    }
}

export default LoginAndSignUp
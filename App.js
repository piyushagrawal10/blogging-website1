import React from 'react';
import fire from './firebase/Firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginAndSignUp from './components/LoginAndSignUpForm';
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HeaderApp from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs : []  };
  }

  componentDidMount() {
    const db=fire.firestore();
    const collectdocs=db.collection('blogs');
    collectdocs.get().then(docs => {
      docs.forEach((doc) => {
          this.setState({ blogs : [...this.state.blogs,doc.data()] })
      });
    });
  }


render() {
  return (
    <Router>
      <HeaderApp />
      <Route exact path='/' >
      <Home  blogs={this.state.blogs} />
      </Route>
      <Route exact path='/LoginAndSignUp' component={LoginAndSignUp} />
      <Route exact path='/AboutUs' component={AboutUs} />
      <Route exact path='/ContactUs' component={ContactUs} />
      <Route exact path='/:userId' component={AboutUs} />
    </Router>
  );
    }
}

export default App
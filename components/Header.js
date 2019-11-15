import React from "react";
import fire from "../firebase/Firebase";
import { Menu, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class HeaderApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: null };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ email: user.email });
      } else {
        this.setState({ email: null });
      }
    });
  }

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Segment inverted>
          <Menu inverted size="massive">
            <Menu.Menu>
              <Menu.Item color="green">{this.state.email}</Menu.Item>
            </Menu.Menu>

            <Menu.Menu position="right">
              <Link to="/">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
              </Link>
              <Link to="/AboutUs">
                <Menu.Item
                  name="aboutUs"
                  active={activeItem === "aboutUs"}
                  onClick={this.handleItemClick}
                >
                  About Us
                </Menu.Item>
              </Link>
              <Link to="/ContactUs">
                <Menu.Item
                  name="contactUs"
                  active={activeItem === "contactUs"}
                  onClick={this.handleItemClick}
                >
                  Contact Us
                </Menu.Item>
              </Link>

              {this.state.email ? (
                <Link to="/">
                  <Menu.Item
                    name="logout"
                    active={activeItem === "logout"}
                    onClick={this.logout}
                  >
                    Logout
                  </Menu.Item>
                </Link>
              ) : (
                <Link to="/LoginAndSignUp">
                  <Menu.Item
                    name="loginAndSignUp"
                    active={activeItem === "loginAndSignUp"}
                    onClick={this.handleItemClick}
                  >
                    Login / Sign Up
                  </Menu.Item>
                </Link>
              )}
            </Menu.Menu>
          </Menu>
        </Segment>

        <Header inverted textAlign="center" size="huge">
          BLOGGING SITE
        </Header>
      </Segment>
    );
  }
}

export default HeaderApp;

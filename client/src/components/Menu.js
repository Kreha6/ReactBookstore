import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';


class Menu extends Component{
  render(){
    return(
      <Navbar inverse fixedTop className="menu">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>BookStore</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="menu__navbar">
          <Nav>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={2}>Contact</NavItem>
            </LinkContainer>

          </Nav>
          <Nav pullRight>
            <LinkContainer to="/admin">
              <NavItem eventKey={3}>Admin</NavItem>
            </LinkContainer>
            <LinkContainer to="/cart">
              <NavItem eventKey={1}>Cart <Badge className="menu__navbar__badge">{this.props.qty}</Badge></NavItem>
            </LinkContainer>

        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
function mapStateToProps(state) {
  return {qty: state.cart.totalQty}
}

export default connect(mapStateToProps)(Menu);

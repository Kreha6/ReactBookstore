import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


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
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>

          </Nav>
          <Nav pullRight>
            <Link to={'/admin'}>Admin</Link>
            <Link to={'/cart'}>Cart<Badge className="menu__navbar__badge">{this.props.qty}</Badge></Link>

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

import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen : false
        }
    }
    toggle=()=>{
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <Navbar color="light" light expand="md" className="border-bottom">
                    <NavbarBrand href="/" className="brand"><b>LOGO</b></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/task">Task</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/user">User</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;

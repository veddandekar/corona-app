import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

const BootNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md" fixed="top">
				<Link to="/corona-app/">
					<NavbarBrand className="mb-1">COVID Tracker</NavbarBrand>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link to="/corona-app/">
								<NavLink>Stats</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/corona-app/prevention">
								<NavLink>Prevention</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/corona-app/hotline">
								<NavLink>Hotlines</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default BootNavbar;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import {
	Navbar,
	Button,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Topbar = ({ toggleSidebar }) => {
	const [topbarIsOpen, setTopbarOpen] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	useEffect(() => {
		windowWidth <= 576 ? setTopbarOpen(false) : setTopbarOpen(true);
	}, [windowWidth]);

	const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

	return (
		<Navbar
			color='light'
			light
			className='navbar shadow-sm p-3 bg-white rounded'
			expand='sm'
		>
			<Button color='info' onClick={toggleSidebar}>
				<FontAwesomeIcon icon={faAlignLeft} />
			</Button>
			<NavbarToggler onClick={toggleTopbar} />
			<Collapse isOpen={topbarIsOpen} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<NavLink tag={Link} to={'/mongo'}>
							MongoDB
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/express'}>
							Express
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/react'}>
							React
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to={'/node'}>
							Node JS
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Topbar;

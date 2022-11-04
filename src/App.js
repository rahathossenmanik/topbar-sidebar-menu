import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import './App.css';

const App = () => {
	const [sidebarIsOpen, setSidebarOpen] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	useEffect(() => {
		windowWidth <= 576 ? setSidebarOpen(false) : setSidebarOpen(true);
	}, [windowWidth]);

	const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

	return (
		<Router>
			<div className='App wrapper'>
				<SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
				<Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
			</div>
		</Router>
	);
};

export default App;

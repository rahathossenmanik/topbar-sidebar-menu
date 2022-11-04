import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

import Topbar from './Topbar';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
	<Container className={classNames('p-0', { 'is-open': sidebarIsOpen })}>
		<Topbar toggleSidebar={toggleSidebar} />
		<Container fluid className='content mt-3'>
			<Switch>
				<Route exact path='/' component={() => 'Hello'} />
				<Route exact path='/about' component={() => 'About'} />
				<Route exact path='/Pages' component={() => 'Pages'} />
				<Route exact path='/faq' component={() => 'FAQ'} />
				<Route exact path='/contact' component={() => 'Contact'} />
				<Route exact path='/home' component={() => 'Home'} />
				<Route exact path='/Page-1' component={() => 'Page-1'} />
				<Route exact path='/Page-2' component={() => 'Page-2'} />
				<Route exact path='/mongo' component={() => 'Mongo DB'} />
				<Route exact path='/express' component={() => 'Express JS'} />
				<Route exact path='/react' component={() => 'React JS'} />
				<Route exact path='/node' component={() => 'Node JS'} />
			</Switch>
		</Container>
	</Container>
);

export default Content;

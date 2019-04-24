import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import About from './About';
import Solutions from './Solutions';
import Contacts from './Contacts';
import News from './News';
export default class Routing extends Component {
	render(){
		return (
			<Switch>
				<Route exact path = '/' component = {MainPage} />
				<Route exact path = '/solutions' component = {Solutions} />
				<Route exact path = '/solutions/page-:idsss' component = {Solutions} />
				<Route path = '/about' component = {About}/>
				<Route path = '/news' component = {News}/>
				<Route path = '/contacts' component = {Contacts}/>
				<Route path = '/*' component = {()=><h1>404: Page not found</h1>}/>
			</Switch>
		)
	}
}
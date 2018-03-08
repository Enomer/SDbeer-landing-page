import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Header extends Component {

	render(){

		return (
			<header>
				<div id="ganderType">GANDER</div>
				<div className="navElements">
					<nav id="ganderNav" className="">
						<Link to="" className="navLink">Freebies </Link>
						<Link to="" className="navLink">Product </Link>
						<Link to="" className="navLink">Login </Link>
						<Link to="" className="text-center" id="freeTrial">FREE TRIAL</Link>
					</nav>
				</div>
			</header>
		)
	}
}


export default connect (
	state=>state,
	null,
	null,
	{pure:false}
)(Header)

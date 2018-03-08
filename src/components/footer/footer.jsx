import React from 'react'
import {Link,withRouter} from 'react-router-dom'

class Footer extends React.Component {

	render(){
		return (
			<nav id="ganderFooter">
				<Link to="" className="navLink">PRODUCT </Link>
				<Link to="" className="navLink">TEAM </Link>
				<Link to="" className="navLink">FREE TRIAL </Link>
				<Link to="" className="navLink">CUSTOMER SERVICE </Link>
				<Link to="" className="navLink">LOGIN </Link>
			</nav>
		)
	}
	
}

export default withRouter(Footer)

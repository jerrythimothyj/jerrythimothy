import React from 'react';
import $ from 'jquery';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Collapsible from 'react-collapsible';

class Projects extends React.Component {
	constructor() {
	    super();

	    this.state = {
	    	result: {}
	    }

	    this.UserList();
	}

  	UserList() {
	    return $.getJSON('./data/projects.json')
	    	.then((data) => {
        		this.setState({result: data});
      		});
	}

	render() {
		if(this.state.result.projects) {
			const projects = this.state.result.projects.map((item, i) => {
		      return	<li className="flex-item courses" key={i}>
							<Collapsible trigger={item.type}
										 classParentString="projects-list">
								{
									item.projects.map((item, i) => {
		      							return <div key={i}>
		      										<Collapsible trigger={item.company}
										 						 classParentString="projects-list">
										 				{
															item.projects.map((item, i) => {
								      							return <div key={i}>
								      										<Collapsible trigger={item.title}
																 						 classParentString="projects-list">
																 	   		</Collapsible>
																 	   	</div>
															})
														}
										 	   		</Collapsible>
										 	   	</div>
									})
								}
							</Collapsible>
				  		</li>
		    });

		    return	<div>
			    		<PageHeader>Projects</PageHeader>
			    		<ul className="flex-container">
			      			{ projects }
			    		</ul>
			    	</div>
		}
		return (<div></div>);
	}
}

export default Projects;
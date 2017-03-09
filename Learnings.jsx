import React from 'react';
import $ from 'jquery';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class Learnings extends React.Component {
	constructor() {
	    super();

	    this.state = {
	    	result: {}
	    }

	    this.UserList();
	}

  	UserList() {
	    return $.getJSON('https://www.codeschool.com/users/jerrythimothyj.json')
	    	.then((data) => {
        		this.setState({result: data});
      		});
	}

	render() {
		if(this.state.result.courses) {
			const completedCourses = this.state.result.courses.completed.map((item, i) => {
		      return	<li className="flex-item courses" key={i}>
		      				<img src={item.badge} height="100" />
				  		</li>
		    });

		    const inProgressCourses = this.state.result.courses.in_progress.map((item, i) => {
		      return	<li className="flex-item courses" key={i}>
		      				<img src={item.badge} height="100" />
				  		</li>
		    });

		    return	<div>
			    		<PageHeader>Learning</PageHeader>
			    		<ul className="flex-container">
			      			{ completedCourses }
			    		</ul>
			    		<ul className="flex-container">
			      			{ inProgressCourses }
			    		</ul>
			    	</div>
		}
		return (<div></div>);
	}
}

export default Learnings;
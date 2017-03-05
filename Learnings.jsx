import React from 'react';
import $ from 'jquery';

class Learnings extends React.Component {
	constructor() {
	    super();

	    this.state = {
	    	result: {}
	    }
	}

	componentDidMount() {
    	this.UserList();
  	}

  	UserList() {
	    return $.getJSON('https://www.codeschool.com/users/jerrythimothyj.json')
	    	.then((data) => {
        		this.setState({result: data});
        		console.log(this.state.result.courses.completed);
      		});

	}

	render() {
		const persons = this.state.result.courses.completed.map((item, i) => {
	    });

	}
}

export default Learnings;
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Projects extends React.Component {
	render() {
		return (
			<Grid>
			    <Row className="show-grid">
			      <Col sm={3}>1</Col>
			      <Col sm={3}>2</Col>
			      <Col sm={3}>3</Col>
			      <Col sm={3}>4</Col>
			    </Row>
			</Grid>
		);
	}
}

export default Projects;
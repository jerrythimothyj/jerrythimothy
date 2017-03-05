import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LiquidGauge from './LiquidGauge.jsx';

class TechnicalSkills extends React.Component {
	render() {
		return (
			<div>
				<ul className="flex-container">
				  <li className="flex-item">
				  	<LiquidGauge rating='75' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='65' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='50' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='30' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='30' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='65' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='65' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='60' />
				  </li>
				  <li className="flex-item">
				  	<LiquidGauge rating='60' />
				  </li>
				</ul>
				<ul className="flex-container">
				  <li className="flex-item">
				  	<LiquidGauge rating='50' />
				  </li>
				  <li className="flex-item">
					  	<LiquidGauge rating='40' />
					  </li>
					</ul>
					<ul className="flex-container">
					  <li className="flex-item">
					  	<LiquidGauge rating='30' />
					  </li>
					  <li className="flex-item">
					  	<LiquidGauge rating='20' />
					  </li>
					  <li className="flex-item">
					  	<LiquidGauge rating='20' />
					  </li>
					</ul>
					<ul className="flex-container">
					  <li className="flex-item">
					  	<LiquidGauge rating='30' />
					  </li>
					  <li className="flex-item">
					  	<LiquidGauge rating='40' />
					  </li>
					</ul>
			</div>
		);
	}
}

export default TechnicalSkills;
import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import LiquidGauge from './LiquidGauge.jsx';

class TechnicalSkills extends React.Component {
	render() {
		return (
			<div>
				<PageHeader>Technical Skills</PageHeader>
				<ul className="flex-container">
				  <li className="flex-item">
				  	<img src="./images/icons/angular.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='75' />
				  	</div>
				  </li>
				  <li className="flex-item">
					<img src="./images/icons/javascript.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='65' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/jquery.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='50' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/node.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='30' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/react.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='30' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/html.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='65' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/css.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='65' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/bootstrap.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='60' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/php.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='60' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/mysql.png" height="50" />
				  	<br />
				  	<div>
				  		<LiquidGauge rating='50' />
				  	</div>
				  </li>
				  <li className="flex-item">
				  	<img src="./images/icons/mssql.png" height="50" />
				  	<br />
				  	<div>
					  	<LiquidGauge rating='40' />
					</div>
				  </li>
					  <li className="flex-item">
					  	<img src="./images/icons/photoshop.png" height="50" />
					  	<br />
					  	<div>
					  		<LiquidGauge rating='30' />
					  	</div>
					  </li>
					  <li className="flex-item">
					  	<img src="./images/icons/flash.png" height="50" />
					  	<br />
					  	<div>
					  		<LiquidGauge rating='20' />
					  	</div>
					  </li>
					  <li className="flex-item">
					  	<img src="./images/icons/maya.png" height="50" />
					  	<br />
					  	<div>
					  		<LiquidGauge rating='20' />
					  	</div>
					  </li>
					  <li className="flex-item">
					  	<img src="./images/icons/karmajasmine.png" height="50" />
					  	<br />
					  	<div>
					  		<LiquidGauge rating='30' />
					  	</div>
					  </li>
					</ul>
			</div>
		);
	}
}

export default TechnicalSkills;
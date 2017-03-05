import React from 'react';
import TechnicalSkills from './TechnicalSkills.jsx';
import Projects from './Projects.jsx';
import Learnings from './Learnings.jsx';
import Employment from './Employment.jsx';
import Academic from './Academic.jsx';
import Strengths from './Strengths.jsx';
import Personal from './Personal.jsx';

class Content extends React.Component {
   render() {
      return (
      	<div>
         <TechnicalSkills />
         <Projects />
         <Learnings />
         <Employment />
         <Academic />
         <Strengths />
         <Personal />
        </div>
      );
   }
}


export default Content;
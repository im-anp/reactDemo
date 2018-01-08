import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/style.css';
import Leftmenu from './component/Leftmenu.js';
import CountUp from 'react-countup';
import Balence from './component/Balence.js';
import Header from './component/Header.js';
import Graph from './component/Graph.js';
import Footer from './component/Footer.js';
import { Sparklines ,SparklinesLine } from 'react-sparklines';


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }
  render() {
      const title = 'hi';
    return (
        <div>
       <Leftmenu />
       <Header />
       <Balence />
       <Graph />
       <Footer />
       </div>

    );
  }
}


ReactDOM.render(<AddOption />, document.getElementById('app'));

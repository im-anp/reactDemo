import React from 'react';
import CountUp from 'react-countup';
import Transition from 'react-transition-group/Transition';
class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            btncl:'fa fa-play',
            displayData: false,
            active: true
        }
        this.display_list = this.display_list.bind(this);
    }
    display_list()
    {
        if(this.state.btncl == 'fa fa-play')
        {
            this.setState(() => ({
                btncl:'fa fa-pause',
                displayData: true
            }));
        }
        else
        {
             this.setState(() => ({
                btncl:'fa fa-play',
                displayData: false
            }));
        }    
    }

    render() {
        return (
            <div className="footer">
                <div className="footer_btn" onClick={this.display_list}>
                    <i className={this.state.btncl}></i>
                </div>
               
                <Transition in={this.state.displayData} mountOnEnter unmountOnExit timeout={500}>
                {(state) => (
                <div show={state} className={`display_list ${state=='entering'? 'ModalOpen': state=='exiting'? 'ModalClosed':null }`} >
                   <CounterSet prifix='ETH/BIT' main_no={1265} per_$={34567} percent={0.98}/>
                   <CounterSet prifix='ETH/BIT' main_no={185} per_$={3567} percent={9.08}/>
                   <CounterSet prifix='ETH/BIT' main_no={975} per_$={16547} percent={12.98}/>
                   <CounterSet prifix='ETH/BIT' main_no={125} per_$={4567} percent={11.98}/>
                </div>
                )}
                </Transition>
               
            </div>
        );
    }
}

const divStyle = {
    background: 'pink',
};
const CounterSet = (props) => {
    return (
        <div className="cs">
             <div className="pull_left cs">
                <div>
                    <span className="prefix">{props.prifix}</span>
                    <span className="main_no"><CountUp start={0} decimals={2} end={props.main_no} /></span>
                </div>
                <div className="percent_section">
                    <span className="span1">$<CountUp start={0} decimals={2} end={props.per_$} /></span>
                    <span  className="span2"><CountUp start={0} decimals={2} end={props.percent} /> %</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
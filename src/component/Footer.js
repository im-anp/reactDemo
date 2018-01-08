import React from 'react';
import CountUp from 'react-countup';
class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            btncl:'fa fa-play',
            displayData: false
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
                { this.state.displayData ?
                <div className="display_list">
                   <CounterSet prifix='ETH/BIT' main_no={1265} per_$={34567} percent={8.98}/>
                   <CounterSet prifix='ETH/BIT' main_no={1265} per_$={34567} percent={8.98}/>
                   <CounterSet prifix='ETH/BIT' main_no={1265} per_$={34567} percent={8.98}/>
                   <CounterSet prifix='ETH/BIT' main_no={1265} per_$={34567} percent={8.98}/>
                </div>: null
                }
            </div>
        );
    }
}
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
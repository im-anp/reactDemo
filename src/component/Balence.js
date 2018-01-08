import React from 'react';
import CountUp from 'react-countup';
import { Sparklines,SparklinesLine,SparklinesCurve  } from 'react-sparklines';
class Balence extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            bt: 'ETH',
            main_bal: 107.53,
            per_$: 134567.33,
            percent: 8.76,
            rev: 195,
            odr: 33456,
            rev_data:[5, 10, 5, 20, 8, 15],
            odr_data:[10, 9, 1, 20, 9, 5]
        };
        this.changeBalenceData = this.changeBalenceData.bind(this);
        this.defaultState = this.defaultState.bind(this);
    }
    changeBalenceData()
    {
        this.setState(() => ({
            bt: 'ETH',
            main_bal: 107.53,
            per_$: 134567.33,
            percent: 8.76,
            rev: 195,
            odr: 33456,
             rev_data:[30, 1, 9, 7, 0, 17],
            odr_data:[0, 10, 20, 0, 9, 3]
        }));
    }
    defaultState()
    {
        this.setState(() => ({
            bt: 'USD',
            main_bal: 6664.53,
            per_$: 555467.63,
            percent: 11.06,
            rev: 765,
            odr: 22467,
            rev_data:[5, 10, 5, 20, 8, 15],
            odr_data:[10, 9, 1, 20, 9, 5]
        }));
    }
    render() {
        return(
            <div className="balence_div" onMouseEnter={this.changeBalenceData} onMouseLeave={this.defaultState}>
                <p>Balence</p>
                <div className="pull_left">
                    <div>
                        <span className="prefix">{this.state.bt}</span>
                        <span className="main_no"><CountUp start={0} decimals={2} end={this.state.main_bal} /></span>
                    </div>
                    <div className="percent_section">
                        <span className="span1">$<CountUp start={0} decimals={2} end={this.state.per_$} /></span>
                        <span  className="span2"><CountUp start={0} decimals={2} end={this.state.percent} /> %</span>
                    </div>
                </div>
                <div className="btn_panel pull-right">
                    <ActionButton icon="fa fa-arrow-up" actionText="Sell" />
                    <ActionButton icon="fa fa-arrow-down" actionText="Buy" />
                    <ActionButton icon="fa fa-shopping-cart" actionText="Order" />
                </div>
                <div className="rev">
                    <p>your todays revenue </p>
                    <span className="dol_pr">+$</span>
                    <span className="rev_no"><CountUp start={0} decimals={0} end={this.state.rev} /></span>
                    <div className="rev_gp">
                        <Sparklines data={this.state.rev_data}>
                            <SparklinesCurve color="green" />
                        </Sparklines>
                    </div>
                    <span className="rev_per"> +{this.state.percent}%</span>
                </div>
                <div className="odr">
                    <p>current order volume </p>
                    <span className="dol_pr">+$</span>
                    <span className="rev_no"><CountUp start={0} decimals={0} end={this.state.odr} /></span>
                    <div className="rev_gp">
                        <Sparklines data={this.state.odr_data}>
                            <SparklinesCurve color="green" />
                        </Sparklines>
                    </div>
                    <span className="rev_per"> +{this.state.percent}%</span>
                </div>
            </div>
        );
    }
};
const ActionButton = (props) => {
    return (
        <div className="action_btn">
            <i className={props.icon}></i>
            <div>{props.actionText}</div>
        </div>
    );
};
export default Balence;
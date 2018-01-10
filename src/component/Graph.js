import React from 'react';
import { Sparklines,SparklinesLine,SparklinesCurve,SparklinesBars  } from 'react-sparklines';


class Graph extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            gp_name:"Enthurium Chart",
            eb:'ETH/USD',
            graph_data:[30,2,60,8,52,10,48,0.2,5,50,9],
            eth: 'menu',
            bit:'',
        }
        this.onBit = this.onBit.bind(this);
        this.onEth = this.onEth.bind(this);
    }
    onBit()
    {
        this.setState(() => ({
            bit:'menu',
            eth: '',
            gp_name:"Bitcoin Chart",
            eb:'Bit/USD',
            graph_data:[4,50,20,60,5,10,55,30,5,10,5,9],
        }));
    }
    onEth()
    {
        this.setState(() => ({
            bit:'',
            eth: 'menu',
            gp_name:"Enthurium Chart",
            eb:'ETH/USD',
            graph_data:[30,2,60,8,52,10,48,0.2,5,50,9],
        }));
    }

    render() {
        return (
            <div className="graph">
                <div className="graph_head">
                    <span className="gp_name">{this.state.gp_name}</span>
                    <i className="fa fa-circle-o"></i>
                    <span className="eb">{this.state.eb}</span>
                    <a href="#" onClick={this.onBit} className={this.state.bit}>BIT</a>
                    <a href="#" onClick={this.onEth} className={this.state.eth}>ETH</a>
                </div>
                <div>
                    <Sparklines data={this.state.graph_data} width={100} height={15}>
                        <SparklinesBars style={{  fill: "#41c3f9", fillOpacity: ".25" }} />
                        <SparklinesCurve style={{ stroke: "#495FF2", fill: "none",strokeWidth:'0.5' }} />
                    </Sparklines>
                </div>
            </div>
        );
    }
}

export default Graph;
import React from 'react';

class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            card_ani: '',
            card1: ''
        }
        this.animate = this.animate.bind(this);
        this.change_val = this.change_val.bind(this);
    }
    animate()
    {
        if(this.state.card_ani == 'move_card')
        {
            this.setState(() => ({
                card_ani: ''
            }));
        }
        else
        {
            this.setState(() => ({
                card_ani: 'move_card',
            }));
        }
        //setTimeout(this.change_val(),1000);
    }
    change_val()
    {
        this.setState(() => ({
            card_ani: ''
        }));
    }
    render() {
        return (
            <div className="card_section">
                <div className="card_head">
                    <span className="gp_name">My Account</span>
                    <Icon  icon_cl='fa fa-search'/>
                    <Icon  icon_cl='fa fa-feed'/>
                    <span className="nev">
                        <Icon  icon_cl='fa fa-angle-left'/>
                        <span>01</span>
                        <Icon  icon_cl='fa fa-ellipsis-h'/>
                        <span>07</span>
                        <Icon  icon_cl='fa fa-angle-right'/>
                    </span>
                </div>
                <div className={`card_body ${this.state.card_ani} ${this.state.card1}`} onClick={this.animate}>
                    <img className="img1" src='/bit_img.png'/>
                    <img className="img2" src='/bit_img.png'/>
                </div>
            </div>
        );
    }
}

const Icon = (props) => {
  return (
    <i className={props.icon_cl}></i>
  );
};
export default Card;
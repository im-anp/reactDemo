import React from 'react';

const Leftmenu = (props) => {
    return (
        <div className="pull_left">
        <div className="img_sec">
            <img src='/anoop_img.jpg'/>
        </div>
        <div className="leftmenu_main">
        <Ficon iconclass="fa fa-credit-card" />
        <Ficon iconclass="fa fa-gear" />
        <Ficon iconclass="fa fa-exchange" />
        <Ficon iconclass="fa fa-code" />
        <Ficon iconclass="fa fa-feed" />
        <Ficon iconclass="fa fa-edit" />
        </div>
        </div>
    );
};
const Ficon = (props) => {
    return (
        <div className="font_div">
            <i className={props.iconclass}></i>
        </div>
    );
};

export default Leftmenu;
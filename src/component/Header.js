import React from 'react';
const Header = (props) => {
    return (
        <div className="header">
            <span className="head_arrow">
                <i className="fa fa-angle-left"></i>
            </span>
            <span className="ao">Accounts Overview</span>
            <div className="head_right">
                <span>page style</span>
                <i className="fa fa-th"></i>
                <i className="fa fa-table"></i>
            </div>
        </div>
    );
};

export default Header;
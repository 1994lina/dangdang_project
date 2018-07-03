import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';
import action from '../store/action/index';

class NavTop extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <header className='headerNavBox'>
            <div className='homeBox'>
                <div className='baseBox'>
                    <h1 className='logo'>当当</h1>
                    <div>{this.props.title}</div>
                    <Icon className='icon' type='menu-fold'/>
                </div>
            </div>
        </header>;
    }
}

export default withRouter(connect(null, action)(NavTop));
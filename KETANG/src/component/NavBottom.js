import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';
import action from "../store/action/index";

class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props.queryUnpay();
    }

    render() {
        return <footer className='footerNavBox'>
            <NavLink to='/home'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/classify'>
                <Icon type="bars"/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/shopping'>
                <Icon type="shopping-cart" />
                <span>购物车</span>
            </NavLink>
            <NavLink to='/mydangdang'>
                <Icon type='user'/>
                <span>我的当当</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect(null, action.list)(NavBottom));
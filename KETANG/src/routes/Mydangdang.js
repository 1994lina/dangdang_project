import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';

import "../static/css/mydangdang.less"
let img = require("../static/images/user.png");
class Mydangdang extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'我的当当'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                 <main className='allBox'>
                    <div >
                        <div className="heard"></div>
                        {/*<div>*/}
                            {/*<img src={img} alt=""/>*/}
                        {/*</div>*/}
                        <div className="heade-nav">
                             <NavLink to='/home'>
                                 <div className="div1">
                                     <p>0</p>
                                     <span>收藏的商品</span>
                                 </div>
                            </NavLink>
                            <NavLink to='/classify'>
                                <div>
                                    <p>0</p>
                                    <span>关注的店铺</span>
                                </div>
                            </NavLink>
                            <NavLink to='/shopping'>
                                <div>
                                    <p>0</p>
                                    <span>我的足迹</span>
                                </div>
                            </NavLink>
                        </div>
                        <div className="indent">
                            <div className="indent_1">
                                <a href="">
                                <div className="indent_img">
                                    <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png" alt=""/>
                                </div>
                                我的订单
                                    <span>查看全部购买商品</span>
                                </a>
                            </div>

                            <nav>
                                <div className="heade-nav1">
                                    <NavLink to='/home'>
                                        <Icon type="red-envelope" />
                                        <span>待付款</span>
                                    </NavLink>
                                    <NavLink to='/classify'>
                                        <Icon type="bars"/>
                                        <span>待收货</span>
                                    </NavLink>
                                    <NavLink to='/shopping'>
                                        <Icon type="shopping-cart" />
                                        <span>退换货</span>
                                    </NavLink>

                                </div>
                            </nav>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
export default connect()(Mydangdang)
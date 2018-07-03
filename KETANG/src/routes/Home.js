<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavTop from '../component/NavTop'
import { Carousel } from 'antd';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '首页'
        }
    }
    render() {
        return (
            <div>
                <NavTop title={this.state.title} />
                <main className='allBox'>
                    <Carousel autoplay>
                        <div><img src="http://img55.ddimg.cn/82310034954145_y.jpg" alt=""/></div>
                        <div><img src="http://img63.ddimg.cn/upload_img/00702/B/1242x366_dl_20180629-1530512215.jpg" alt=""/></div>
                        <div><img src="http://img61.ddimg.cn/upload_img/00670/qd/rhgu79kuo-1530528732.jpg" alt=""/></div>
                        <div><img src="http://img60.ddimg.cn/upload_img/00609/mao/b0628banner1242366-1530524637.jpg" alt=""/></div>
                    </Carousel>
                </main>
=======
import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Icon,Input} from 'antd';
import '../static/css/home.less'

class Home extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
                <header className='headerNavBox'>
                    <div className='homeBox'>
                        <div className='baseBox'>
                            <h1 className='logo'>当当</h1>
                            <div>
                                <Input  placeholder="百丽童鞋" prefix={<Icon type='search'/>}  className='inputBox' />
                            </div>
                            <Icon className='icon' type='menu-fold'/>
                        </div>
                    </div>
                </header>
                <main className='allBox'>home</main>
>>>>>>> cd78e60032fb3d9677f76791458382af130e8fbd
            </div>
    }
}
export default connect()(Home)
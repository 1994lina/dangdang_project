import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon, Input, Carousel } from 'antd';
import '../static/css/home.less'
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '首页'
        }
    }

    render() {
        return <div>
            <header className='headerNavBox'>
                <div className='homeBox'>
                    <div className='baseBox'>
                        <h1 className='logo'>当当</h1>
                        <div>
                            <Input placeholder="百丽童鞋" prefix={<Icon type='search' />} className='inputBox' />
                        </div>
                        <Icon className='icon' type='menu-fold' />
                    </div>
                </div>
            </header>

            <main className='allBox'>
                <Carousel autoplay>
                    <div><img src="http://img62.ddimg.cn/upload_img/00452/1/0703-y-wxjdt-1242-366-1530510925.jpg" alt=""/></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/B/1242x366_dl_20180629-1530512215.jpg" alt=""/></div>
                    <div><img src="http://img60.ddimg.cn/upload_img/00609/mao/b0628banner1242366-1530524637.jpg" alt=""/></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/J/1242x366_lyx_0702-1530516279.jpg" alt=""/></div>
                </Carousel>
                <div className="">
                    <ul>
                        <li><img src="http://img62.ddimg.cn/upload_img/00528/0000/1-00-1528978871.png" alt=""/></li>
                        <li><img src="http://img62.ddimg.cn/upload_img/00528/000/0000000-1530265533.png" alt=""/></li>
                        <li><img src="http://img60.ddimg.cn/upload_img/00528/0000/3-00-1528978871.png" alt=""/></li>
                        <li><img src="http://img60.ddimg.cn/upload_img/00528/0000/4-00-1528978871.png" alt=""/></li>
                        <li><img src="http://img62.ddimg.cn/upload_img/00528/0000/000-1530273800.png" alt=""/></li>
                    </ul>
                </div>
            </main>
        </div>

    }
}
export default connect()(Home)
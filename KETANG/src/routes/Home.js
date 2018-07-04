import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Icon,Input,Carousel} from 'antd';
import '../static/css/home.less'
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '首页'
        }
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

                <main className='allBox'>
                   home
                </main>
        </div>

    }
}
export default connect()(Home)
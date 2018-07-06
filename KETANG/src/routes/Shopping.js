import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'
import {Checkbox, Icon,InputNumber} from 'antd'
import action from '../store/action'
import '../static/css/shopping.less'
import List from '../component/List'
import {Link} from 'react-router-dom'

let img=require('../static/images/dangdang.png');
let img1=require('../static/images/img.jpg');
class Shopping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '购物车',
            compile:false
        }
    }

    handleBit=()=>{
        if (this.state.compile) return;
        this.setState({compile:true})
    };
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>
                    <div className='shop_main'>
                        <div className='shop_title'>
                            <div className='shop_input'>
                                <Checkbox ></Checkbox>
                                <div className='shopIcon'>
                                    <em></em>
                                    <span>当当网</span></div>
                            </div>
                            <div className='shop_Right'>
                                合计<em style={{fontStyle: 'normal', marginLeft: '.07rem'}}>0.00</em>
                                <span className='accounts'>结算</span>
                            </div>
                        </div>
                        <ul className='shop_ul'>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <Link to='/details'>
                                    <img src={img1} alt="" style={{display: 'inline-block'}} className='shop_img'/>
                                    {
                                        !this.state.compile?(<div className='shop_price'>
                                            <p>生活需要仪式感（你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                            <span>￥25.98</span>
                                            <span style={{textDecoration: 'line-through'}}
                                                  className='shop_pic'>￥36.00</span>
                                            <div><span>X1</span><Icon type="edit" onClick={this.handleBit} style={{fontSize:'.4rem'}}/></div>
                                        </div>):(<div style={{width:'100%'}}>
                                            <div style={{float:'left'}}>
                                                <InputNumber size="large" min={1} defaultValue={1} style={{width:'2.5rem'}}/>
                                                <div><Icon type="delete" style={{fontSize:'.43rem',float:'right',marginTop:'.5rem'}}/></div>
                                            </div>
                                            <div style={{float:'right',backgroundColor:'#f0f0f0',padding:'1rem .35rem',fontSize:'.3rem'}} onClick={()=>{this.setState({compile:false})}}>完成</div>
                                        </div>)
                                    }
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='shop_centre'>
                        <Icon type="check-circle" style={{color: 'red'}}/>
                        <span>根据您的偏好猜您可能喜欢</span>
                    </div>
                    <List/>
                </main>
            </div>
        )
    }
}
export default connect(state => ({...state.list}), action.list)(Shopping)
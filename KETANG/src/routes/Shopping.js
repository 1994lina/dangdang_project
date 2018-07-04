import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'
import {Checkbox, Icon,List, Avatar, Button, Spin} from 'antd'
import '../static/css/shopping.less'
import reqwest from 'reqwest';


let img=require('../static/images/dangdang.png');
let img1=require('../static/images/img.jpg');
/*<img src={img} alt="" className='shopIcon'/>*/
class Shopping extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'购物车',
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>
                    <div className='shop_main'>
                        <div className='shop_title'>
                            <div className='shop_input'>
                                <Checkbox></Checkbox>
                                <div className='shopIcon'><em></em>
                                    <span>当当网</span></div>
                            </div>
                            <div className='shop_Right'>编辑</div>
                        </div>
                        <ul className='shop_ul'>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                            <li className='shop_li'>
                                <Checkbox></Checkbox>
                                <img src={img1} alt="" style={{display:'inline-block'}} className='shop_img'/>
                                <div style={{display:'inline-block'}}>
                                    <p>生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration:'line-through'}} className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit" /></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <ul>
                            <li></li>
                        </ul>
                    </footer>
                </main>
            </div>
        )
    }
}
export default connect()(Shopping)
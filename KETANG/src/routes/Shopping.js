import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'
import {Checkbox, Icon,Alert,Button,Spin,List} from 'antd'
import action from '../store/action'
import '../static/css/shopping.less'


let img=require('../static/images/dangdang.png');
let img1=require('../static/images/img.jpg');
class Shopping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '购物车',
            isLoading: false
        }
    }

    async componentDidMount() {
        let {courseData, queryList} = this.props;
        if (courseData.data.length === 0) {
            queryList();
        }
    }

    componentWillReceiveProps() {
        this.setState({isLoading: false});
    }
    loadMore = () => {
        let {queryList, courseData} = this.props;
        if (this.state.isLoading) return;
        this.setState({isLoading: true});
        setTimeout(()=>(
            queryList({
                page: courseData.page + 1,
            })
        ),1000)
    };
    render(){
        let {courseData} = this.props,
            {data} = courseData;
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>
                    <div className='shop_main'>
                        <div className='shop_title'>
                            <div className='shop_input'>
                                <Checkbox></Checkbox>
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
                                <img src={img1} alt="" style={{display: 'inline-block'}} className='shop_img'/>
                                <div style={{display: 'inline-block'}} className='shop_price'>
                                    <p>生活需要仪式感（你可以活得更高级，把温暖和感动带给你在乎的人）</p>
                                    <span>￥25.98</span>
                                    <span style={{textDecoration: 'line-through'}}
                                          className='shop_pic'>￥36.00</span>
                                    <div><span>X1</span><Icon type="edit"/></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='shop_centre'>
                        <Icon type="check-circle" style={{color: 'red'}}/>
                        <span>根据您的偏好猜您可能喜欢</span>
                    </div>
                    <footer className='shop_footer'>
                        {data && data.length !== 0 ? (
                            <div>
                                <ul className='footer_ul'>
                                        {
                                            data.map((item,index)=>{
                                                return <li className='footer_li' key={index}>
                                                    <div className='footer_list'>
                                                        <img src={item.pic} alt=""/>
                                                        <p>{item.name}</p>
                                                    </div>
                                                    <div className='footer_price' ><p style={{color: '#e53e30'}}>{item.price}</p><p>
                                                        {item.heat}</p></div>
                                                </li>
                                            })
                                        }
                                </ul>
                                {courseData.total <= courseData.page ? '' :
                                    <div style={{width:'100%'}}><Button type="dashed" loading={this.state.isLoading} onClick={this.loadMore} >点击加载更多数据！</Button></div>}
                            </div>) : <Alert
                            message="Warning"
                            description="暂时没有数据，请稍后再来"
                            type="warning"
                            showIcon
                        />}
                </footer>
                </main>
            </div>
        )
    }
}
export default connect(state => ({...state.list}), action.list)(Shopping)
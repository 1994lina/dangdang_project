import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Rate,Button } from 'antd'
import {Icon,Carousel, Layout,} from 'antd';
import action from '../../store/action/index';
import qs from 'qs'
import {queryInfo,addShopCart} from '../../api/course'


const { Header,Content } = Layout;

class Details extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            data:null,
            isShop:-1
        }
    }
    async componentDidMount(){
        let {location:{search}}=this.props,
            {courseId=0}=qs.parse(search.substr(1))||{};
        this.courseId=courseId;
        let result=await queryInfo(courseId);
        if(parseFloat(result.code)===0){
            let {unpay}=this.props.shopCart,
                isShop=-1;
            unpay.find(item=> parseFloat(item.id)===parseFloat(courseId))?isShop=0:null;
            this.setState({data:result.data,isShop});
        }
    }
    handleRetreat=()=>{
        this.props.history.go(-1)
    };
    render(){
        let {data}=this.state;
        if(!data)return '';
        let {pic,name,price,declare,pricing}=data;
        return (
            <div>
                <Layout>
                    <Header className='headerDetails'><div className='baseDetails'>
                        <Icon type="left" style={{fontSize: '.4rem'}} onClick={this.handleRetreat}/>
                            <div className='detailsBox'>
                                <ul className='detailsTop'>
                                    <li>商品</li>
                                    <li>详情</li>
                                    <li>评论</li>
                                    <li>推荐</li>
                                </ul>
                            </div>
                            <Icon type="ellipsis" style={{fontSize: '.4rem'}}/>
                        </div>
                    </Header>
                    <Content className='detailsMain'>
                        <section>
                            <Carousel autoplay>
                                <img src={pic} alt="" style={{width:'50%',height:'50%'}}/>
                                <img src={pic} alt=""/>
                            </Carousel>
                        </section>
                        <section className='detailsFooter'>
                            <div className='detailsAbout'>
                                <span>当当自营</span>{name}</div>
                            <p className='detailsState'>{declare}</p>
                            <div className='detailsPrice'><div className='priceLeft' style={{float:'left'}}>￥<p>{price}</p><p>定价<i>{pricing}</i></p></div><Rate disabled defaultValue={4.5} style={{float:'right'}}/></div>
                            <div className='detailsStar'>
                                <Button onClick={this.handleCart}>加入购物车</Button>
                                <Button>立即购买</Button>
                            </div>
                    </section>
                    </Content>
                </Layout>
            </div>
        )
    }
    handleCart=async ev=>{
        if(this.state.isShop===-1){//未加入购物车
            let result=await addShopCart(this.courseId);
            if(parseFloat(result.code)===0){
                this.props.queryUnpay();
                console.log(this.props.shopCart.unpay);
                this.setState({isShop:0});
            }
            return
        }
        console.log(this.props.shopCart.unpay);
        /*console.log(parseFloat(this.props.courseData.pcs)+1);
        this.props.courseData.pcs=this.props.courseData.pcs+1;*/
        //this.setState({isShop:-1})
    }
}
export default connect(state=>({...state.list}), action.list)(Details)
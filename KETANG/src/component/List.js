import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Button,Alert} from 'antd'
import action from '../store/action'
import {Link} from 'react-router-dom'
import '../static/css/list.less'


class List extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isLoading:false
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
            <footer className='shop_footer'>
                    {data && data.length !== 0 ? (
                        <div>
                            <ul className='footer_ul'>
                                {
                                    data.map((item,index)=>{
                                        return <li className='footer_li' key={index}>
                                            <Link to={{
                                                pathname: '/shopping/details',
                                                search: `?courseId=${item.id}`
                                            }}>
                                            <div className='footer_list'>
                                                <img src={item.pic} alt=""/>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className='footer_price' ><p style={{color: '#e53e30'}}>{item.price}</p><p style={{color:'#b4b4b4'}}>
                                                {item.heat}</p></div>
                                            </Link>
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
        )
    }
}
export default connect(state => ({...state.list}), action.list)(List)
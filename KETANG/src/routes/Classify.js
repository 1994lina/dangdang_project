import React from 'react';
import {connect} from 'react-redux'
import {Icon,Input,Tabs} from 'antd'
import '../static/css/classify.less'
import Swiper from '../component/Swiper'
import TabCarder from "../component/TabCarder";
import {queryBanner} from "../api/course";
import BookShow from "../component/BookShow";

const TabPane = Tabs.TabPane;
class Classify extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataImg:[]
        }

    }
    componentDidMount(){
        queryBanner().then(data=>{
            this.setState({dataImg:data})
        })
    }
    render() {
        return <div>
            <div className="headerNavBox">
                <div className="classWrapper">
                    <Icon type="left" style={{"marginLeft":"10px"}} className="icon"/>
                     <Input  placeholder="搜索商品/店铺/种类" prefix={<Icon type='search'/>}  className='inputBox' />
                    <Icon type="ellipsis" className="icon"/>
                </div>
            </div>
            <main className='allBox'>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    style={{ height: "100%" }}
                >
                    <TabPane tab="图书" key="1">
                        <Swiper dataImg = {this.state.dataImg}/>
                        <TabCarder/>
                        <BookShow/>
                    </TabPane>
                    <TabPane tab="童书" key="2">Content of Tab 2</TabPane>
                    <TabPane tab="电子书" key="3">Content of Tab 3</TabPane>
                </Tabs>
            </main>
        </div>

    }
}

export default connect()(Classify)
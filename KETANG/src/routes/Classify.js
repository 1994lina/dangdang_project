import React from 'react';
import {connect} from 'react-redux'
import {Icon,Input,Tabs} from 'antd'
import '../static/css/classify.less'
import Swiper from '../component/Swiper'
import TabCarder from "../component/TabCarder";

const TabPane = Tabs.TabPane;
class Classify extends React.Component {
    constructor(props, context) {
        super(props, context);

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
                        <Swiper/>
                        <TabCarder/>
                    </TabPane>
                    <TabPane tab="童书" key="2">Content of Tab 2</TabPane>
                    <TabPane tab="电子书" key="3">Content of Tab 3</TabPane>
                </Tabs>
            </main>
        </div>

    }
}

export default connect()(Classify)
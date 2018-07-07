import React from 'react';
import {connect} from 'react-redux'
import {Icon,Input,Tabs} from 'antd'
import '../static/css/classify.less'
import Swiper from '../component/Swiper'
import TabCarder from "../component/TabCarder";
import {queryBanner,queryList} from "../api/course";
import BookShow from "../component/BookShow";
import action from "../store/action";

const TabPane = Tabs.TabPane;
class Classify extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataImg:[],
            bookList:[]
        }

    }
    componentWillMount(){

    }
    async componentDidMount(){
        // 获取轮播图数据
        // queryBanner().then(data=>{
        //     this.setState({dataImg:data})
        // })
        this.props.queryBanner();
        // 获取图书列表数据  这个接口明天确定一下？？
        // queryList().then(data=>{
        //     this.setState({bookList:data})
        // })
        this.props.queryList();
        // 获取左侧列表
        this.props.queryListName();

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
            <main className='allBox mainContent'>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    style={{ height: "100%" }}
                >
                    {this.props.listname.map((item)=>(
                        <TabPane tab={item.name} key={item.id}>
                            <Swiper dataImg = {this.props.banner}/>
                            <div className="tabCarder">
                                <div>
                                    <div>
                                        <p>进入当当商城</p>
                                        <p>低至2.9折</p>
                                    </div>
                                    <Icon type="right"/>
                                </div>
                                {item.id % 2 ==0 ? (
                                    <div>
                                        <div>
                                            <p>进入当当商城</p>
                                            <p>低至2.9折</p>
                                        </div>
                                        <Icon type="right"/>
                                    </div>
                                ):''}
                            </div>
                            <BookShow bookList = {this.props.list} title="榜单" size="3"/>
                            <BookShow bookList = {this.props.list} title="中小学教辅" size="4" subTitle="畅销榜"/>
                            <BookShow bookList = {this.props.list} title="小说" size="3" subTitle="畅销榜"/>
                            <BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>
                        </TabPane>
                    ))}

                    {/*<TabPane tab="图书" key="1">*/}
                        {/*<Swiper dataImg = {this.props.banner}/>*/}
                        {/*<div className="tabCarder">*/}
                            {/*<div>*/}
                                {/*<div>*/}
                                    {/*<p>进入当当商城</p>*/}
                                    {/*<p>低至2.9折</p>*/}
                                {/*</div>*/}
                                {/*<Icon type="right"/>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<div>*/}
                                    {/*<p>进入当当商城</p>*/}
                                    {/*<p>低至2.9折</p>*/}
                                {/*</div>*/}
                                {/*<Icon type="right"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<BookShow bookList = {this.props.list} title="榜单" size="3"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="中小学教辅" size="4" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="小说" size="3" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>*/}
                    {/*</TabPane>*/}
                    {/*<TabPane tab="童书" key="2">*/}
                        {/*<Swiper dataImg = {this.props.banner}/>*/}
                        {/*<div className="tabCarder">*/}
                            {/*<div>*/}
                                {/*<div>*/}
                                    {/*<p>进入当当商城</p>*/}
                                    {/*<p>低至2.9折</p>*/}
                                {/*</div>*/}
                                {/*<Icon type="right"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<BookShow bookList = {this.props.list} title="榜单" size="3"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="中小学教辅" size="4" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="小说" size="3" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>*/}
                    {/*</TabPane>*/}
                    {/*<TabPane tab="电子书" key="3">*/}
                        {/*<Swiper dataImg = {this.props.banner}/>*/}
                        {/*<div className="tabCarder">*/}
                            {/*<div>*/}
                                {/*<div>*/}
                                    {/*<p>进入当当商城</p>*/}
                                    {/*<p>低至2.9折</p>*/}
                                {/*</div>*/}
                                {/*<Icon type="right"/>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<div>*/}
                                    {/*<p>进入当当商城</p>*/}
                                    {/*<p>低至2.9折</p>*/}
                                {/*</div>*/}
                                {/*<Icon type="right"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<BookShow bookList = {this.props.list} title="榜单" size="3"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="中小学教辅" size="4" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="小说" size="3" subTitle="畅销榜"/>*/}
                        {/*<BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>*/}
                    {/*</TabPane>*/}
                </Tabs>
            </main>
        </div>

    }
}

export default connect(state => ({ ...state.Classify }), action.Classify)(Classify)
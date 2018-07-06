import React from 'react'
import ReactSwipe from 'react-swipe';

// 获取轮播图数据
import {queryBanner} from "../api/course"
class Carousel extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1000}}>
                {/*{*/}
                    {/*this.props.dataImg.data && this.props.dataImg.data.map((item,index)=>(*/}
                        {/*<div key={index}>*/}
                            {/*<img className="cate_banner_img"*/}
                                 {/*src={item.pic} alt="" style={{"width":"100%","height":"100%"}}/>*/}
                        {/*</div>*/}
                    {/*))*/}
                {/*}*/}
                <div>
                    <img className="cate_banner_img"
                         src="http://img.zhufengpeixun.cn/reactposter.png" alt="" />
                </div>
                <div>
                    <img className="cate_banner_img"
                         src="http://img.zhufengpeixun.cn/vueposters.png" alt="" />
                </div>
                <div>
                    <img className="cate_banner_img"
                         src="http://img62.ddimg.cn/upload_img/00702/B/886x315_dl_20180629-1530512215.jpg" alt="" />
                </div>
            </ReactSwipe>
        );
    }
}
export default Carousel
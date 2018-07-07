import React from 'react'
import {Carousel} from 'antd'
import ReactSwipe from 'react-swipe';

// 获取轮播图数据
class Swipe extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <Carousel autoplay>
                {
                    this.props.dataImg.data && this.props.dataImg.data.map((item,index)=>(
                        <div key={index}>
                            <img className="cate_banner_img"
                                 src={item.pic} alt="" style={{"width":"100%","height":"125px"}}/>
                        </div>
                    ))
                }
            </Carousel>
        );
    }
}
export default Swipe
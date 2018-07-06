import React, { Component } from 'react';
import '../../static/css/home.less'
import ReactSwipe from 'react-swipes'





class Dishiqi extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {

        this.autoTimer = setInterval(() => {
            this.leftTimer();
        }, 1000)


    }

    render() {

        let opt = {
            distance: 82, // 每次移动的距离，卡片的真实宽度
            currentPoint: 0,// 初始位置，默认从0即第一个元素开始
            autoPlay: false, // 是否开启自动播放
            swTouchstart: (ev) => {

            },
            swTouchmove: (ev) => {

            },
            swTouchend: (ev) => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled
                }
                // console.log(data);
                // this.setState({
                //     curCard: ev.newPoint
                // })
            }
        }



        let { hours, minutes, seconds } = this.state;

        return <div className="brand_street1">
            <div className="title1">
                <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt="品牌街" />
            </div>
            <div className="brand_list1">
                <a className="seckilling-title" href="javascript:;">
                    <span className="seckilling-content">
                        <span className="seckill_t kuan"><span>{hours}</span></span>
                        <span className="seckill_d">时</span>
                        <span className="seckill_t"><span>{minutes}</span></span>
                        <span className="seckill_d">分</span>
                        <span className="seckill_t red"><span>{seconds}</span></span>
                        <span className="seckill_d">秒</span>
                    </span>
                </a>


                <ul className="ul_wrap1" className="card-swipe">
                    <ReactSwipe className="card-slide" options={opt}>

                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m7.ddimg.cn/10/27/1344018367-1_h_1.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m9.ddimg.cn/1/23/1403367769-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m9.ddimg.cn/18/33/1336713759-1_h_3.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m8.ddimg.cn/57/27/1091700678-1_h_1.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m9.ddimg.cn/3/25/1489470249-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m7.ddimg.cn/58/12/1269424687-1_h_1.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:;">
                                <p className="pic"><img src="http://img3m9.ddimg.cn/93/26/1349740749-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </a>
                        </li>
                        <li className="seckilling-box">
                            <a href="javascript:void(0);" className="j_seckillMore seckill_more" ddt-pit="more">
                                <p className="pic"><img className="" src="http://img60.ddimg.cn/upload_img/00610/new_index/more.png" />
                                </p>
                            </a>
                        </li>
                    </ReactSwipe>
                </ul>
                <ul className="style513">
                    <li>
                        <a href="javascript">
                            <img alt="" src="http://img59.ddimg.cn/14540040029369_y.jpg" />
                        </a>
                    </li>
                </ul>

            </div>

            
        </div>;
    }

    leftTimer = () => {
        let nowTime = new Date(),
            tarTime = new Date('2020/12/26 18:1:00'),
            diffTime = tarTime - nowTime;//获取当前时间和目标时间之间的差值（俩个时间相差的毫秒差）
        if (diffTime >= 0) {
            let hours = Math.floor(diffTime / (1000 * 60 * 60));
            diffTime = diffTime - hours * 3600000;
            let minutes = Math.floor(diffTime / (1000 * 60));
            diffTime = diffTime - minutes * 60000;
            let seconds = Math.floor(diffTime / 1000);
            hours < 10 ? hours = '0' + hours : null;
            minutes < 10 ? minutes = '0' + minutes : null;
            seconds < 10 ? seconds = '0' + seconds : null;
            this.setState({
                hours,
                minutes,
                seconds
            })
            return;
        }
        // timeSpan.innerHTML = '-- : -- : --';
        clearInterval(this.autoTimer);
    }


}
export default Dishiqi;
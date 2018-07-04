import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon, Input, Carousel } from 'antd';
import '../static/css/home.less'
import action from '../store/action/index'

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '首页'
        }
    }

    async componentDidMount() {
        let { queryBanner, bannerData,queryBanner3, bannerData3, } = this.props;

        if (!bannerData || bannerData.length === 0) {
            queryBanner();
        }

        if (!bannerData3 || bannerData3.length === 0) {
            queryBanner3();
        }
    }

    render() {
        let { bannerData,bannerData3 } = this.props;

        return <div>
            <header className='headerNavBox'>
                <div className='homeBox'>
                    <div className='baseBox'>
                        <h1 className='logo'>当当</h1>
                        <div>
                            <Input placeholder="百丽童鞋" prefix={<Icon type='search' />} className='inputBox' />
                        </div>
                        <Icon className='icon' type='menu-fold' />
                    </div>
                </div>
            </header>

            <main className='allBox'>
                <Carousel autoplay>
                    <div><img src="http://img62.ddimg.cn/upload_img/00452/1/0703-y-wxjdt-1242-366-1530510925.jpg" alt="" /></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/B/1242x366_dl_20180629-1530512215.jpg" alt="" /></div>
                    <div><img src="http://img60.ddimg.cn/upload_img/00609/mao/b0628banner1242366-1530524637.jpg" alt="" /></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/J/1242x366_lyx_0702-1530516279.jpg" alt="" /></div>
                </Carousel>

                <div className="imgDiv">
                    <img src="http://img63.ddimg.cn/upload_img/00626/sxt03/icon-1530603026.jpg" alt=""/>
                </div>

                <div className="ify">
                    <ul>
                        <li><a href="javascript:;"><img src="http://img62.ddimg.cn/upload_img/00528/0000/1-00-1528978871.png" alt="" /></a></li>
                        <li><a href="javascript:;"><img src="http://img62.ddimg.cn/upload_img/00528/000/0000000-1530265533.png" alt="" /></a></li>
                        <li><a href="javascript:;"><img src="http://img60.ddimg.cn/upload_img/00528/0000/3-00-1528978871.png" alt="" /></a></li>
                        <li><a href="javascript:;"><img src="http://img60.ddimg.cn/upload_img/00528/0000/4-00-1528978871.png" alt="" /></a></li>
                        <li><a href="javascript:;"><img src="http://img62.ddimg.cn/upload_img/00528/0000/000-1530273800.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className='journalism'>
                    <div className="ddkx_icon">
                        <img src="http://img60.ddimg.cn/upload_img/00709/789065/123.png" alt="" />
                    </div>
                            {bannerData && bannerData.length !== 0 ? ( <Carousel vertical autoplay dots='false'>
                                {bannerData.map((item, index) => {
                                    let {name, pic} = item;
                                    return <div key={index}><a href="javascript:;">
                                    <span className="ddkx_title_label_wrap">热卖</span>
                                    <span className="ddkx_text">{item.name}</span>
                                </a></div>;
                                })}
                            </Carousel>) : ''}
                    

                    <a href="javascript:;" className="ddkx_more">更多</a>
                    <div className="style503"></div>
                </div>


                <div className="brand_street">
                    <div className="title">
                        <img src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg" alt="品牌街"/>
                    </div>
                    <div className="brand_list">   
                        <ul className="ul_wrap">
                            {bannerData3 && bannerData3.length !== 0 ? ( <Carousel autoplay>
                            {bannerData3.map((item, index) => {
                               
                                return <li key={index}>
                                    {
                                        item.map((itte,index)=>{
                                            return <dl key={index}>
                                                <dd>
                                                <a href="javascript:;"><img src={itte.pic} alt=""/></a>
                                                </dd>
                                            </dl>
                                        })
                                    }
                                </li>;
                            })}
                        </Carousel>) : ''}
                        </ul>
                    </div>
                </div>


                <div></div>            
            
            </main>
        </div>

    }
}
export default connect(state => ({ ...state.Home }), action.Home)(Home)
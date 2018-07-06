import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Rate} from 'antd'
import NavTop from '../component/NavTop'

class Details extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'商品  详情  评论  推荐'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}></NavTop>
                <section>
                  <ul>
                      <li><a href="javascript:;"><img src={require('../static/images/img.jpg')} alt=""/></a></li>
                      <li><a href="javascript:;"><img src={require('../static/images/img.jpg')} alt=""/></a></li>
                  </ul>
                </section>
                <section>
                  <div><span>当当自营</span>寂静的春天 人教统编教材八年级上推荐阅读（全译精装典藏版 新课标必读 朱永新及各省级教育专家审订推荐）</div>
                  <p>教育部语文部编教材八年级（上）名著导读指定必读书目</p>
                </section>
                <div><p>￥19.80</p><p>定价<i>￥24.8</i></p></div>
                <div><Rate disabled defaultValue={4.5} /></div>
            </div>
        )
    }
}
export default connect()(Details)

import React, { Component } from 'react';
import '../../static/css/home.less'


class Footersss extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render() {

        return <footer className="footer new">
        <nav className="b-nav">
            <p>
                <a href="javascript:;" >提建议</a>
                <a className="red" href="javascript:;" >触屏版</a>
                <a href="javascript:;" >电脑版</a>
                <a href="javascript:;" >帮&nbsp;&nbsp;助</a>
            </p>
        </nav>
        <section className="copyright">
            <p>Copyright ©2018 北京当当网信息技术有限公司</p>
            <p>北京市朝阳区北三环东路8号，100028</p>
        </section>
    </footer>
        

    }
}

export default Footersss;
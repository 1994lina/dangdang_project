import React from "react";
import {connect} from "react-redux";
import NavTop from "../component/NavTop";
import NormalLoginForm from "../routes/NormalLoginForm";
import  WrappedDynamicFieldSet from "../routes/Rrgis";
import {Icon} from "antd";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "注册"
        }
    }


    render() {
        return <div>
            <NavTop title={this.state.title}/>
            <div className="register">
                <div className="login2">
                    <WrappedDynamicFieldSet></WrappedDynamicFieldSet>
                </div>
                <div className="safe">
                    <p style={{textAlign:"center"}}> 注册即表示您同意《<a href="">当当交易条款</a>》和《 <a href="">当当社区条款</a>》 </p>
                </div>
                <div className="support">
                    <ul>
                        <li>
                            <Icon type="check-circle-o" />
                            7天无理由退货
                        </li>

                        <li>
                            <Icon type="check-circle-o" />
                            支持货到付款
                        </li>
                        <li>
                            <Icon type="check-circle-o" />
                            100%正品
                        </li>
                    </ul>
                </div>
                </div>

        </div>
    }

}
export  default  connect()(Register)
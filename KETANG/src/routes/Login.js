import React from "react";
import {connect} from "react-redux";
import NavTop from '../component/NavTop'
 // import "../../static/css/mydangdang.less";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {NavLink} from "react-router-dom"
import WrappedNormalLoginForm   from "../routes/NormalLoginForm"
 class  Login extends React.Component {
     constructor(props){
         super(props);
         this.state ={
             title:"登录"
         }
     }


     render() {
         return <div>
             <NavTop title={this.state.title} />
             <div className="login1">

                 <WrappedNormalLoginForm/>

                 <div className="safe">
                     <span> 为保障账户安全，请您不要设置与邮箱密码相同的账户登录密码或支付密码，<a href="">谨防诈骗!</a>  </span>
                 </div>
                 <div className="pay">
                     <p>第三方支付</p>
                     <ul>
                         <li>
                             <em style={{fontStyle:"normal"}}>
                             </em>
                            <i style={{fontStyle:"normal"}}>腾讯QQ</i>

                         </li>
                         <li>
                             <em style={{fontStyle:"normal"}}>
                             </em>
                             <i style={{fontStyle:"normal"}}>支付宝</i>

                         </li>
                         <li>
                             <em style={{fontStyle:"normal"}}>
                             </em>
                             <i style={{fontStyle:"normal"}}>新浪微博</i>

                         </li>
                     </ul>
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
 export  default  connect()( Login )
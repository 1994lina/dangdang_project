import React from "react";
import {connect} from "react-redux";
import {Icon} from 'antd';
 class  Mydd_child extends React.Component {
     constructor(props) {
         super(props);
     }


     render() {
         return <div>
             <div className="indent_1">

                 <a href="">
                     <div className="indent_img">
                         <img src="http://img62.ddimg.cn/upload_img/00487/11111/wd-012-02.png"/>
                     </div>
                     我的礼券
                     <Icon type="right"/>
                 </a>
             </div>
             <div className="indent_1">

                 <a href="">
                     <div className="indent_img">
                         <img src="http://img60.ddimg.cn/upload_img/00487/11111/wd-012-03.png"/>
                     </div>
                     积分抵现
                     <Icon type="right"/>
                 </a>
             </div>
             <div className="indent_1">

                 <a href="">
                     <div className="indent_img">
                         <img src="http://img62.ddimg.cn/upload_img/00528/1234/111.png"/>
                     </div>
                     我的电子书
                     <Icon type="right"/>
                 </a>
             </div>
             <div className="indent_1">

                 <a href="">
                     <div className="indent_img">
                         <img src="http://img61.ddimg.cn/upload_img/00487/11111/wd-012-04.png"/>
                     </div>
                     我的礼品卡
                     <Icon type="right"/>
                 </a>
             </div>
             <div className="indent_1">

                 <a href="">
                     <div className="indent_img">
                         <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-05.png"/>
                     </div>
                     收获地址
                     <Icon type="right"/>
                 </a>
             </div>

         </div>
     }



 }
 export  default  connect()( Mydd_child )
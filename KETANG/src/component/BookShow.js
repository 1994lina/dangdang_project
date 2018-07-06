import React from 'react'

class BookShow extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="bookWrapper">
                <p>榜单</p>
                <div className="bookDetail">
                    <div>
                        <img src="http://img60.ddimg.cn/upload_img/00705/yhj/1-tuscxb-6.15.png" alt=""/>
                        <span>总榜</span>
                    </div>
                    <div>
                        <img src="http://img63.ddimg.cn/upload_img/00705/J/6.22-1529573781.png" alt=""/>
                        <span>新书榜</span>
                    </div>
                    <div>
                        <img src="http://img62.ddimg.cn/upload_img/00705/yhj/3-tongscxb.png" alt=""/>
                        <span>童书榜</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShow
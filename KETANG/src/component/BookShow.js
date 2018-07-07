import React from 'react'
import {NavLink} from 'react-router-dom'
class BookShow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.bookList.data);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps,444);
    }
    render(){
        return(
            <div className="bookWrapper">
                <p>榜单</p>
                <div className="bookDetail">
                    {
                        this.props.bookList.data && this.props.bookList.data.slice(0,3).map((item,index)=>(
                            <NavLink to="/">
                                <div>
                                    <img src={item.pic} alt="" style={{"width":"80%","height":"100px"}}/>
                                    <span>{item.name.slice(0,3)}</span>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BookShow
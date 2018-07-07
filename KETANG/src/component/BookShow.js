import React from 'react'
import {NavLink} from 'react-router-dom'
class BookShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){

    }
    render(){
        return(
            <div className="bookWrapper">
                <div className="bookTitle">
                    <span>{this.props.title}</span>
                    <span>{this.props.subTitle ? this.props.subTitle + " >" : ""}</span>
                </div>
                <div className="bookDetail">
                    {
                        this.props.bookList.length && this.props.bookList.slice(0,this.props.size).map((item,index)=>(

                                <div key={index}>
                                    <NavLink to={{
                                        pathname: '/shopping/details',
                                        search: `?courseId=${item.id}`
                                    }} style={{"textAlign":"center"}}>
                                        <img src={item.pic} alt="" style={{"height":"100px"}}/>
                                    </NavLink>
                                    <span>{item.name.slice(0,3)}</span>

                                </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BookShow
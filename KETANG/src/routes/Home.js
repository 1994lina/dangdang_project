import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'

class Home extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'首页'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>home</main>
            </div>
        )
    }
}
export default connect()(Home)
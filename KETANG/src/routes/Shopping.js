import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'

class Shopping extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'购物车'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>Shopping</main>
            </div>
        )
    }
}
export default connect()(Shopping)
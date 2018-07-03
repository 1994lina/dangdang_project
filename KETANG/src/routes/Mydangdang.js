import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'

class Mydangdang extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'我的当当'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>Mydangdang</main>
            </div>
        )
    }
}
export default connect()(Mydangdang)
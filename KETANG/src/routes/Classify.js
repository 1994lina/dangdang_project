import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'

class Classify extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'分类'
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>Classify</main>
            </div>
        )
    }
}
export default connect()(Classify)
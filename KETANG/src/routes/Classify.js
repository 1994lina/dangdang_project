import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Icon,Input} from 'antd';

class Classify extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <header className='headerNavBox'>
                    <div className='homeBox'>
                        <div className='baseBox'>
                            <h1 className='logo'>当当</h1>
                            <div>
                                <Input  placeholder="百丽童鞋" prefix={<Icon type='search'/>}  className='inputBox' />
                            </div>
                            <Icon className='icon' type='ellipsis'/>
                        </div>
                    </div>
                </header>
                <main className='allBox'>Classify</main>
            </div>
        )
    }
}
export default connect()(Classify)
import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import Shopping from './shopping/Shopping'
import Details from './shopping/Details'
import '../static/css/shopping.less'
import '../static/css/details.less'

export default class Shopping_one extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section className='shopping_i'>
            <Switch>
                <Route path='/shopping' exact component={Shopping}/>
                <Route path='/shopping/details' component={Details}/>
            </Switch>
        </section>;
    }
}
/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';


import NavBottom from './component/NavBottom'
import Home from "./routes/Home";
import Classify from "./routes/Classify";
import Shopping from "./routes/Shopping";
import Mydangdang from "./routes/Mydangdang";
import Login from "./routes/Login";
import Register from './routes/Register'


/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/classify' component={Classify}/>
                    <Route path='/shopping' component={Shopping}/>
                    <Route path='/mydangdang' component={Mydangdang}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Redirect to='/home'/>
                </Switch>
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);
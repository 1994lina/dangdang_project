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

/*IMPORT COMPONENT*/
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';


/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*HEADER*/}
                <NavTop/>

                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>

                    </Switch>
                </main>

                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);
import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../style/reset.scss';
import '../style/public.scss';
import "../plugins/flexible";
import {asyncComponent} from  "../plugins/AsyncComponent";
import "babel-polyfill";
import vConsole from '../plugins/vconsole.min';

const Application = asyncComponent(()=>import("./Application/Application.js"));

const ifShowVconsole = ()=>{
    const reg = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/g;
    const currentHref = location.href;
    const isNoProd = reg.test(currentHref) || currentHref.indexOf('dev') !== -1 || currentHref.indexOf('uat') !== -1 ;

    if(isNoProd){
        let vconsole = new vConsole();
    }
};




const BasicExample = ()=>(
    <Router>
        <div>
            <Route exact path="/jingneiyou" component={Application}/>
        </div>
    </Router>
);

ifShowVconsole();

render(
    BasicExample(),
    document.querySelector('#app')
);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {EventEmitter} from 'eventemitter';

let tipsEvent = new EventEmitter();

export default class Tips extends Component {
    state={
        value:''
    };

    componentDidMount = ()=>{
        let warnbox = this.refs.warnbox;
        tipsEvent.on('update',(info)=>{
            //如果触发事件并提供了提示文本，那么显示提示文本；
            if(typeof info === 'string'){
                this.setState({
                    value:info
                });
            }

            warnbox.style.display = '-webkit-box';
            setTimeout(()=>{
                warnbox.classList.add('hide');
                setTimeout(()=>{
                    warnbox.style.display = 'none';
                    warnbox.classList.remove('hide');
                    //value必须重置，否则使用props传值将没有效果；
                    this.state.value = '';
                },1000);
            },3000);
        })
    };

    render = ()=>{
        let {tag,text} = this.props;
        let {value} = this.state;
        return (
            <div className="u-warn-box" ref="warnbox" id={tag}>
                <div className="contbox">
                    <p className="cont">{value ? value : text}</p>
                </div>
            </div>
        )
    }
}

class TopTips extends Component {
    state = {};

    static propTypes = {
        link:PropTypes.string,
        message:PropTypes.string.isRequired
    };

    static defaultProps = {
        link:'',
        message:'',
        fixed:false
    };

    render(){
        let {message,link,fixed} = this.props;
        return (
            <a href={link} className={"u-top-tips " + (fixed?'fixed':'')}>
                <span className="cont">{message}</span>
            </a>
        );
    }
}


export {tipsEvent,TopTips};


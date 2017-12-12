import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Dialog extends Component {
    state={

    };
    componentDidMount = ()=>{
        const {confirm} = this.props;
        this.refs.confirm.addEventListener('click',()=>{
            confirm && confirm();
        });
    };
    setTips = ()=>{
        let result = [];
        let {tips} = this.props;
        console.log(typeof tips);
        if(tips instanceof Array){
            tips.forEach((item,index)=>{
                result.push(<p key={index}>{item}</p>);
            });
        } else {
            result.push(<p key="1">{tips}</p>)
        }
        return result;
    }

    render = ()=>{
        const {
            icon,
            link
        } = this.props;
        const tipsArr = this.setTips();

        return (
            <div className="u-dialog-box">
                <div className="cont-box">
                    <img src={icon} className="icon" />
                    <div className="tips">
                        {tipsArr}
                    </div>
                    <div className="button-box">
                        <a href={link ? link : '#'} className="button-main" ref='confirm'>我知道了</a>
                    </div>
                </div>
            </div>
        )
    }
}

class ShareDialog extends Component {
    state = {};

    render = ()=>{
        return (
            <div className="share-dialog">
                <img src={require('../../images/getPoster.png')} className="photo"/>
            </div>
        );
    }
}


class ShareTips extends Component {
    state = {};

    componentDidMount = ()=>{
        const {callback} = this.props;
        this.refs.self.addEventListener('click',()=>{
            callback && callback();
        });
    };

    render = ()=>{
        return (
            <div className="share-tips" ref="self">
                <img src={require('../../images/share-icon.png')} className="photo"/>
            </div>
        );
    }
}




export {Dialog,ShareDialog,ShareTips};


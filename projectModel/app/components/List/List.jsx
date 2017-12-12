import React, {Component} from "react";


class List extends Component {
    state = {};

    render = ()=> {
        const {
            icon,
            name,
            link
        } = this.props;

        return (
            <a href={'/' && link} className="u-list">
                <img src={icon} className="icon"/>
                <p className="title">{name}</p>
                <img src={require('../../images/MEta_22.png')} className="arrow"/>
            </a>
        )
    }
}

class ShowInfoList extends Component {
    state = {};

    render = ()=> {
        let {
            status,
            headPhoto,
            title,
            time,
            amount,
        } = this.props;
        return (
            <div className="u-show-info-list">
                <img src={headPhoto} className="icon"/>
                <div className="title-box">
                    <p className="title">{title}</p>
                    <p className="tips">{time}</p>
                </div>
                <div className={"state-box " + (status === '1' ? "waiting" : '')}>
                    <p className="cont">＋{amount}元</p>
                    <p className="state-icon">{status === '1' ? '待发放' : '已发放'}</p>
                </div>
            </div>
        )
    }
}

class InfoList extends Component {
    state = {};

    render() {
        const {
            titleStyle,
            title,
            time,
            tips,
            amount,
            arrow,
            link
        } = this.props;
        return (
            <a href={link ? link : '#'} className="u-list-earnings">
                <div className="info-box left-box">
                    <h3 className={titleStyle ? "amount" : "title"}>{title}</h3>
                    <p className="tips">{time}</p>
                </div>
                <div className="info-box right-box">
                    <p className="amount">{amount}</p>
                    <p className="tips">{tips}</p>
                </div>
                {arrow && <img src={require('../../images/MEta_22.png')} className="arrow"/>}
            </a>
        )
    }
}



class SyllabusList extends Component {
    state = {};

    render() {
        let {
            coursePic,
            newPrice,
            name,
            id,
            categoryName,
            countDown,
            fee,
            state,
            link
        } = this.props;
        return (
            <div className="SyllabusList">
                <div className="cover-box">
                    <img src={coursePic} className="cover"/>
                </div>
                <div className="font-box">
                    <h2 className="title">{name}</h2>
                    {/*{(state < 3 && countDown !== 99999)  ? <p className="tips">距离开课还有{countDown}天</p>:''}*/}
                    {state === 3  && <p className="tips">开课中</p>}
                    {state > 3  && <p className="tips">已完结</p>}
                    <div>
                        <span className="green">￥{newPrice} | </span>
                        <span className="orange">分享得{fee}</span>
                    </div>
                </div>
                <div className="button-box">
                    <div className="button-box-inner">
                        <img src={require('../../images/bi.png')} className="icon"/>
                        <a href={link ? link : '#'} className="cont">去分享</a>
                    </div>
                </div>
                <p className="tag outline">{categoryName}</p>
            </div>
        );
    }
}

export {ShowInfoList, List, InfoList, SyllabusList};


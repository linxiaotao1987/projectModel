/**
 * ME的分享功能设置
 */

import linAjax from './XMLHttpRequest';
import ajaxLoadBox from "./loading/javascripts/ajaxloadbox";

function linWxShare(pageTitle='',desc='来ME，遇见更美的课程',personId,courseId,coursePic) {
    let authorization = setInterfacePath();
    const loadbox = new ajaxLoadBox();
    loadbox.show();
    linAjax({
        type: 'post',
        url: authorization,
        data: {
            "url": encodeURIComponent(location.href)
        },
        timeout: '',
        success: function (data) {
            data = JSON.parse(data);
            if (data.code === 0) {
                window.localStorage.authorization = JSON.stringify(data.data);
                wxRegister(data);
            }
        },
        error: function (data) {
            console.log('服务器出错');
        },
        complete:function(){
            loadbox.hide();
        },
        setRequestHeader: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded'
        }
    });


    function setInterfacePath() {
        var domain = window.location.origin, authorization = '';

        authorization = domain + '/index.php?r=site/apijsconfig';

        return authorization;
    }

    function wxRegister(obj) {
        const loadbox = new ajaxLoadBox();
        var data = obj.data;
        loadbox.show();

        console.log(data);
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'hideMenuItems',
                'closeWindow',
                'chooseWXPay',
                'getNetworkType',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'uploadVoice',
                'downloadVoice']
        });
        wx.ready(function () {
            share();
            loadbox.hide();
        });
        wx.error(function(res){
            loadbox.hide();
        });

    }

    function setShareLink(personId,courseId) {
        let domain = location.origin,
            result = '';

        if(domain === 'https://dev.wx.mecollege.cn'){
            result = 'https://dev.wx.mecollege.cn/index.php?r=course/course-detail&' + 'id=' + courseId + '&agentCode=' + personId;
        }

        if(domain === 'https://wx.mecollege.cn'){
            result = 'https://wx.mecollege.cn/index.php?r=course/course-detail&' + 'id=' + courseId + '&agentCode=' + personId;
        }

        return result;
    }

    function share() {
        let shareLink = setShareLink(personId,courseId);
        let imgUrl = coursePic ? coursePic :'http://dev.wx.mecollege.cn/web/xiaotao/menewyear/images/sharelogo02.png';
        console.log('share');
        wx.onMenuShareTimeline({
            title: pageTitle ? pageTitle : document.title, // 分享标题
            link: shareLink, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        wx.onMenuShareAppMessage({
            title: pageTitle ? pageTitle : document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imgUrl, // 分享图标
            type: '',
            dataUrl: ''

        });

    }

}

export default linWxShare;
/**
 * 请求数据的接口及授权地址
 */
let linkBase = location.origin;
let courseLinkBase = linkBase + '/index.php?r=course/course-detail&id=';
let classLinkBase = linkBase + '/index.php?r=course/course-playback&';
let buyedCourseLink = linkBase + '/index.php?r=v2/user-course/detail&kecheng_id=';
let MElogin;

if(linkBase !== 'https://wx.mecollege.cn'){
    MElogin = linkBase + "/chenjiayu/index.php?r=agent-service/oauth&mbackurl=" + encodeURIComponent(location.href);
} else {
    MElogin = linkBase + "/index.php?r=agent-service/oauth&mbackurl=" + encodeURIComponent(location.href);
}

export {linkBase,courseLinkBase,classLinkBase,buyedCourseLink,MElogin};


function getLinkBase(){
    let domain = location.origin;
    if(domain !== 'https://wx.mecollege.cn'){
        return 'https://dev.wx.mecollege.cn';
    }
    return 'https://wx.mecollege.cn';
}
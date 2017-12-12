

function setInterface(name){
    let host = location.host,
        baseurl = 'https://dev.wx.mecollege.cn/index.php?r=';
    let result = '';

    if(host.indexOf('dev') !== -1){
        // baseurl = '';
    }
    else if(host.indexOf('uat') !== -1){
        // baseurl = '';
    } else if(host === '192.168.201.210'){
        // baseurl = '';
    } else {
        baseurl = 'https://wx.mecollege.cn/index.php?r=';
    }

    result = baseurl + name;
    return result;
}
//test
let applyIF = setInterface('agent-service/apply');




export {
    applyIF
}



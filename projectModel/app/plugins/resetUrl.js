/**
 * Created by xiaochao on 2017/5/26.
 */
export default function resetUrl(){
    let url = location.href,
        hash = '',
        path = '',
        length = url.length;
    if(url.indexOf('/#/') === -1){//如果连接被篡改
        hash = url.substr(url.indexOf('#/'),length);
        path = url.substr(0,url.indexOf('/build/'));
        location.href = path + '/build/' + hash;
    }
}
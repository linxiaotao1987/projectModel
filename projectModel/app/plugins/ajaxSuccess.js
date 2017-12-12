//loading弹窗依赖
import ajaxLoadBox from "./loading/javascripts/ajaxloadbox";
import "./loading/sass/assembly/_ajaxLoadbox.scss";
import './zepto';
import {MElogin} from './baseLink'

function ajaxSuccess(response, callback) {
    if (typeof response !== 'object') {
        response = JSON.parse(response);
    }
    if (response.code === 10001 || response.code === 10002) {
        location.href = MElogin;
        return;
    }
    if (response.code === "0" || response.code === 0) {
        callback(response.data);
    }
}

function getInfo(interfaceUrl, success, type = 'GET', data = {}, locationIF) {
    const error = (response)=> {
        // alert('请求数据出错');
        console.log(response);
    };
    const loadbox = new ajaxLoadBox();
    const origin = location.origin;

    if (origin === "http://192.168.201.210") {
        $.ajax({
            type: 'GET',
            url: 'http://192.168.201.210/json/' + locationIF + '.json',
            data: data,
            success: (response)=> {
                ajaxSuccess(response, success);
            },
            error: error,
            complete: ()=> {
                loadbox.hide();
            }
        });
        return;
    }
    loadbox.show();
    $.ajax({
        type: type,
        url: interfaceUrl,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        data: data,
        success: (response)=> {
            ajaxSuccess(response, success);
        },
        error: error,
        complete: ()=> {
            loadbox.hide();
        }
    });
}

export default getInfo;


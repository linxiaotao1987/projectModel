/**
 * Created by xiaochao on 2017/2/14.
 */
function getParams(currentHref,index='?'){

    let startPosition = currentHref.indexOf(index),
        paramArr=[],
        targetString='',
        indexLength = index.length,
        currentHrefLength = currentHref.length;
    if(startPosition === -1){
        return false;
    }

    targetString = currentHref.substring(startPosition + indexLength,currentHrefLength);
    paramArr = targetString.split('&');
    paramArr = getParamObject(paramArr);

    return paramArr;

    function getParamObject(paramArr){
        let result = {};
        paramArr.map((item)=>{
            let name='',value='',param;

            param = item.split('=');
            name = param[0];
            value = param[1];

            result[name] = value;
        });

        return result;
    }
}

export default getParams;
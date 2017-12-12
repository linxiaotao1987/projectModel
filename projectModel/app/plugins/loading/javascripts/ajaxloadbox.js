/*创建loading*/
let ajaxLoadBox = (function () {
    var createLoadingBox = function(){
        let Box = document.querySelector('.js-statusbox');
        var body = document.querySelector('body');
        if(Box){
            this.statusbox = Box;
        } else {
            this.statusbox = document.createElement('div');
            this.statusbox.className = 'Lin-popupStatusBox js-statusbox';
            body.appendChild(this.statusbox);
            this.statusbox.innerHTML = '<div class="contbox"><div class="loadBox"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class="tips js-load-tips"></div></div>';
        }

        this.loadbox = this.statusbox.querySelector('.loadBox');
        this.backInfoBox = this.statusbox.querySelector('.js-load-tips');
        this.statusbox.style.display = 'none';
    };
    createLoadingBox.prototype = {
        show:function(){
            console.log('show');
            document.querySelector('.js-statusbox').style.display = 'block';
            // this.statusbox.style.display = 'block';
            this.statusbox.classList.remove('hide');
            this.backInfoBox.style.display = 'none';
            this.loadbox.style.display = 'block';
        },
        hide:function(data){
            var _self = this;
            if(data){
                _self.statusbox.classList.add('hide');
                _self.backInfoBox.innerHTML = data;
                _self.backInfoBox.style.display = 'block';
                _self.loadbox.style.display = 'none';
                _self.statusbox.addEventListener('webkitAnimationEnd',function(){
                    _self.statusbox.style.display = 'none';
                });
            } else {
                _self.statusbox.style.display = 'none';
            }

        }
    };
    return createLoadingBox;
})();

export default ajaxLoadBox;
/*end*/
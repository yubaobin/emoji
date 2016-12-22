/**
 * author: ybb 
 * 消息提示框
 * vesion: 1.0.1
 *  
 */
;(function(global) {
    "use strict";

    global = global ? global : window;

    let MsgBox = function(el,options) {
        this._init(el,options);
    };

    MsgBox.prototype = {
        _init: function(el,options) {
            let me = this;
            let $el = el;
            if(el){
                me.msgbox = _createOneEl('div',$el); 
            }else {
                me.msgbox = _createEl('div'); 
            }
            //默认选项
            me.options = {
                width:'150px',
                height:'30px',
                message: "",
                bg:"rgba(39,174,96, 0.6)",
                color:"#FFF",
                left:"36%",
                top:"40%",
                fontSize:'16px',
                lineHeight:'30px',
                autoHide:2000,
                remove:false,
                border:""
            }
            for (let i in options) {
                me.options[i] = options[i];
            }
            if(!$el) {
                me.options['remove'] = true;
            }
            me.msgbox.style.position = 'fixed';
            me.msgbox.style.textAlign = 'center';
            me.msgbox.style.display = 'none';
            me.msgbox.style.opacity = '0';     
            me.msgbox.style.transition = 'all 600ms';       
            me._refresh();
        },

        _refresh: function(){
            let me = this;
            me.msgbox.style.width = me.options.width;
            me.msgbox.style.left = me.options.left;
            me.msgbox.style.top = me.options.top;
            me.msgbox.style.backgroundColor = me.options.bg;
            me.msgbox.style.color = me.options.color;
            me.msgbox.style.fontSize = me.options.fontSize;
            me.msgbox.style.lineHeight = me.options.lineHeight;
            me.msgbox.style.border = me.options.border;
            me.msgbox.innerHTML = me.options.message;
        },

        show: function(){
            let me = this;
            me.msgbox.style.display = '';
            setTimeout(function(){
                me.msgbox.style.opacity = 1;
            },20)
            setTimeout(function(){
                if(me.options.remove){//移除元素
                    me.remove(me.msgbox);
                }else if(me.options.autoHide){//自动隐藏
                    me.hide();
                }
            },me.options.autoHide);
        },
        //隐藏元素
        hide: function(){
            let me = this;
            me.msgbox.style.opacity = 0;
            setTimeout(function(){
                me.msgbox.style.display = 'none';
            },600)
        },
        //移除元素
        remove: function(el){
            el.style.opacity = 0;
            setTimeout(function(){
                document.querySelector('body').removeChild(el);
            },600);
        }
    };


    //创建唯一元素
    function _createOneEl(tagName,id){
        let tag = document.getElementById(id);
        if(!tag){
            tag = document.createElement(tagName);
            tag.id = id;
            document.querySelector('body').appendChild(tag);
        }
        return tag;
    }
    //创建元素
    function _createEl(tagName){
        let tag = document.createElement(tagName);
        tag.id = 'msg' + Math.random().toString().substr(2, 8);
        document.querySelector('body').appendChild(tag);
        return tag;
    }

    if (typeof module !== 'undefined' && module.exports) module.exports = MsgBox;
    if (typeof define === 'function') define(function() { return MsgBox; });

    global.MsgBox = MsgBox;

})(this);
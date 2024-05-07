var at_time = new Date();
var $body;
$(function(){
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $.ajaxSetup({ cache: false });
    $('a,input[type="button"],input[type="submit"]').on('focus',function(){if(this.blur){this.blur();};});
});
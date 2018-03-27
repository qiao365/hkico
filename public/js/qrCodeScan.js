$(function () {

//复制方法
function copyMethod(text) {
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.log("none");
    }
    document.execCommand('Copy','false',text);
}

//延时定时器
function timerTimeOut() {
    $(".copy-success-tip").show();
    clearTimeout(timer);
    var timer = setTimeout(function () {
        $(".copy-success-tip").hide();
    },2000)
}
$(".coppyAddress-btn").click(function () {
    var randomCode = document.getElementsByClassName('address-crypto')[0];
    copyMethod(randomCode);
    timerTimeOut();
});
var qrcode = $('.qrCode-container').qrcode({
    render: "canvas", //也可以替换为table
    text: "http://mobipromo.io/"/*可以通过ajax请求动态设置*/
}).hide();
//将生成的二维码转换成图片格式
var canvas = qrcode.find('canvas').get(0);
$('.qrcodeImg').attr('src', canvas.toDataURL('image/jpg'));

})

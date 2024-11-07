var url = window.location.href;
var title = encodeURIComponent(document.title);
var qrcode = new QRCode(document.getElementById("Qrcode"), {
    width : 140,
    height : 140
});
function makeCode () {
    qrcode.makeCode(url);
}
makeCode();
$(function(){
    $("#wechat").click(function(){
        $("#share-qrcode").toggle(100,function(){
            //alert($(this).is(":hidden"));
            if($(this).is(":hidden")==false){
                $(this).parent("a").addClass("active")
            }else{
                $(this).parent("a").removeClass("active")
            }
        });
    })
    $("#weibo").click(function(){
        window.open('http://service.weibo.com/share/share.php?url=' + url + "&title=" + title);
    })
	
	$("#qqzone").click(function(){
	    window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + "&title=" + title);
	})
})
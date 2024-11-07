var html = ""
var serverIp ="www.bjft.gov.cn";
var serverPort= "80";

window.onload = function() {
    var powercms = document.getElementsByTagName("embed");
    var powlength = powercms.length;
    for (var i = 0; i < powlength; i++) {
        var p_src = powercms[i].src;
        if (p_src.indexOf("powercms") > -1) {
            var p_style = powercms[i].style;
            var p_align = powercms[i].align;
            var p_style_width = parseInt(powercms[i].style.width);
            var p_style_height = parseInt(powercms[i].style.height);

            var filePath = p_src.split("file=")[1].split("&")[0];

            filePath = decodeURIComponent(filePath);
            filePath=filePath.replace("3880","80");
            filePath=filePath.replace("/home/media","/video");

            var s_div = "s_div" + i;
            var powercms_src = 'http://' + serverIp + ':' + serverPort + '/powercms/web/player/myplayer-SR/loadplayer.js?filePath=' + filePath + '&serverIp=' + serverIp + '&serverPort=' + serverPort + '&autostart=1';
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = powercms_src;
            var p = document.createElement("div");
            p.id = s_div;
            p.appendChild(script);
            var parnode = powercms[i].parentNode;
            //powercms[i].parentNode.replaceChild(p, powercms[i]);
            parnode.parentNode.replaceChild(p, parnode);
            var s_obj = document.getElementById(s_div);
            s_obj.style.width = (p_style_width ? p_style_width : 550) + 'px';
            s_obj.style.height = (p_style_height ? p_style_height : 380) + 'px';
            if (p_align != "" || undefined || null) {
                s_obj.style.margin = "0 auto";
            }
        }
    }
}

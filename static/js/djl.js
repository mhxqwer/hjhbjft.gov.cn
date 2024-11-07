//服务器验证
function addBrowse(manuscriptId){
    $.ajax({
    type: "POST",
    url:'/fwl/business/zBrowseCount/add',
    data:{"ass_id" : manuscriptId},
        dataType:'json',
        cache: false,
        success: function(data){
            return data;
        }
    });
}
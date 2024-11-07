$("a").each(function () {
  //var htm = $(this).html();
  //var GOVY ="www.bjmtg.gov.cn";
  //var GOVY1 ="gov.cn/";
  //var GOVY2 =".gov.";
  $(this).click(function () {

    if (this.href != "" && this.href.toLowerCase().indexOf("javascript") == -1 && this.href.toLowerCase().indexOf(".gov.") == -1 && this.href.toLowerCase().indexOf("javascript:preVious") == -1 && this.href.toLowerCase().indexOf("javascript:next") == -1) {

      document.getElementById('outUrl').innerText = this.href;
      document.getElementById('hash').click();
      $(".alert-mengban").fadeIn(200);
      $(".alert-warning").delay(200).show().animate({ top: "75px" }, 300);
      $("#closets,.fangqi,.alert-mengban").click(function () {
        $(".alert-warning").animate({ top: "-400px" }, 200).hide(300);
        $(".alert-mengban").delay(300).fadeOut(300);
      });
      $(".continue").click(function () {
        $(".alert-warning").hide(200);
        $(".alert-mengban").delay(200).fadeOut(200);
      })


      return false;

    }
  });
});
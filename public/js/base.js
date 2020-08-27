function showDisqus() {
    var ds_loaded = false;
    window.disqus_shortname = $('.show-commend').attr('name');
    $.ajax({
        type: "GET",
        url: "http://" + disqus_shortname + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
    });
}

//Handles the go to top button at the footer
var handleGoTop = function () {
    var offset = 300;
    var duration = 500;

    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
        $(window).bind("touchend touchcancel touchleave", function(e){
           if ($(this).scrollTop() > offset) {
                $('.scroll-to-top').fadeIn(duration);
            } else {
                $('.scroll-to-top').fadeOut(duration);
            }
        });
    } else {  // general
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.scroll-to-top').fadeIn(duration);
            } else {
                $('.scroll-to-top').fadeOut(duration);
            }
        });
    }

    $('.scroll-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
};

function imgShow(outerdiv, innerdiv, bigimg, _this) {
  var src = _this.attr("src"); //获取当前点击的pimg元素中的src属性  
  $(bigimg).attr("src", src); //设置#bigimg元素的src属性  

  /*获取当前点击图片的真实大小，并显示弹出层及大图*/
  $("<img/>").attr("src", src).load(function() {
      var windowW = $(window).width(); //获取当前窗口宽度  
      var windowH = $(window).height(); //获取当前窗口高度  
      var realWidth = this.width; //获取图片真实宽度  
      var realHeight = this.height; //获取图片真实高度  
      var imgWidth, imgHeight;
      var scale = 0.96; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

      if (realHeight > windowH * scale) { //判断图片高度  
          imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放  
          imgWidth = imgHeight /
              realHeight * realWidth; // 等比例缩放宽度
          if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度  
              imgWidth = windowW * scale; //再对宽度进行缩放  
          }
      } else if (realWidth > windowW * scale) { //如图片高度合适，判断图片宽度  
          imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放  
          imgHeight = imgWidth / realWidth * realHeight; // 等比例缩放高度
      } else { //如果图片真实高度和宽度都符合要求，高宽不变  
          imgWidth = realWidth;
          imgHeight = realHeight;
      }
      $(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放  

      var w = (windowW - imgWidth) / 2; // 计算图片与窗口左边距
      var h = (windowH - imgHeight) / 2; // 计算图片与窗口上边距
      $(innerdiv).css({
          "top": h,
          "left": w
      }); //设置#innerdiv的top和left属性  
      $(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg  
  });

  $(outerdiv).click(function() { //再次点击淡出消失弹出层  
      $(this).fadeOut("fast");
  });
}

function handleImage() {
	$(".img-thumbnail").click(function() {
        var _this = $(this); //将当前的pimg元素作为_this传入函数  
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    });
}

/* 控制导航按钮动作 */
function nav_click() {
    if ($('#nav_btn i').hasClass('fa-angle-right')) {
        /* 显示左侧aside */
        $('.aside1')
            .addClass('visible-md visible-lg')
            .removeClass('hidden-md hidden-lg');
        /* 调整右侧内容 */
        $('.aside3')
            .removeClass('col-md-12 col-lg-12')
            .addClass('col-md-10 col-lg-10');
        /* 调整文字内容格式 */
        //$('.aside3-content')
        //  .removeClass('col-md-12 col-lg-12 col-md-offset-1 col-lg-offset-1')
        //  .addClass('col-md-12');
        /* 变化按钮 */
        $('#nav_btn i')
            .removeClass('fa-angle-right')
            .addClass('fa-angle-left');
    } else {
        /* 隐藏左侧aside */
        $('.aside1')
            .removeClass('visible-md visible-lg')
            .addClass('hidden-md hidden-lg');
        /* 右侧内容最大化 */
        $('.aside3')
            .removeClass('col-md-10 col-lg-10')
            .addClass('col-md-12 col-lg-12');
        /* 修改文字排版 */
        //$('.aside3-content')
        //  .removeClass('col-md-12')
        //  .addClass('col-md-12 col-lg-12 col-md-offset-1 col-lg-offset-1');
        /* 变化按钮图标 */
        $('#nav_btn i').removeClass('fa-angle-left').addClass('fa-angle-right');
        $('html,body').animate({scrollTop:0},500);
    }
}

function catalogBtnControl() {
    if ($('#catalog').css('display') == 'none') {
        $('#catalog').css('display', 'block');
        $('#catalog_btn i').removeClass('fa-angle-down').addClass('fa-angle-up');
        //alert(document.getElementById("catalog").offsetHeight);
    } else {
        $('#catalog').css('display', 'none');
        $('#catalog_btn i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
}

function createCatalog() {
    $("#content > h2,#content > h3,#content > h4,#content > h5,#content > h6").each(function (i) {
        var current = $(this);
        current.attr("id", "title" + i);
        tag = current.prop('tagName').substr(-1);
        $("#nav").append("<div style='margin-left:" + 15 * (tag - 1) + "px'><a id='link" + i + "' href='#title" + i + "'>" + current.html() + "</a></div>");
    });

    if ($("#nav").html() != "") {
        $('#catalog_btn').css('display', 'block');
        $("#catalog_btn").on('click', catalogBtnControl);
    } else {
        $('#catalog_btn').css('display', 'none');
    }
}

function loadTagCloud() {
    if (document.getElementById('tagcloudjs')) {
        $.fn.tagcloud.initAllTag();
        return;
    }
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    // ds.src = "/b/public/js/jquery.tagcloud.spe.min.js";
    ds.src = assets_url + "js/jquery.tagcloud.spe.min.js";
    ds.charset = 'UTF-8';
    ds.id = 'tagcloudjs';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
}

function loadBlockUI() {
    if (document.getElementById('blockuijs')) {
        return;
    }
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    // ds.src = "/b/public/js/jquery.blockUI.spe.min.js";
    ds.src = assets_url + "js/jquery.blockUI.spe.min.js";
    ds.charset = 'UTF-8';
    ds.id = 'blockuijs';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
}

function loadUE() {
    if (document.getElementById('uepjs')) {
        initUE();
        return;
    }
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    // ds.src = "/b/public/js/ueditor.parse.min.js";
    ds.src = assets_url + "js/ueditor.parse2.min.js";
    ds.charset = 'UTF-8';
    ds.id = 'uepjs';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
}

function contentEffects(init) {
    // 为图片添加bootstrap的样式……
    $('#content img').addClass('img-thumbnail').parent('p').addClass('center');

    // 动态进入有Disqus的页面
    //$('body').on('click', '.show-commend', showDisqus);

    // 动态进入标签和分类页面
    if ($('#cate-wr').length > 0) {
        $('#cate-tab').addClass('active').siblings().removeClass('active');
    }
    if ($('#my-tag-wr').length > 0) {
        $('#tags-tab').addClass('active').siblings().removeClass('active');
    }

    // remove the asidebar
    // $('.row-offcanvas').removeClass('active');

    // if have catalog 目录 create it
    if ($("#catalog").length > 0) {
        createCatalog();
    }

    //if($("#ueditor_background").length > 0){
    //  $("#ueditor_background").remove();
    //}

    loadUE();
    loadBlockUI();
    loadTagCloud();
    handleImage();
    handleGoTop();
}

$(document).ready(function () {

    /* 控制左侧 aside 的动作 */
    $("#nav_btn").on('click', nav_click);

    /* Control pjaxlink */
    $(document).pjax('.pjaxlink', '#pjax', {
        fragment: "#pjax",
        timeout: 5000
    });
    $(document).on("pjax:start", function () {
        if ($("#base-wrapper").width() < 992 && $('#nav_btn i').hasClass('fa-angle-right')) {
            nav_click();
        }
        $.blockUI();
    });
    $(document).on("pjax:end", function () {
        $('.aside3').scrollTop(0);
        $.unblockUI();
        contentEffects();
    });

    // 左侧tab
    $('.my-lf-tab').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // 首次访问about页面
    if ($('#about-wr').length > 0) {
        $('#about-tab').addClass('active').siblings().removeClass('active');
    }

    contentEffects(true);
});

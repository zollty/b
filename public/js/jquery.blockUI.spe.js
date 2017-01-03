/*! jQuery blockUI plugin Version 2.70.0-2014.11.23 http://malsup.com/jquery/block/ */
!function(){"use strict";function a(a){function i(e,i){var k,m,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,q=e==window,r=i&&void 0!==i.message?i.message:void 0;i=a.extend({},a.blockUI.defaults,i||{}),i.ignoreIfBlocked&&a(e).data("blockUI.isBlocked")||(i.overlayCSS=a.extend({},a.blockUI.defaults.overlayCSS,i.overlayCSS||{}),k=a.extend({},a.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),m=a.extend({},a.blockUI.defaults.themedCSS,i.themedCSS||{}),r=void 0===r?i.message:r,q&&g&&j(window,{fadeOut:0}),r&&"string"!=typeof r&&(r.parentNode||r.jquery)&&(s=r.jquery?r[0]:r,t={},a(e).data("blockUI.history",t),t.el=s,t.parent=s.parentNode,t.display=s.style.display,t.position=s.style.position,t.parent&&t.parent.removeChild(s)),a(e).data("blockUI.onUnblock",i.onUnblock),u=i.baseZ,v=c||i.forceIframe?a('<iframe class="blockUI" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):a('<div class="blockUI" style="display:none"></div>'),w=i.theme?a('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+u++ +';display:none"></div>'):a('<div class="blockUI blockOverlay" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&q?(y='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:fixed">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):i.theme?(y='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:absolute">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):y=q?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(u+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(u+10)+';display:none;position:absolute"></div>',x=a(y),r&&(i.theme?(x.css(m),x.addClass("ui-widget-content")):x.css(k)),i.theme||w.css(i.overlayCSS),w.css("position",q?"fixed":"absolute"),(c||i.forceIframe)&&v.css("opacity",0),z=[v,w,x],A=q?a("body"):a(e),a.each(z,function(){this.appendTo(A)}),i.theme&&i.draggable&&a.fn.draggable&&x.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),B=f&&(!a.support.boxModel||a("object,embed",q?null:e).length>0),(d||B)&&(q&&i.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height","100%"),!d&&a.support.boxModel||q||(C=p(e,"borderTopWidth"),D=p(e,"borderLeftWidth"),E=C?"(0 - "+C+")":0,F=D?"(0 - "+D+")":0),a.each(z,function(a,b){var d,e,c=b[0].style;c.position="absolute",2>a?(q?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),q?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),F&&c.setExpression("left",F),E&&c.setExpression("top",E)):i.centerY?(q&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),c.marginTop=0):!i.centerY&&q&&(d=i.css&&i.css.top?parseInt(i.css.top,10):0,e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+d+') + "px"',c.setExpression("top",e))})),r&&(i.theme?x.find(".ui-widget-content").append(r):x.append(r),(r.jquery||r.nodeType)&&a(r).show()),(c||i.forceIframe)&&i.showOverlay&&v.show(),i.fadeIn?(G=i.onBlock?i.onBlock:b,H=i.showOverlay&&!r?G:b,I=r?G:b,i.showOverlay&&w._fadeIn(i.fadeIn,H),r&&x._fadeIn(i.fadeIn,I)):(i.showOverlay&&w.show(),r&&x.show(),i.onBlock&&i.onBlock.bind(x)()),l(1,e,i),q?(g=x[0],h=a(i.focusableElements,g),i.focusInput&&setTimeout(n,20)):o(x[0],i.centerX,i.centerY),i.timeout&&(J=setTimeout(function(){q?a.unblockUI(i):a(e).unblock(i)},i.timeout),a(e).data("blockUI.timeout",J)))}function j(b,c){var d,m,e=b==window,f=a(b),i=f.data("blockUI.history"),j=f.data("blockUI.timeout");j&&(clearTimeout(j),f.removeData("blockUI.timeout")),c=a.extend({},a.blockUI.defaults,c||{}),l(0,b,c),null===c.onUnblock&&(c.onUnblock=f.data("blockUI.onUnblock"),f.removeData("blockUI.onUnblock")),m=e?a("body").children().filter(".blockUI").add("body > .blockUI"):f.find(">.blockUI"),c.cursorReset&&(m.length>1&&(m[1].style.cursor=c.cursorReset),m.length>2&&(m[2].style.cursor=c.cursorReset)),e&&(g=h=null),c.fadeOut?(d=m.length,m.stop().fadeOut(c.fadeOut,function(){0===--d&&k(m,i,c,b)})):k(m,i,c,b)}function k(b,c,d,e){var g,h,i,f=a(e);f.data("blockUI.isBlocked")||(b.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),c&&c.el&&(c.el.style.display=c.display,c.el.style.position=c.position,c.el.style.cursor="default",c.parent&&c.parent.appendChild(c.el),f.removeData("blockUI.history")),f.data("blockUI.static")&&f.css("position","static"),"function"==typeof d.onUnblock&&d.onUnblock(e,d),g=a(document.body),h=g.width(),i=g[0].style.width,g.width(h-1).width(h),g[0].style.width=i)}function l(b,c,d){var h,e=c==window,f=a(c);(b||(!e||g)&&(e||f.data("blockUI.isBlocked")))&&(f.data("blockUI.isBlocked",b),e&&d.bindEvents&&(!b||d.showOverlay)&&(h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",b?a(document).bind(h,d,m):a(document).unbind(h,m)))}function m(b){var c,d,e,f,i;return"keydown"===b.type&&b.keyCode&&9==b.keyCode&&g&&b.data.constrainTabKey&&(c=h,d=!b.shiftKey&&b.target===c[c.length-1],e=b.shiftKey&&b.target===c[0],d||e)?(setTimeout(function(){n(e)},10),!1):(f=b.data,i=a(b.target),i.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(b),i.parents("div."+f.blockMsgClass).length>0?!0:0===i.parents().children().filter("div.blockUI").length)}function n(a){if(h){var b=h[a===!0?h.length-1:0];b&&b.focus()}}function o(a,b,c){var d=a.parentNode,e=a.style,f=(d.offsetWidth-a.offsetWidth)/2-p(d,"borderLeftWidth"),g=(d.offsetHeight-a.offsetHeight)/2-p(d,"borderTopWidth");b&&(e.left=f>0?f+"px":"0"),c&&(e.top=g>0?g+"px":"0")}function p(b,c){return parseInt(a.css(b,c),10)||0}var b,c,d,f,g,h;a.fn._fadeIn=a.fn.fadeIn,b=a.noop||function(){},c=/MSIE/.test(navigator.userAgent),d=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),document.documentMode||0,f=a.isFunction(document.createElement("div").style.setExpression),a.blockUI=function(a){i(window,a)},a.unblockUI=function(a){j(window,a)},a.growlUI=function(b,c,d,e){var g,f=a('<div class="growlUI"></div>');b&&f.append("<h1>"+b+"</h1>"),c&&f.append("<h2>"+c+"</h2>"),void 0===d&&(d=3e3),g=function(b){b=b||{},a.blockUI({message:f,fadeIn:"undefined"!=typeof b.fadeIn?b.fadeIn:700,fadeOut:"undefined"!=typeof b.fadeOut?b.fadeOut:1e3,timeout:"undefined"!=typeof b.timeout?b.timeout:d,centerY:!1,showOverlay:!1,onUnblock:e,css:a.blockUI.defaults.growlCSS})},g(),f.css("opacity"),f.mouseover(function(){g({fadeIn:0,timeout:3e4});var b=a(".blockMsg");b.stop(),b.fadeTo(300,1)}).mouseout(function(){a(".blockMsg").fadeOut(1e3)})},a.fn.block=function(b){if(this[0]===window)return a.blockUI(b),this;var c=a.extend({},a.blockUI.defaults,b||{});return this.each(function(){var b=a(this);c.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock({fadeOut:0})}),this.each(function(){"static"==a.css(this,"position")&&(this.style.position="relative",a(this).data("blockUI.static",!0)),this.style.zoom=1,i(this,b)})},a.fn.unblock=function(b){return this[0]===window?(a.unblockUI(b),this):this.each(function(){j(this,b)})},a.blockUI.version=2.7,a.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1},g=null,h=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery),$.blockUI.defaults.message='<img src="http://ires.qiniudn.com/my/img/loading-32_32.gif" />',$.blockUI.defaults.css={padding:0,margin:0,width:"32px",top:"30%",left:"45%",textAlign:"center",color:"#000",border:"0",backgroundColor:"#fff",cursor:"wait"}}();

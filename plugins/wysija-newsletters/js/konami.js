var Konami=function(){var t={addEvent:function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](window.event,i)},t.attachEvent("on"+e,t[e+n]))},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,i){i&&(t=i),t.input+=n?n.keyCode:event.keyCode,t.input.length>t.pattern.length&&(t.input=t.input.substr(t.input.length-t.pattern.length)),t.input==t.pattern&&(t.code(e),t.input="")},this),this.iphone.load(e)},code:function(t){window.location=t},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys,t.addEvent(document,"touchmove",function(e){1==e.touches.length&&1==t.iphone.capture&&(e=e.touches[0],t.iphone.stop_x=e.pageX,t.iphone.stop_y=e.pageY,t.iphone.tap=!1,t.iphone.capture=!1,t.iphone.check_direction())}),t.addEvent(document,"touchend",function(){1==t.iphone.tap&&t.iphone.check_direction(e)},!1),t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX,t.iphone.start_y=e.changedTouches[0].pageY,t.iphone.tap=!0,t.iphone.capture=!0})},check_direction:function(t){x_magnitude=Math.abs(this.start_x-this.stop_x),y_magnitude=Math.abs(this.start_y-this.stop_y),x=0>this.start_x-this.stop_x?"RIGHT":"LEFT",y=0>this.start_y-this.stop_y?"DOWN":"UP",result=x_magnitude>y_magnitude?x:y,result=1==this.tap?"TAP":result,result==this.keys[0]&&(this.keys=this.keys.slice(1,this.keys.length)),0==this.keys.length&&(this.keys=this.orig_keys,this.code(t))}}};return t};

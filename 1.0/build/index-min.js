/*!build time : 2013-10-18 5:05:54 PM*/
KISSY.add("gallery/KissKey/1.0/index",function(a){function b(){}var c=a.Event;return a.DOM,b.prototype={specialKeys:{backspace:8,tab:9,enter:13,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,"delete":46,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,"?":[191,111],minus:[189,109],plus:[187,107],semi:a.UA.firefox?59:186,comma:188,dot:[190,110],quot:222,"[":219,"]":221,"\\":220,"`":192,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,"*":106},shortcutList:{},activeShortcutList:{},pressedKey:{},isStarted:!1,getKey:function(b,c){var d=b;c.ctrl&&(d+="_ctrl"),c.alt&&(d+="_alt"),c.shift&&(d+="_shift");var e=function(a,b){return b&&16!==b&&17!==b&&18!==b&&(a+="_"+b),a};if(a.isArray(c.which)){var f=[];return a.each(c.which,function(a){f.push(e(d,a))}),f}return e(d,c.which)},getshortcutKeysObject:function(b){var c=this,d={},e=b.split("+");return a.each(e,function(a){"ctrl"===a||"alt"===a||"shift"===a?d[a]=!0:d.which=c.specialKeys[a]||a.toUpperCase().charCodeAt()}),d},checkIsInput:function(b){var c=b.tagName.toLowerCase(),d=b.type;return"input"===c&&a.inArray(d,["text","password","file","search"])>-1||"textarea"===c},run:function(b,c){if(this.activeShortcutList){var d=this,e={ctrl:c.ctrlKey,alt:c.altKey,shift:c.shiftKey,which:c.which},f=d.getKey(b,e),g=d.activeShortcutList[f];if(g){var h=d.checkIsInput(c.target),i=!1;a.each(g,function(a){(!h||a.enableInInput)&&(i||(c.preventDefault(),i=!0),a.callback(c))})}}},start:function(a){var b=this;return a=a||"default",b.activeShortcutList=b.shortcutList[a],b.isStarted?void 0:(c.on(document,"keydown",function(a){"keypress"===a.type&&a.which>=97&&a.which<=122&&(a.which=a.which-32),b.pressedKey[a.which]||b.run("down",a),b.pressedKey[a.which]=!0,b.run("hold",a)}),c.on(document,"keyup",function(a){b.pressedKey[a.which]=!1,b.run("up",a)}),b.isStarted=!0,this)},stop:function(){return c.detach(document,"keypress keydown keyup"),this.isStarted=!1,this},add:function(b){if(!b.shortcutKeys)throw new Error("add: required parameter 'params.shortcutKeys' is undefined.");if(!b.callback)throw new Error("add: required parameter 'params.callback' is undefined.");var c=this,d=b.type||"down",e=b.list?b.list.replace(/\s+/g,"").split(","):["default"];return a.each(e,function(e){c.shortcutList[e]||(c.shortcutList[e]={});var f=c.shortcutList[e],g=b.shortcutKeys.toLowerCase().replace(/\s+/g,"").split(",");a.each(g,function(e){var g=c.getshortcutKeysObject(e),h=c.getKey(d,g);a.isArray(h)||(h=[h]),a.each(h,function(a){f[a]||(f[a]=[]),f[a].push(b)})})}),this},remove:function(b){if(!b.shortcutKeys)throw new Error("remove: required parameter 'params.shortcutKeys' is undefined.");var c=this,d=b.type||"down",e=b.list?b.list.replace(/\s+/g,"").split(","):["default"];return a.each(e,function(e){if(!c.shortcutList[e])return!0;var f=b.shortcutKeys.toLowerCase().replace(/\s+/g,"").split(",");a.each(f,function(b){var f=c.getshortcutKeysObject(b),g=c.getKey(d,f);a.isArray(g)||(g=[g]),a.each(g,function(a){delete c.shortcutList[e][a]})})}),this}},b});
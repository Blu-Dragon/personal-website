var _0x44d2=["json","Where am I?","_blank","console","table","resume","Talk","Type here","warn","toString","dispatchEvent","navigator","^([^ ]+( +[^ ]+)+)+[^ ]}","trace","Good Evening","length","Would you mind taking a look on ","contact","Yes, go ahead!","I am Blu, ","then","__proto__","floor","apply","Thanks for telling me your name ","Yes","display_name"," from ","certify","error","prototype","publish","work","button","Ummm, I think I'm good","info","constructor","&zoom=10&addressdetails=1","accomp","Yes, I want the Resume!","Getting the resume for you...","Education","href","&lon=","test","https://nominatim.openstreetmap.org/reverse?format=json&lat=","Yes, sure!","message","coords","value","Anonymous Location","click","'s, website. Before we begin, ","getCurrentPosition"," bot. I can provide you with some information about him while he is probably ","I think I'm done.","Resume_ShreyJakhmola.pdf","return (function() ","download","Something went wrong, please refresh the page.",'{}.constructor("return this")( )',"random","Good Morning","getHours","skill","target","Shrey","Hi!","Leave","action","geolocation","'s Resume before leaving?","text","Umm, I did rather like to see the resume.","bind"];!function(a,e){var x=function(e){for(;--e;)a.push(a.shift())};!function(){var a={data:{key:"cookie",value:"timeout"},setCookie:function(a,e,x,t){t=t||{};for(var n=e+"="+x,o=0,d=a.length;o<d;o++){var u=a[o];n+="; "+u;var r=a[u];a.push(r),d=a.length,!0!==r&&(n+="="+r)}t.cookie=n},removeCookie:function(){return"dev"},getCookie:function(a,e){var t,n=(a=a||function(a){return a})(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)"));return t=238,x(++t),n?decodeURIComponent(n[1]):void 0}};a.updateCookie=function(){return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(a.removeCookie.toString())};var e=a.updateCookie();e?e?a.getCookie(null,"counter"):a.removeCookie():a.setCookie(["*"],"counter",1)}()}(_0x44d2);var _0x5a1d=function(a,e){return _0x44d2[a-=0]},botui=new BotUI("shrey-botui");function init(){askHuman(randomizer(greetings)+" "+greetHuman())[_0x5a1d("0x7")](options([{text:_0x5a1d("0x36"),value:_0x5a1d("0x44")},{text:_0x5a1d("0x3f"),value:_0x5a1d("0x37")}])[_0x5a1d("0x7")](function(a){a[_0x5a1d("0x24")]==_0x5a1d("0x44")?talk():brief()}))}function last(){0==resume?askHuman(_0x5a1d("0x3")+master+_0x5a1d("0x3a")).then(options([{text:_0x5a1d("0x1a"),value:_0x5a1d("0xc")},{text:_0x5a1d("0x15"),value:"No"}])[_0x5a1d("0x7")](function(a){a.value==_0x5a1d("0xc")?(getResume(!0),end()):end()})):end()}function talk(){askHuman(_0x5a1d("0x6")+randomizer(nameq))[_0x5a1d("0x7")](function(){inputHuman()[_0x5a1d("0x7")](function(a){name=a.value,name.length>0?converse():talk()})})}function brief(){askHuman("You are at "+master+_0x5a1d("0x27")+randomizer(nameq))[_0x5a1d("0x7")](function(){inputHuman().then(function(a){name=a[_0x5a1d("0x24")],name[_0x5a1d("0x2")]>0?converse():talk()})})}function converse(){askHuman(_0x5a1d("0xb")+name+(_0x5a1d("0xe")+humansLocation)).then(askHuman(_0x5a1d("0x6")+master+"'s"+_0x5a1d("0x29")+randomizer(busy))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x21"),value:_0x5a1d("0xc")},{text:"Not at the moment, I'll get back later",value:"No"}])[_0x5a1d("0x7")](function(a){a[_0x5a1d("0x24")]==_0x5a1d("0xc")?askHuman("What would you like to know about "+master+"?")[_0x5a1d("0x7")](callBack()):last()})))}function end(){askHuman("Thank you for stopping by!<br>").then(askHuman(socialprof))}function getResume(a){askHuman(_0x5a1d("0x1b"))[_0x5a1d("0x7")](function(a){var e=document.createElement("a");e[_0x5a1d("0x1d")]=url,e[_0x5a1d("0x2d")]=_0x5a1d("0x2b"),e[_0x5a1d("0x34")]=_0x5a1d("0x40"),e[_0x5a1d("0x48")](new MouseEvent(_0x5a1d("0x26"))),1==a&&end()})}function inputHuman(){return botui.action[_0x5a1d("0x3b")]({delay:1e3,action:{size:30,placeholder:_0x5a1d("0x45")}})}function askHuman(a){return botui[_0x5a1d("0x22")].bot({delay:1e3,content:a})}function options(a){return botui.action[_0x5a1d("0x14")]({delay:1200,action:a})}function greetHuman(){var a=(new Date)[_0x5a1d("0x32")]();return a<12?_0x5a1d("0x31"):a<18?"Good Afternoon":_0x5a1d("0x1")}function randomizer(a){return a[Math[_0x5a1d("0x9")](Math[_0x5a1d("0x30")]()*a[_0x5a1d("0x2")])]}function humanLocation(){var a,e=(a=!0,function(e,x){var t=a?function(){if(x){var a=x[_0x5a1d("0xa")](e,arguments);return x=null,a}}:function(){};return a=!1,t})(this,function(){var a=function(){return!a[_0x5a1d("0x17")]('return /" + this + "/')()[_0x5a1d("0x17")](_0x5a1d("0x4a"))[_0x5a1d("0x1f")](e)};return a()});e();var x,t=(x=!0,function(a,e){var t=x?function(){if(e){var x=e.apply(a,arguments);return e=null,x}}:function(){};return x=!1,t});t(this,function(){for(var a=function(){var a;try{a=Function(_0x5a1d("0x2c")+_0x5a1d("0x2f")+");")()}catch(e){a=window}return a}(),e=a[_0x5a1d("0x41")]=a[_0x5a1d("0x41")]||{},x=["log",_0x5a1d("0x46"),_0x5a1d("0x16"),_0x5a1d("0x10"),"exception",_0x5a1d("0x42"),_0x5a1d("0x0")],n=0;n<x[_0x5a1d("0x2")];n++){var o=t[_0x5a1d("0x17")][_0x5a1d("0x11")][_0x5a1d("0x3d")](t),d=x[n],u=e[d]||o;o[_0x5a1d("0x8")]=t[_0x5a1d("0x3d")](t),o[_0x5a1d("0x47")]=u[_0x5a1d("0x47")][_0x5a1d("0x3d")](u),e[d]=o}})(),window[_0x5a1d("0x49")][_0x5a1d("0x39")]&&window[_0x5a1d("0x49")][_0x5a1d("0x39")][_0x5a1d("0x28")](a=>{const{latitude:e,longitude:x}=a[_0x5a1d("0x23")];fetch(_0x5a1d("0x20")+e+_0x5a1d("0x1e")+x+_0x5a1d("0x18"))[_0x5a1d("0x7")](a=>a[_0x5a1d("0x3e")]()[_0x5a1d("0x7")](a=>{humansLocation=a[_0x5a1d("0xd")]}))},a=>{humansLocation=_0x5a1d("0x25")})}function getCase(){return botui[_0x5a1d("0x38")][_0x5a1d("0x14")]({delay:1200,action:[{text:_0x5a1d("0x1c"),value:"edu"},{text:"Work",value:_0x5a1d("0x13")},{text:"Contact",value:_0x5a1d("0x4")},{text:_0x5a1d("0x3c"),value:_0x5a1d("0x43")}]})}function callBack(){getCase()[_0x5a1d("0x7")](function(a){switch(a[_0x5a1d("0x24")]){case"edu":askHuman(education)[_0x5a1d("0x7")](askHuman(name+", "+randomizer(otherq)).then(options([{text:"Yes, go ahead!",value:_0x5a1d("0xc")},{text:"I think I'm done.",value:"No"}])[_0x5a1d("0x7")](function(a){a[_0x5a1d("0x24")]==_0x5a1d("0xc")?callBack():last()})));break;case _0x5a1d("0x13"):askHuman(work).then(askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x5"),value:"Yes"},{text:_0x5a1d("0x2a"),value:"No"}])[_0x5a1d("0x7")](function(a){a[_0x5a1d("0x24")]==_0x5a1d("0xc")?callBack():last()})));break;case _0x5a1d("0x19"):askHuman(accomplisments).then(askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x5"),value:_0x5a1d("0xc")},{text:_0x5a1d("0x2a"),value:"No"}]).then(function(a){a[_0x5a1d("0x24")]==_0x5a1d("0xc")?callBack():last()})));break;case _0x5a1d("0xf"):askHuman(certification)[_0x5a1d("0x7")](askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x5"),value:"Yes"},{text:_0x5a1d("0x2a"),value:"No"}]).then(function(a){a.value==_0x5a1d("0xc")?callBack():last()})));break;case _0x5a1d("0x33"):askHuman(skills)[_0x5a1d("0x7")](askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:"Yes, go ahead!",value:"Yes"},{text:_0x5a1d("0x2a"),value:"No"}])[_0x5a1d("0x7")](function(a){"Yes"==a.value?callBack():last()})));break;case _0x5a1d("0x12"):askHuman(publish)[_0x5a1d("0x7")](askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x5"),value:_0x5a1d("0xc")},{text:"I think I'm done.",value:"No"}])[_0x5a1d("0x7")](function(a){a[_0x5a1d("0x24")]==_0x5a1d("0xc")?callBack():last()})));break;case _0x5a1d("0x4"):askHuman(contact)[_0x5a1d("0x7")](askHuman(name+", "+randomizer(otherq))[_0x5a1d("0x7")](options([{text:_0x5a1d("0x5"),value:_0x5a1d("0xc")},{text:_0x5a1d("0x2a"),value:"No"}])[_0x5a1d("0x7")](function(a){"Yes"==a[_0x5a1d("0x24")]?callBack():last()})));break;case _0x5a1d("0x43"):getResume(!1),resume=1,askHuman(name+", "+randomizer(otherq)).then(options([{text:_0x5a1d("0x5"),value:_0x5a1d("0xc")},{text:_0x5a1d("0x2a"),value:"No"}])[_0x5a1d("0x7")](function(a){"Yes"==a[_0x5a1d("0x24")]?callBack():last()}));break;default:alert(_0x5a1d("0x2e"))}})}url="./assets/Resume_ShreyJakhmola.pdf",name="",master=_0x5a1d("0x35"),humansLocation="",resume=0,humanLocation(),init();

smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'aoeuaoeu',
fn: function (){
var self=this;
var msg;
var button;
msg="Hello world!";
button=smalltalk.send("#sayHello","_asJQuery",[]);
smalltalk.send(button,"_click_",[(function(){
return smalltalk.send(button,"_after_",[smalltalk.send(smalltalk.send("<p>","__comma",[msg]),"__comma",["</p>"])]);
})]);
return self},
args: [],
source: "begin\x0a\x22Makes me say hello toaoeuaoeuaoeu the user.\x22\x0a\x0a| msg button |\x0amsg := 'Hello world!' .\x0abutton := '#sayHello' asJQuery.\x0abutton click: [button after: '<p>', msg, '</p>'].",
messageSends: ["asJQuery", "click:", "after:", ","],
referencedClasses: []
}),
smalltalk.Hello);




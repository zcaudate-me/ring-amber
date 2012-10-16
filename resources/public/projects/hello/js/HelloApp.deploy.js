smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var msg;
var button;
msg="Hello world!";
button=smalltalk.send("#sayHello","_asJQuery",[]);
smalltalk.send(button,"_click_",[(function(){
return smalltalk.send(button,"_after_",[smalltalk.send(smalltalk.send("<p>","__comma",[msg]),"__comma",["</p>"])]);
})]);
return self}
}),
smalltalk.Hello);




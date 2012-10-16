smalltalk.addPackage('KO', {});
smalltalk.addClass('Tut1', smalltalk.Object, ['firstName', 'lastName'], 'KO');
smalltalk.addMethod(
"_buttonClick",
smalltalk.method({
selector: "buttonClick",
fn: function (){
var self=this;
smalltalk.send(self['@firstName'], "_value_", ["Tom"]);
return self;}
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick1",
smalltalk.method({
selector: "buttonClick1",
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Dick"]);
return self}
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick2",
smalltalk.method({
selector: "buttonClick2",
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Harry"]);
return self}
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick3",
smalltalk.method({
selector: "buttonClick3",
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Bert"]);
return self}
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Tut1.superclass || nil);
(self['@firstName']=smalltalk.send((typeof ko == 'undefined' ? nil : ko), "_observable_", ["Bert"]));
(self['@lastName']=smalltalk.send((typeof ko == 'undefined' ? nil : ko), "_observable_", ["Berthington"]));
return self;}
}),
smalltalk.Tut1);




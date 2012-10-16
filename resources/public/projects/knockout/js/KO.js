smalltalk.addPackage('KO', {});
smalltalk.addClass('Tut1', smalltalk.Object, ['firstName', 'lastName'], 'KO');
smalltalk.addMethod(
"_buttonClick",
smalltalk.method({
selector: "buttonClick",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(self['@firstName'], "_value_", ["Tom"]);
return self;},
args: [],
source: "buttonClick\x0a    \x22Click to change to Tom\x22\x0a    firstName value:  'Tom'.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick1",
smalltalk.method({
selector: "buttonClick1",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Dick"]);
return self},
args: [],
source: "buttonClick1\x0a    \x22Click to change to Dick\x22\x0a    firstName value:  'Dick'.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick2",
smalltalk.method({
selector: "buttonClick2",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Harry"]);
return self},
args: [],
source: "buttonClick2\x0a    \x22Click to change to Harry\x22\x0a    firstName value:  'Harry'.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_buttonClick3",
smalltalk.method({
selector: "buttonClick3",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(self["@firstName"],"_value_",["Bert"]);
return self},
args: [],
source: "buttonClick3\x0a    \x22Click to change to Bert\x22\x0a    firstName value:  'Bert'.",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Tut1);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Tut1.superclass || nil);
(self['@firstName']=smalltalk.send((typeof ko == 'undefined' ? nil : ko), "_observable_", ["Bert"]));
(self['@lastName']=smalltalk.send((typeof ko == 'undefined' ? nil : ko), "_observable_", ["Berthington"]));
return self;},
args: [],
source: "initialize\x0a    \x22Helloaoeuoaeu There\x22\x0a    super initialize.\x0a    firstName := ko observable: 'Bert'.\x0a    lastName := ko observable: 'Berthington'.",
messageSends: ["initialize", "observable:"],
referencedClasses: []
}),
smalltalk.Tut1);




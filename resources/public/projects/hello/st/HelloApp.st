Smalltalk current createPackage: 'HelloApp' properties: #{}!
Object subclass: #Hello
	instanceVariableNames: ''
	package: 'HelloApp'!

!Hello methodsFor: 'aoeuaoeu'!

begin
"Makes me say hello toaoeuaoeuaoeu the user."

| msg button |
msg := 'Hello world!!' .
button := '#sayHello' asJQuery.
button click: [button after: '<p>', msg, '</p>'].
! !


Smalltalk current createPackage: 'KO' properties: #{}!
Object subclass: #Tut1
	instanceVariableNames: 'firstName lastName'
	package: 'KO'!

!Tut1 methodsFor: 'action'!

buttonClick
    "Click to change to Tom"
    firstName value:  'Tom'.
!

buttonClick1
    "Click to change to Dick"
    firstName value:  'Dick'.
!

buttonClick2
    "Click to change to Harry"
    firstName value:  'Harry'.
!

buttonClick3
    "Click to change to Bert"
    firstName value:  'Bert'.
! !

!Tut1 methodsFor: 'initialization'!

initialize
    "Helloaoeuoaeu There"
    super initialize.
    firstName := ko observable: 'Bert'.
    lastName := ko observable: 'Berthington'.
! !


SOLUTION1:

RECIPE [DIRECTION] 
| [DIRECTION] 
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| RIGHT 
| RIGHT
	
——————————————————-
DOWN
IF SEQUENCE<5
| STEPS=0
| REPEAT RECIPE [DIRECTION]
  | IF ODD, 
     | DIRECTION UP
 | IF EVEN, 
     | DIRECTION DOWN
| STEPS=STEPS+1

——————-END——————-

SOLUTION2:

RECIPE [DIRECTION] 
| [DIRECTION] 
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| RIGHT 

DIRECTION1 =DOWN
DIRECTION2 =UP

—————————————————
CODE1:
DOWN
RECIPE [DIRECTION1]
RIGHT
RECIPE [DIRECTION2]
RIGHT
RECIPE [DIRECTION1]
RIGHT
RECIPE [DIRECTION2]
RIGHT
RECIPE [DIRECTION1]



CODE2:
RECIPE [DIRECTION] 
| [DIRECTION] 
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| [DIRECTION]
| RIGHT 
| RIGHT

DIRECTION1=UP=1
DIRECTION0=DOWN=0
DIRECTION=1
REPEAT RECIPE[1-DIRECTION] UNTILL TOUCH GREEN DOT.
(0,1,0,1,0,1,0,1,)

FURTHER EXPLANATION

WHEN DIRECTION=1
RECIPE [1-DIRECTION]==> RECIPE [1-1=0]==> RECIPE [0=GOING DOWN]
REPEAT RECIPE[1-DIRECTION(THE FORMER DIRECTION=0)]==> RECIPE [1-0=1]==> RECIPE[1=GOING UP]
KEEPING RUNING THIS CODE, YOU WILL GET 
DIRECTION 0,1,0,1,0,1,0..... UNTILL YOU TOUCH THE GREEN DOT.

------END----------

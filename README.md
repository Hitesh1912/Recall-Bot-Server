# `iRecall`
## An intelligent memory and recall management app for humans - the best way to memorize for ur tests/exams.
---
### Building real time web app @ HackHarvard 2019
### Curing the transience sin of memory

![screen shot 2018-10-21 at 1 30 49 am](https://user-images.githubusercontent.com/17843556/47265154-6fa39b00-d4f1-11e8-8b5e-1382a2385441.png)

---

## Problem Statement:
How long can I keep the stuff I learn stored in my mind?  How do I actually remember the stuff I learn? How do I memorize my notes, my textbook, and everything covered in class? How much studying do I actually have to do?


## Idea:

The idea is to devise an assistant using Google Home app  which can help you revise your notes by asking you questions based on spaced revision reminders. This idea came into our mind when we face this stated problem in our student life while preparing and revising for semesters exams.  This is based on the  Ebbingause Forgetting Curve Theory, according to which, the more you revise what you’ve learnt, the flatter your forgetting curve gets. 


## Technical Difficulty:
The main technical challenge among other challenges was to re-modeled the Ebbingause’s forgetting curve formula : R = e^(-t/s) and implement an algorithm to compute the data. 
Adjusting  value of S where S is the “strength” of your memory and t is the amount of time that has passed. No specific paper was published so we could get the approx value of S.

![tech](https://user-images.githubusercontent.com/17843556/47265239-d2e1fd00-d4f2-11e8-8e68-7069bc3a4525.JPG)

## Design:
We have developed an end to end application from front end to show visualization of forgetting curve graph to interacting with google home and in real time updating the database using nosql based on the responses of the questions.




## TECHNOLOGY STACK :

Google Cloud Natural Language API
Mongodb (nosql)
Dialog Flow
Google Actions SDK
Google App
Heroku
Javascript


## Additional Info:
(Spaced Repetition Is Better for Long-Term Retention)
But if information is repeated at intervals, the brain has to reconstruct that memory, strengthening it like a muscle.



## Target Audience :
Students
Short term memory loss patients

## Usability:
Useful for all students at home or school. 


## Future improvisation:
We can incorporate Machine learning algorithms to proximate value of S as it varies from brain to brain.
Expand the implementation using Google Mini or Alexa
Utilizing One-note api to directly feed data as json into our database in real time







## `Help resources`

* BASE article : https://80000hours.org/2013/04/how-to-improve-your-memory/
* forgetting curve
* https://images.slideplayer.com/25/7778135/slides/slide_5.jpg
* https://slideplayer.com/slide/8985260/27/images/17/Sins+of+Omission+Transience--the+decreasing+accessibility+of+memory+over+time.+Absent-mindedness--lapses+of+attention+and+forgetting+to+do+things..jpg
* https://image.slidesharecdn.com/chapter7memoryupdated-100315155245-phpapp02/95/chapter-7-memory-45-728.jpg?cb=1268670729
* https://images.slideplayer.com/25/7778135/slides/slide_6.jpg
* http://slideplayer.com/slide/9797455/31/images/29/Seven+Sins+of+Memory+29.jpg
* https://images-na.ssl-images-amazon.com/images/I/918LPldVgSL._AC_UL320_SR208,320_.jpg
* https://i.stack.imgur.com/jhvLf.jpg
* https://i2.wp.com/www.criticaltosuccess.com/wp-content/uploads/2016/03/IMG-eppinghaus-retention-curves.gif
* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBe9NnJHLwFKqdiB7Iifzf3hbdkwlflCYOaeE0CU_Hpx3VwgYpg
* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKS_zTTq4i7dJ7j9dA_-pLbgERydGSsDOyZrgZHYx-0gGBXSDyQ
* Google - how plagiarism detector works
* http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/6048/pdf/imm6048.pdf



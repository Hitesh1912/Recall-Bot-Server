# `iRecall`
## An intelligent memory and recall management app for humans - the best way to memorize for ur tests/exams.
---
### Building real time web app @ HackHarvard 2019
### Curing the transience sin of memory

![screen shot 2018-10-21 at 1 30 49 am](https://user-images.githubusercontent.com/17843556/47265154-6fa39b00-d4f1-11e8-8b5e-1382a2385441.png)

#`Source Code Repositories`

## NodeJS Server

https://github.com/rastogi-s/Recall-Bot-Serve

* implements the forgetting curve algorithm at the backend.
* provides REST endpoints for accessing topics/notes and revision

## Visualizations and Analytics


## Google Assistant Integration - Dialog Flow

 
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


## Technology Stack :

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

* Forgetting Curve: https://80000hours.org/2013/04/how-to-improve-your-memory/



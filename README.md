# SBA2 - JavaScript Fundamentals 
## Goal 
- Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (course, ag, submissions), and returns the formatted result, which should be an array of objects as described above.

- Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
    - "id": number. 
    - "avg": number 
    - <assignment_id>: number, 

## My Process 
1. Loop through assignments and keep the assignment that are due before 2025 (skip the future assignment that learner 1 submitted)
2. With the assignment ids get the learner ids from the learner submissions
3. create learner objects using learner ids. create variable: learner. find total score & possible points (use to calculate avg at the end)
4. Use assignments from step 1 to get assignments for each learner (first 2 assignments)
5. Using the learner assignments calculate for late assignments (*10% - multiply assignments possible points by .1)
6. get percent for each assignment (1, 2) for each learner object

**Outer loop = learner. Inner loops = assignments and submissions. One object per learner.**

## Reflection 
* Determine what is the big loop (what connects everything) - Learners
* Establish the difference between the functions and the parameters
* Understand that we are breaking down small parts of a big problem using helpers 
    - we loop assignments to know what exists 
    - we loop submissions to find the matches per learner 
    - we use the if statements to connect them 
    - we create relationships between the data using loops based on matching data 




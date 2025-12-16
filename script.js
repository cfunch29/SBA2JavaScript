// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  // the ID of the course the assignment group belongs to
  course_id: 451,
  // the percentage weight of the entire assignment group
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      // the due date for the assignment
      due_at: "2023-01-25",
      // the maximum points possible for the assignment
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];



const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);



function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [];
// my logic 
// 2. identify the learners
const learners = [125, 132];
const assignments= [];

for (let b = 0; b < submissions.length; b++){
    const learnerId = submissions[b].learner_id;
    let exists = false;
    
    for (let c = 0; c <learners.length; c++) {
    const learnerId = learners[c];{ 
    exists = true
       break;
    }
    }
    if (exists == false) {
        learners.push(learnerId);
    }
}
for (let i = 0; i <learners.length; i++) {
    const learnerId = learners[i];
    // console.log(learnerId)
const learnerObj = {
    id: learnerId
    };
    // 1. currentAssignments - find the assignments that are due now ignore the future one 
    for (let a = 0; a < ag.assignments.length; a++){
        // need to define active assignment 
        const activeAssignmnent = ag.assignments[a];
        const today = "2025-12-01"
       if (assignments.due_at < today) {
        continue;
       }
        for (let s = 0; s < submissions.length; s++){
            const submitted = submissions[s];
// 3. for each learner, for each assignment: find submission, adjust score, store the result

//  find submission whose assignment_id matches the assignment's id
            if (
                submitted.learner_id == learnerId &&
                submitted.assignment_id == activeAssignmnent.id
            ){
                 // replaced true/false with actual percentages
            // 4. calculate averages = (submission.score / points_possible)
                const percentage = (submissions.score / assignments.points_possible)
            }
        }
        learnerObj [activeAssignmnent.id] = activeAssignmnent;  
    }
   
    result.push(learnerObj)
   
};


console.log(ag.assignments)





// 5. return the final array (learnerObj.push to add to end of array)

  return result;
}

// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }


// output
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];
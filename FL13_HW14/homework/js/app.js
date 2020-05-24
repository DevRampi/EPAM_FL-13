function Student(name, email) {
  this.getName = () => name;
  this.getEmail = () => email;
  let homeworkResults = [];
  this.addHomeworkResult = function(topic, success) {
    let obj = {topic, success};
    homeworkResults.push(obj);
  }
  this.getHomeworkResults = function() {
    return homeworkResults;
  }
}

function FrontendLab(students, failedLimit) {
  let failedHomeworksLimit = failedLimit;
  let studentsList = [];
  students.forEach(student => {
    const createStudent = new Student(student.name, student.email);
    studentsList.push(createStudent)
  });
  this.printStudentsList = function() {
    studentsList.forEach(element => {
      console.log(`name: ${element.getName()}, email: ${element.getEmail()}`); 
      console.log(element.getHomeworkResults());
    });
  }
  this.addHomeworkResults = function(homeworkResults) {
    homeworkResults.results.forEach(item => {
      const findStudent = studentsList.find(student => student.getEmail()=== item.email);
      findStudent.addHomeworkResult(homeworkResults.topic, item.success);
    })  
  }
  this.printStudentsEligibleForTest = function() {
    studentsList.forEach(student => {
      const unsuccessedResults = student.getHomeworkResults().filter(item => item.success === false);
      if (unsuccessedResults.length <= failedHomeworksLimit) {
         console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
      }
   }); 
  } 
 }


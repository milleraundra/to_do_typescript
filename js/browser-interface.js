var describeTasksForPerson = require('./../build/js/app.js').describeTasksForPerson;
var people = require('./../build/js/app.js').people;
var tasks = require('./../build/js/app.js').tasks;


$(document).ready(function() {
  console.log(people.diane);
  console.log(tasks);
  $('.dianeTasks').text(describeTasksForPerson(people.diane, tasks));

});

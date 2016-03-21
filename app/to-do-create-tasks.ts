/// <reference path="to-do-classes-interface.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the dishes.", "High"));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

$(document).ready(function(){

$('#type').hide();
$('#priority').hide();

$('#buttonType').click(function() {
  $('#priority').hide();
  $('#type').show();

});

$('#buttonPriority').click(function() {
  $('#priority').show();
  $('#type').hide();
});

  var highPriority = ToDoList.tasksByPriority("High", tasks);
  for(var task of highPriority) {
    $('#high').append('<li>' + task + '</li>');
  }

  var mediumPriority = ToDoList.tasksByPriority("Medium", tasks);
  for(var task of mediumPriority) {
    $('#medium').append('<li>' + task + '</li>');
  }

  var lowPriority = ToDoList.tasksByPriority("Low", tasks);
  for(var task of lowPriority) {
    $('#low').append('<li>' + task + '</li>');
  }

  var homeTasks = ToDoList.tasksByType("HomeTask", tasks);
  for (var singleTask of homeTasks) {
    $('#homeTasks').append('<li>' + singleTask.description + '</li>');
  }

  var workTasks = ToDoList.tasksByType("WorkTask", tasks);
  for (var singleTask of workTasks) {
    $('#workTasks').append('<li>' + singleTask.description + '</li>');
  }

  var hobbyTasks = ToDoList.tasksByType("HobbyTask", tasks);
  for (var singleTask of hobbyTasks) {
    $('#hobbyTasks').append('<li>' + singleTask.description + '</li>');
  }

  //var workTasks =

  // var thorPriority = ToDoList.singleTaskByPerson(people.thor, tasks);
  // console.log("thorPriority = " + thorPriority);
  // $('#thor_priority').append('<h6>' + thorPriority.description + '</li>');

  //
  // var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
  //   console.log("Here are Thor's tasks: ");
  //   for(var thorTask of thorTasks) {
  //     $('#thorTasks').append('<li>' + thorTask.description + '</li>');
  //
  // }

})

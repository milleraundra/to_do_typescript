/// <reference path="to-do-classes-interface.ts"/>
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): Object[] {
    var descriptions: Object[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task);
      }
    }
    return descriptions;
  }

  export var tasksByType = function(taskType: string, taskCollection: Task[]): Object[] {
    var matchingTasks: Object[] = [];
    for (var task of taskCollection) {
      if(task.constructor.name === taskType) {
        matchingTasks.push(task);
      }
    }
    return matchingTasks;
  }

  export var tasksByPriority = function(taskPriority: string, taskCollection: Task[]): String[] {
    var matchingTasks: String[] = [];
    for (var task of taskCollection) {
      if(task.priority === taskPriority) {
        matchingTasks.push(task.description);
      }
    }
    return matchingTasks;
  }

  export var singleTaskByPerson = function(person: IPerson, taskCollection: Task[]): Object {
    var tasks = describeTasksForPerson(person, taskCollection);
    var foundTask: Object = "No High Priority Tasks";
    for (var task of tasks) {
      if (task.priority === "High") {
        foundTask = task;
        return foundTask;
      }
    }
  }
}

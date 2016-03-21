/// <reference path="to-do-classes-interface.ts"/>
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
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
}

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interface.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interface.ts"/>
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task);
            }
        }
        return descriptions;
    };
    ToDoList.tasksByType = function (taskType, taskCollection) {
        var matchingTasks = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.constructor.name === taskType) {
                matchingTasks.push(task);
            }
        }
        return matchingTasks;
    };
    ToDoList.tasksByPriority = function (taskPriority, taskCollection) {
        var matchingTasks = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.priority === taskPriority) {
                matchingTasks.push(task.description);
            }
        }
        return matchingTasks;
    };
    ToDoList.singleTaskByPerson = function (person, taskCollection) {
        var tasks = ToDoList.describeTasksForPerson(person, taskCollection);
        var foundTask = "No High Priority Tasks";
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task.priority === "High") {
                foundTask = task;
                return foundTask;
            }
        }
    };
})(ToDoList || (ToDoList = {}));
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
$(document).ready(function () {
    $('#type').hide();
    $('#priority').hide();
    $('#buttonType').click(function () {
        $('#priority').hide();
        $('#type').show();
    });
    $('#buttonPriority').click(function () {
        $('#priority').show();
        $('#type').hide();
    });
    var highPriority = ToDoList.tasksByPriority("High", tasks);
    for (var _i = 0, highPriority_1 = highPriority; _i < highPriority_1.length; _i++) {
        var task = highPriority_1[_i];
        $('#high').append('<li>' + task + '</li>');
    }
    var mediumPriority = ToDoList.tasksByPriority("Medium", tasks);
    for (var _a = 0, mediumPriority_1 = mediumPriority; _a < mediumPriority_1.length; _a++) {
        var task = mediumPriority_1[_a];
        $('#medium').append('<li>' + task + '</li>');
    }
    var lowPriority = ToDoList.tasksByPriority("Low", tasks);
    for (var _b = 0, lowPriority_1 = lowPriority; _b < lowPriority_1.length; _b++) {
        var task = lowPriority_1[_b];
        $('#low').append('<li>' + task + '</li>');
    }
    var homeTasks = ToDoList.tasksByType("HomeTask", tasks);
    for (var _c = 0, homeTasks_1 = homeTasks; _c < homeTasks_1.length; _c++) {
        var singleTask = homeTasks_1[_c];
        $('#homeTasks').append('<li>' + singleTask.description + '</li>');
    }
    var workTasks = ToDoList.tasksByType("WorkTask", tasks);
    for (var _d = 0, workTasks_1 = workTasks; _d < workTasks_1.length; _d++) {
        var singleTask = workTasks_1[_d];
        $('#workTasks').append('<li>' + singleTask.description + '</li>');
    }
    var hobbyTasks = ToDoList.tasksByType("HobbyTask", tasks);
    for (var _e = 0, hobbyTasks_1 = hobbyTasks; _e < hobbyTasks_1.length; _e++) {
        var singleTask = hobbyTasks_1[_e];
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
});

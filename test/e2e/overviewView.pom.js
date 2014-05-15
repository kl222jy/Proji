var overviewView = function() {
    'use strict';

    var ideaAddButton = element(by.css('a[ng-click="showAddIdea = true"]')),
        ideaNameInput = element(by.model('newIdea.name')),
        ideaDescriptionInput = element(by.model('newIdea.description')),
        ideaCreateButton = element(by.css('form[name="ideaForm"] button[type="submit"]')),
        taskAddButton = element(by.css('a[ng-click="showAddTask = true"]')),
        taskNameInput = element(by.model('newTask.name')),
        taskDescriptionInput = element(by.model('newTask.description')),
        taskTagsInput = element(by.model('newTask.tags')),
        taskPointsInput = element(by.model('newTask.points')),
        taskPriorityInput = element(by.model('newTask.priority')),
        taskCreateButton = element(by.css('form[name="taskForm"] button[type="submit"]')),
        sleep = function() {
            browser.sleep(2000);
        };

    var overviewView = {
        //Elements
        idea: function(index) {
            return element.all(by.css('.idea-item')).get(index);
        },
        ideas: function() {
            return element.all(by.css('.idea-item'));
        },
        ideaScore: function(index) {
            return element.all(by.css('.idea-item-score')).get(index);
        },
        task: function(index) {
            return element.all(by.css('.task-item')).get(index);
        },
        tasks: element.all(by.css('.task-item')),
        //Actions
        get: function() {
            browser.get('#/');
            sleep();
            browser.waitForAngular();
        },
        createIdea: function(name, description) {
            ideaAddButton.click();
            ideaNameInput.sendKeys(name);
            ideaDescriptionInput.sendKeys(description);
            ideaCreateButton.click();
            browser.waitForAngular();
        },
        createTask: function(name, description, tags, points, priority) {
            taskAddButton.click();
            taskNameInput.sendKeys(name);
            taskDescriptionInput.sendKeys(description);
            taskTagsInput.sendKeys(tags);
            browser.actions().dragAndDrop(taskPointsInput, {
                x: 50,
                y: 50
            }).perform();
            browser.actions().dragAndDrop(taskPriorityInput, {
                x: 50,
                y: 50
            }).perform();
            taskCreateButton.click();
            browser.waitForAngular();
        },
        ideaVoteUp: function(index) {
            element.all(by.css('.idea-item-voting-up')).get(index).click();
            sleep();
            browser.waitForAngular();
        },
        ideaVoteDown: function(index) {
            element.all(by.css('.idea-item-voting-down')).get(index).click();
            sleep();
            browser.waitForAngular();
        }
    };

    return overviewView;
};

module.exports = overviewView();
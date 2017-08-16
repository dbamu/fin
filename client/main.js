import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.contract.onCreated(function contractOnCreated() {
  var address = FlowRouter.getParam('name');
  Meteor.subscribe('mywallet', address);
});

Template.contract.rendered = function () {
  var address = FlowRouter.getParam('name');
  console.log("We are on the post: ", address);
}


Template.generic.onCreated(function genericOnCreated() {
  var address = FlowRouter.getParam('name');
  Meteor.subscribe('mywallet', address);
});

Template.generic.rendered = function () {
  var address = FlowRouter.getParam('name');
  console.log("We are on the post: ", address);
}

Template.elements.onCreated(function genericOnCreated() {
  var address = FlowRouter.getParam('name');
  Meteor.subscribe('mywallet', address);
});

Template.elements.rendered = function () {
  var address = FlowRouter.getParam('name');
  console.log("We are on the post: ", address);
}

/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
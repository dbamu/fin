import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
/*
Template.index.events({
    "click button[name=]" : function(evt , tmpl){
        FlowRouter.go('/contract');
    }
});
*/
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


Template.test.events({
//evt -- 클릭이 일어난 버튼 jQuery로 $(evt.target)으로 호출하면 실제 오브젝트를 제어

 "click #ssss" : function(evt , tmpl){
        console.log(tmpl.find("input[type=text]").value);
        inqBalance();
       // Friends.remove({_id:this._id});
    }
});



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
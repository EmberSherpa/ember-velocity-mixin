/* global Element */
import Ember from 'ember';
import VelocityMixin from 'ember-velocity-mixin/main';
import { module, test } from 'qunit';

module('Unit | Mixin | velocity');

// Replace this with your real tests.
test('it works', function(assert) {
  let VelocityObject = Ember.Object.extend(VelocityMixin);
  let subject = VelocityObject.create();
  assert.ok(subject);
});

test('velocity methods are available', function(assert){
  let VelocityObject = Ember.Object.extend(VelocityMixin);
  let subject = VelocityObject.create();
  assert.ok(subject.css);
  assert.ok(subject.animate);
});

test('getDOMElement returns an element', function(assert) {
  let VelocityObject = Ember.Object.extend(VelocityMixin);
  let subject = VelocityObject.create();
  const component = {
    element: document.createElement('div')
  };

  assert.ok(subject.getDOMElement(component) instanceof Element);
});

test('animate returns a promise', function(assert) {
  const VelocityObject = Ember.Object.extend(VelocityMixin);
  const subject = VelocityObject.create();
  subject.element = document.createElement('div');

  const result = subject.animate({opacity: 1});
  assert.ok(result.then);
});

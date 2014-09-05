import Ember from 'ember';
import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('fast-animation');

test('velocity methods are available', function(){
  var component = this.subject();
  ok(component.css);
  ok(component.animate);
});

test('getDOMElement returns an element', function() {
  var component = this.subject();
  var view = this.subject({
    template: Ember.Handlebars.compile('just a simple template')
  });
  this.append();
  /* global Element */
  ok(component.getDOMElement(view) instanceof Element);
});

test('animate returns a promise', function() {
  var component = this.subject();
  this.append();
  var result = component.animate({opacity: 1});
  ok(result instanceof Ember.RSVP.Promise);
});
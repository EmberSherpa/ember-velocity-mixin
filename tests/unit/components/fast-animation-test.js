import Ember from 'ember';
import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('fast-animation');

test('velocity methods are available', function(){
  var component = this.subject();
  ok(component.css);
  ok(component.animate);
});

test('ensureElement returns an element', function() {
  var component = this.subject();
  var view = this.subject({
    template: Ember.Handlebars.compile('just a simple template')
  });
  this.append();
  ok(component.ensureElement(view) instanceof $);
});

test('animate returns a promise', function() {
  var component = this.subject();
  this.append();
  var result = component.animate({opacity: 1});
  ok(result instanceof Ember.RSVP.Promise);
});
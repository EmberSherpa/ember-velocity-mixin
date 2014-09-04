import Ember from 'ember';

/* global jQuery */
var $ = jQuery;

Ember.assert("Velocity.js must be installed to use this mixin.", $.Velocity);

$.Velocity.Promise = Ember.RSVP.Promise;

export default Ember.Mixin.create({
  /**
   * Retrieve & set css properties to element's style element.
   *
   * Retrieve value with this.css('width')
   * Set value with this.css('width', '100px')
   *
   * @param {string} property
   * @param {string} value
   * @returns {*}
   */
  css: function(property, value) {
    var element = this.$();
    if (arguments.length >= 2){
      // setting
      this.setCSSPropertyValue(element, property, value);
    } else {
      // getting
      return this.getCSSPropertyValue(element, property);
    }
  },
  /**
   * Animate style chance and return a promise
   * @param element
   * @returns {Promise}
   */
  animate: function(element) {
    var args;
    if (element instanceof Ember.View || element instanceof $) {
      args = [].slice.call(arguments, 1);
    } else {
      args = [].slice.call(arguments, 0);
      element = this.$();
    }
    element = this.ensureElement(element);
    args.unshift(element);
    return $.Velocity.animate.apply(null, args);
  },
  /**
   * Get CSS value for a property
   * @param {Ember.View|$) element
   * @param {string} property
   * @returns {*}
   */
  getCSSPropertyValue: function(element, property) {
    return $.Velocity.CSS.getPropertyValue(this.ensureElement(element), property);
  },
  /**
   * Set CSS for a property
   * @param {Ember.View|$) element
   * @param {string} property
   * @param {string} value
   * @returns {*}
   */
  setCSSPropertyValue: function(element, property, value) {
    return $.Velocity.CSS.setPropertyValue(this.ensureElement(element), property, value);
  },
  /**
   * Ensures that passes element is a jQuery element. When a view is passes, the element is returned.
   * @param element
   * @returns {*}
   */
  ensureElement: function(element) {
    Ember.assert('element must be an Ember.View or jQuery element', element instanceof Ember.View || element instanceof $);
    if (element instanceof Ember.View) {
      element = element.$();
    }
    return element;
  }
});
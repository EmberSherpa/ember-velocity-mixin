# Ember Velocity View Mixin

Velocity Mixin makes it easier to use [Velocity.js](http://julian.com/research/velocity/) in Ember views and components.

## How to use

```javascript
import VelocityMixin from 'ember-velocity-mixin/main';

export default Ember.Component.extend(VelocityMixin, {
  width: '100px',
  widthObserver: function() {
    this.css('width', this.get('width'));
  }.observes('width').on('didInsertElement')
});

```

## API

### css([element], property, [value])

```css``` method can be used to get computed value of a specific element or set the CSS value for that element. It works
similar to jQuery's css function but it's scoped to View's element and provides benefits of [Velocity's optimizations](https://github.com/julianshapiro/velocity/blob/master/velocity.js#L1587).

### animate([element], options)

```animate``` method allows you to execute Velocity animation on current view or a given element. It accepts the same arguments as jQuery animation function.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

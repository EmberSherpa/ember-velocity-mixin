ember-velocity-mixin
======================

[![Build Status](https://travis-ci.org/EmberSherpa/ember-velocity-mixin.svg)](https://travis-ci.org/EmberSherpa/ember-velocity-mixin)

The Velocity Mixin makes it easier to use [Velocity.js](http://julian.com/research/velocity/) in your components.

## Usage

`ember install ember-velocity-mixin`

### Setting inline styles

```js
import VelocityMixin from 'ember-velocity-mixin/main';
import Ember from 'ember';

const {
  Component,
  observer,
  on
} = Ember;

export default Component.extend(VelocityMixin, {
  width: '100px',
  updateWidth: observer('width', on('didInserElement', function() {
    this.css('width', this.get('width'));
  }))
});
```

### Animation with Promises

```js
import VelocityMixin from 'ember-velocity-mixin/main';
import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    collapse() {
      this.animate({ width: 0 })
        .then(() => { this.set('isCollapsed', true); });
    }
  }
});
```

## API

### css([element], property, [value])

```css``` method can be used to get computed value of a specific element or set the CSS value for that element. It works
similar to jQuery's css function but it's scoped to View's element and provides benefits of [Velocity's optimizations](https://github.com/julianshapiro/velocity/blob/master/velocity.js#L1587).

### animate([element], options)

```animate``` method allows you to execute Velocity animation on current view or a given element. It accepts the same arguments as jQuery animation function. 
This method returns a promise. Learn more about [Promises with Velocity](http://julian.com/research/velocity/#promises). 

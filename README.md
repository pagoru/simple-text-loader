This module was created to allow create easy animations with text in node.

[![npm version](https://badge.fury.io/js/simple-text-loader.svg)](https://www.npmjs.com/package/simple-text-loader) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm install -S simple-text-loader
```

## Usage
```js
const SimpleTextLoader = require('simple-text-loader');

let loader = new SimpleTextLoader({options});

//Plays the current animation
loader.play();
//Stops the current animation
loader.pause();
//Inverts the animation
loader.invert();

//Returns the current animation text
loader.getText();
//Returns the percentatge amount of the animation
loader.getPercentage();

//Sets the label that will affect the animation, can be undefined.
//Works like jquery ('.class', '#id', 'div')
loader.setTag(str);
//Sets the time between every frame of the animation
loader.setTime(int);

//Returns if the animations is paused
loader.isPaused();
```

### Options
```js
new SimpleTextLoader({
  tag: '.foo', //default undefined
  time: 150, //default random(50, 500)
  paused: true, //default false
  currentPosition: 2, //default 0
  patterns: ['.', '..', '...'] //default ['⠇', '⠋', '⠙', '⠸', '⠴', '⠦']
  invert: true //default false
});
```

This module was created to allow create easy animations with text in node.

[![npm version](https://badge.fury.io/js/simple-text-spinner.svg)](https://www.npmjs.com/package/simple-text-spinner) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm install -S simple-text-spinner
```

## Usage
```js
const SimpleTextSpinner = require('simple-text-spinner');

let spinner = new SimpleTextSpinner({options});

//Plays the current animation
spinner.play();
//Stops the current animation
spinner.pause();
//Inverts the animation
spinner.invert();

//Returns the current animation text
spinner.getText();
//Returns the percentatge amount of the animation
spinner.getPercentage();

//Sets the label that will affect the animation, can be undefined.
//Works like jquery ('.class', '#id', 'div')
spinner.setTag(str);
//Sets the interval between every frame of the animation
spinner.setInterval(int);

//Returns if the animations is paused
spinner.isPaused();

//Prints in console the current text
spinner.print();
```

### Options
```js
new SimpleTextSpinner({
  tag: undefined,
  interval: 100,
  paused: false,
  defaultPosition: 0,
  pattern: ['⠇', '⠋', '⠙', '⠸', '⠴', '⠦'],
  inverse: false
});
```

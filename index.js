/**
 * Created by pablo on 06/06/2017.
 */
const readline = require('readline');

module.exports = class SimpleTextSpinner {

    constructor(obj = {}){
        if(obj.tag !== undefined) this._tag = obj.tag;

        this._interval = (obj.interval === undefined) ? 100 : obj.interval;
        this._paused = (obj.paused === undefined) ? false : obj.paused;
        this._defaultPosition = (obj.defaultPosition === undefined) ? 0 : obj.defaultPosition;
        this._pattern = (obj.pattern === undefined) ? ['⠇', '⠋', '⠙', '⠸', '⠴', '⠦'] : obj.pattern;
        this._inverse = (obj.inverse === undefined) ? false : obj.inverse;

        this._loop();
    }

    _loop(){
        if(this._paused) return;

        this._text = this._pattern[this._defaultPosition];
        if(this._tag !== undefined) {
            let elements = document.getElementsByTagName(this._tag);
            if(this._tag.startsWith('.')) elements = document.getElementsByClassName(this._tag.substr(1, this._tag.length - 1));
            if(this._tag.startsWith('#')) elements = document.getElementById(this._tag.substr(1, this._tag.length - 1));

            if(elements.length>1){
	            for (let i = 0; i < elements.length; i++) {
		            elements[i].innerHTML = this._text;
                }
            }else{
                elements.innerHTML = this._text;
            }
        }

        this._defaultPosition = (this._inverse)
            ? (this._defaultPosition === 0) ? this._pattern.length - 1 : this._defaultPosition - 1
            : (this._defaultPosition === this._pattern.length - 1) ? 0 : this._defaultPosition + 1;

        setTimeout(this._loop.bind(this), this._interval);

    }

    play(){
        if(this._paused) {
            this._paused = false;
            this._loop();
        }
    }
    pause(){
        this._paused = true;
    }
    invert(){
        this._inverse = !this._inverse;
    }

    getText(){
        return this._text;
    }
    getPercentage(){
        return (this._defaultPosition / this._pattern.length) * 100;
    }

    setTag(tag){
        this._tag = tag;
    }
    setInterval(interval){
        this._interval = interval;
    }

    isPaused(){
        return this._paused;
    }

    print(){
        if(this._paused) return;

        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0, null);
        process.stdout.write(this.getText());

        setTimeout(this.print.bind(this), this._interval);
    }
};

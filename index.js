/**
 * Created by pablo on 06/06/2017.
 */
module.exports = class SimpleTextLoader {

    constructor(obj){
        function randomMaxMin(min, max) {
            return Math.floor((Math.random() * max) + min);
        }

        if(obj.tag !== undefined) this._tag = obj.tag;

        this._time = (obj.time === undefined) ? randomMaxMin(50, 500) : obj.time;
        this._paused = (obj.paused === undefined) ? true : obj.paused;
        this._currentPosition = (obj.currentPosition === undefined) ? 0 : obj.currentPosition;
        this._patterns = (obj.patterns === undefined) ? ['⠇', '⠋', '⠙', '⠸', '⠴', '⠦'] : obj.patterns;
        this._invert = (obj.invert === undefined) ? false : obj.invert;

        this._interval();
    }

    _interval(){
        if(this._paused) return;

        this._text = this._patterns[this._currentPosition];
        if(this._tag !== undefined) {
            let elements = document.getElementsByTagName(this._tag);
            if(this._tag.startsWith('.')) elements = document.getElementsByClassName(this._tag.substr(1, this._tag.length - 1));
            if(this._tag.startsWith('#')) elements = document.getElementById(this._tag.substr(1, this._tag.length - 1));
            for (let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = this._text;
            }
        }

        this._currentPosition = (this._invert)
            ? (this._currentPosition === 0) ? this._patterns.length - 1 : this._currentPosition - 1
            : (this._currentPosition === this._patterns.length - 1) ? 0 : this._currentPosition + 1;

        setTimeout(this._interval.bind(this), this._time);

    }

    play(){
        if(this._paused) {
            this._paused = false;
            this._interval();
        }
    }
    pause(){
        this._paused = true;
    }
    invert(){
        this._invert = !this._invert;
    }

    getText(){
        return this._text;
    }
    getPercentage(){
        return (this._currentPosition / this._patterns.length) * 100;
    }

    setTag(tag){
        this._tag = tag;
    }
    setTime(time){
        this._time = time;
    }

    isPaused(){
        return this._paused;
    }
    isStopped(){
        return this._stop;
    }

}
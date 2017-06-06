/**
 * Created by pablo on 06/06/2017.
 */
module.exports = class SimpleTextLoader {

    constructor(obj){

        const defaultPatterns = [
            ['⠇', '⠋', '⠙', '⠸', '⠴', '⠦'],
            ['', 'L', 'Lo', 'Loa', 'Load', 'Loadi', 'Loadin', 'Loading', 'Loading.', 'Loading..', 'Loading...'],
            ['⸨░░░░░░░░░░⸩', '⸨█░░░░░░░░░⸩', '⸨██░░░░░░░░⸩', '⸨███░░░░░░░⸩', '⸨████░░░░░░⸩',
                '⸨█████░░░░░⸩', '⸨██████░░░░⸩', '⸨███████░░░⸩', '⸨████████░░⸩', '⸨█████████░⸩', '⸨██████████⸩']
        ];
        function randomMaxMin(min, max) {
            return Math.floor((Math.random() * max) + min);
        }

        this._time = (obj.time === undefined) ? randomMaxMin(50, 500) : obj.time;
        this._paused = (obj.paused === undefined) ? true : obj.paused;
        this._currentPosition = (obj.currentPosition === undefined) ? 0 : obj.currentPosition;
        this._patterns = (obj.patterns === undefined) ? defaultPatterns[randomMaxMin(0, defaultPatterns.length)] : obj.patterns;
        try{
            this._patterns = (obj.defaultPattern === undefined) ? this._patterns : defaultPatterns[obj.defaultPattern];
        } catch (e){}
        if(obj.tag !== undefined){
            let element = document.getElementById(obj.tag);
            if(obj.tag.startsWith('.')) element = document.getElementsByClassName(obj.tag.substr(1, obj.tag.length - 1));
            if(obj.tag.startsWith('#')) element = document.getElementsByTagName(obj.tag.substr(1, obj.tag.length - 1));
            this._element = element;
        }

        this._interval();
    }

    _interval(){
        if(!this._paused) this._text = this._patterns[this._currentPosition];
        if(this._element !== undefined) this._element.innerHTML = this._text;

        this._currentPosition = (this._currentPosition === this._patterns.length - 1)
            ? 0 : this._currentPosition + 1;

        setTimeout(this._interval.bind(this), this._time);

    }

    play(){
        this._paused = false;
    }
    pause(){
        this._paused = true;
    }
    stop(){
        this._stop = true;
    }

    getText(){
        return this._text;
    }

    isPaused(){
        return this._paused;
    }
    isStopped(){
        return this._stop;
    }
    getPercentage(){
        return (this._currentPosition / this._patterns.length) * 100;
    }

};
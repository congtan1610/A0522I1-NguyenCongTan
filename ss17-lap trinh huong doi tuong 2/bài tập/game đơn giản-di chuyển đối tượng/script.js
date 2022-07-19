/**
 * Created by nhatnk on 4/26/17.
 */
class Hero {
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    moveLeft() {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }

    moveTop() {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

    moveBottom() {
        this.top += 20;
        console.log('ok: ' + this.top);
    }

    getTimeOut() {
        return this.speed;
    }
}

var hero = new Hero('turtle.jpg', 20, 30, 200, 20);

function start() {
    if (hero.left < window.innerWidth - hero.size&& hero.top==20) {
        hero.moveRight();
    }
    else if(hero.top < window.innerHeight - hero.size && hero.left>30) {
        hero.moveBottom();
    }
    else if (hero.left != 30) {
        hero.moveLeft();
    }
    else if (hero.top != 20) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, hero.getTimeOut());//set tốc độ di chuyển
}

start();
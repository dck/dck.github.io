(function(){
    var colors = [
        {"b": "#ffffff", "c": "#000000"},
        {"b": "#FFFAD5", "c": "#BD4932"},
        {"b": "#FFFAD5", "c": "#105B63"},
        {"b": "#D9CB9E", "c": "#2A2C2B"},
        {"b": "#E6E2AF", "c": "#046380"},
        {"b": "#E6E2AF", "c": "#002F2F"},
        {"b": "#EEEFF7", "c": "#445878"},
        {"b": "#F4F7D9", "c": "#417378"},
        {"b": "#F6E8B1", "c": "#89725B"},
        {"b": "#EEEFF7", "c": "#445878"},
        {"b": "#BDD4DE", "c": "#FF530D"},
    ];
    var randomGenerator = function (seed) {
        this.state = seed;
        this.m = 0x80000000;
        this.a = 1103515245;
        this.c = 12345;
    }

    randomGenerator.prototype.nextInt = function () {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }
    randomGenerator.prototype.nextRange = function (start, end) {
        var size = end - start;
        var factor = this.nextInt() / this.m;
        return start + Math.floor(factor * size);
    }
    randomGenerator.prototype.choice = function (seq) {
        return seq[this.nextRange(0, seq.length)];
    }

    var setColors = function (b, c) {
        var body = document.getElementsByTagName('body')[0];
        var topLine = document.getElementById('welcome');
        var description = document.getElementById('description');
        body.style.background = b;
        topLine.style.background = c;
        description.style.color =c;
    }

    var date = new Date();
    var seed = 50 * date.getDate();

    var rand = new randomGenerator(seed);
    var colorSet = rand.choice(colors);
    setColors(colorSet['b'], colorSet['c']);

})();
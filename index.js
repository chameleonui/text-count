module.exports = TextCount;

function TextCount(str) {
    if (!(this instanceof TextCount)) return new TextCount(str);
    this.str = str;
}

TextCount.prototype.chars =
TextCount.prototype.characters = function() {
    var str = this.str;
    return str.length;
};

TextCount.prototype.words = function() {
    var str = this.str;
    var w = str
    .replace(new RegExp("\\s\\s*", 'g'),' ')
    .replace(new RegExp("^\\s|\\s$", 'g'),'')
    .split(' ');
    return w.length;
};

TextCount.prototype.sents = 
TextCount.prototype.sentences = function() {
    var str = this.str, 
        x = [];
    var w = str
    .replace(new RegExp("\\s\\s*", 'g'),' ')
    .replace(new RegExp("^\\s|\\.\\.\\.|\\s$", 'g'),'')
    .split(/\?|!|\./);
    for (var i = w.length - 1; i >= 0; i--) {
        if (w[i] !== "") x.push(w[i]);
    };

    return x.length;
};
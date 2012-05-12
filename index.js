function chr (s) { return s.charCodeAt(0) }

function pick (xs) {
    var x = xs[Math.floor(Math.random() * xs.length)];
    return String.fromCharCode(x);
}
    
module.exports = function (n) {
    var letters = [ chr('_') ];
    for (var i = 0; i < 26; i++) letters.push(chr('A') + i);
    for (var i = 0; i < 26; i++) letters.push(chr('a') + i);
    var words = letters.slice();
    for (var i = 0; i < 10; i++) words.push(chr('0') + i);
    
    var output = pick(letters);
    for (var i = 1; i < n; i++) output += pick(words);
    return output;
};

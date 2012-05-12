var test = require('tap').test;
var identifier = require('../');

test('names', function (t) {
    t.plan(15 * 15 * 2);
    
    for (var n = 1; n <= 15; n++) {
        for (var i = 0; i < 15; i++) {
            var name = identifier(n);
            t.equal(name.length, n);
            t.ok(/^[A-Za-z_]\w*$/.test(name), 'name=' + name);
        }
    }
});

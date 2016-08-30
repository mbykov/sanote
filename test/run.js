var notation;
try {
    notation = require('../index');
} catch (err) {
    notation = require('../build/index');
}

// log('N', notation.hi2eu('A'));

var str = 'string';

notation.hi2eu(str);


function log() { console.log.apply(console, arguments); }

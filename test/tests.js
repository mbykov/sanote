//

var nota = require('notation-component');


describe('sanskrit morphological notation', function() {
    describe('slp', function() {
        it('convert satyAnfta', function() {
            nota.hi2eu('satyAnfta').should.equal('kuku');
            // nota.eu2hi('सत्यानृत').should.equal('satyAnfta');
        });
        // it('convert ', function() {
        //     nota.hi2eu('').should.equal('');
        //     nota.eu2.hi('').should.equal('');
        // });
    });
});


function log() { console.log.apply(console, arguments); }

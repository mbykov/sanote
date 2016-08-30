// notation node.js and component.js for duo.js module

var c = require('./lib/constants');

log('=============== EXTERNAL');

module.exports = notation();

function notation() {
    if (!(this instanceof notation)) return new notation();
    log('MAIN NOTATION');
}

//  {noun: true, gend: "masc", sups: Array[1]}
notation.prototype.tohi = function(morph) {
    log('MORPH TOHI:', morph);

    let res, sup, gend, nsups;
    let gsupstrs = [];
    // let sups;
    // [c.noun, c[morph.gend], morph.sups.join(', ')].join(': ');
    if (morph.noun) {
        nsups = num4sups(morph.sups);
    }
    log('NOTA:', nsups);
    return nsups;
}

notation.prototype.toeu = function(morphs) {
    log('INSIDE', morphs);
    return 'kuku';
}

notation.prototype.hi2eu = function(morphs) {
    log('INSIDE', morphs);
    return 'kuku';
}

notation.prototype.eu2hi = function(morphs) {

}

function num4sups(sups) {
    let sup, num, gend;
    let nsups = {};
    for (sup of sups) {
        num = sup.split('.')[1];
        if (!nsups[num]) nsups[num] = [];
        nsups[num].push(sup);
    }
    let nsup;
    let res = '';
    for (num in nsups) {
        nsup = nsups[num];
        log('NSUP', nsup);
        let supstrs = [];
        for (let ss of nsup) {
            log('SS', ss);
            let s = ss.split('.')[0];
            supstrs.push(c.case[s]);
        }
        let supstr = supstrs.join(', ');
        log('supstr:', supstr);
        res += [c.num[num], supstr].join(': ');
    }
    return res;
}


function log() { console.log.apply(console, arguments); }

function inc(arr, item) {
    return (arr.indexOf(item) > -1) ? true : false;
}

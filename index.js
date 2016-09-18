// notation node.js and component.js for duo.js module

var cons = require('./lib/constants');
var c = cons.c;
var eu = cons.eu;

module.exports = notation();

function notation() {
    if (!(this instanceof notation)) return new notation();
}

//  {noun: true, gend: "masc", sups: Array[1]}
notation.prototype.tohi = function(morph) {
    let res, nsups, ntips;
    if (morph.noun) {
        nsups = num4sups(morph.sups);
        res = [c[morph.gend], nsups].join(', ');
        res = [c.noun, res].join(': ');
    } else if (morph.verb) {
        ntips = morph.tips.join(', ');
        res = [morph.gana, morph.pada, morph.la, ntips].join(', ');
    } else if (morph.pron) {
        // let morph = {pron: true, var: q.var, gend: q.gend, sups: q.sups};
        nsups = num4sups(morph.sups);
        if (morph.var == 'pers') res = [c.pron, nsups].join(', ');
        else res = [c.pron, c[morph.gend], nsups].join(', ');
    } else if (morph.plain) {
        res = 'pada in comp.';
    } else if (morph.ind) {
        res = c.ind;
    }
    return res;
}

// नाम: पु॰, एक॰: द्वि॰
notation.prototype.toeu = function(str) {
    let parts = str.split(/[:,]/);
    let part, eures = [];
    for (part of parts) {
        eures.push(eu[part.trim()]);
    }
    let res = eures.join(' ');
    res = res.replace(/,$/, '');
    return res;
}

function num4sups(sups) {
    let sup, num, kase, gend;
    let nsups = {};
    for (sup of sups) {
        kase = sup.split('.')[0];
        num = sup.split('.')[1];
        if (!nsups[num]) nsups[num] = [];
        nsups[num].push(kase);
    }
    let kases, supstr;
    let res = '';
    for (num in nsups) {
        let supstr = nsups[num].map(function(sup) { return c.case[sup]; } ).join(', ');
        res += [c.num[num], supstr, c._].join(': ');
    }
    return res;
}


function log() { console.log.apply(console, arguments); }

function inc(arr, item) {
    return (arr.indexOf(item) > -1) ? true : false;
}

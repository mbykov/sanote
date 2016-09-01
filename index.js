// notation node.js and component.js for duo.js module

var c = require('./lib/constants');

log('=============== EXTERNAL');

module.exports = notation();

function notation() {
    if (!(this instanceof notation)) return new notation();
}

//  {noun: true, gend: "masc", sups: Array[1]}
notation.prototype.tohi = function(morph) {
    log('MORPH TOHI:', morph);
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
        if (morph.var == 'pers') res = [c.pron, morph.sups.join(', ')].join(', ');
        else res = [c.pron, c[morph.gend], nsups].join(', ');
    } else if (morph.plain) {
        res = 'pada in comp.';
    } else if (morph.ind) {
        res = c.ind;
    }
    return res;
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
        let supstrs = [];
        for (let ss of nsup) {
            let s = ss.split('.')[0];
            supstrs.push(c.case[s]);
        }
        let supstr = supstrs.join(', ');
        res += [c.num[num], supstr].join(': ');
    }
    return res;
}


function log() { console.log.apply(console, arguments); }

function inc(arr, item) {
    return (arr.indexOf(item) > -1) ? true : false;
}

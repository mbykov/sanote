# node.js & component.js sanote converter

converter of sanskrit morphological notation from traditional to european and vise versa


## Installation

With [component](http://github.com/component/component)

````bash
$ component install mbykov/sanote
````

## API

````javascript
var sanote = require('./notation-component');
````

three methods:

from morph object to traditional notation:

````javascript
log('MSTR:', morph);
    let morph = {noun: true, gend: neut', sups: ['1.1, 2.1']};
    let mstr = sanote.tohi(morph);
    ->  नपु॰, एक॰: प्र॰, द्वि॰
````

from traditional to european notation:

````javascript
    let text = 'नपु॰, एक॰: प्र॰, द्वि॰';
    let tiptext = sanote.toeu(text);
    -> neut. sg.: nom., acc
````

from european to traditional notation:

````javascript
    to be done
````


## Running mocha.js tests

open test/index.html


## License

  GNU GPL

"use strict";
var demo02;
(function (demo02) {
    function sum(a, b) {
        return a + b;
    }
    console.log(`sum(2,3)=>${sum(2, 3)}`);
    console.log(`sum("hello","world")=>${sum("hello", "world")}`);
})(demo02 || (demo02 = {}));

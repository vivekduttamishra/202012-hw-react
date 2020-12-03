"use strict";
var demo09;
(function (demo09) {
    class Person {
        constructor(name) {
            this.name = name;
        }
        get firstName() {
            return this.name.firstName;
        }
        get lastName() {
            return this.name.lastName;
        }
        get fullName() {
            var _a;
            return `${this.name.firstName} ${(_a = this.name.middleName) !== null && _a !== void 0 ? _a : ''} ${this.name.lastName}`;
        }
    }
    let p1 = new Person({ firstName: 'Vivek', lastName: 'Mishra' });
    console.log(p1.fullName);
})(demo09 || (demo09 = {}));

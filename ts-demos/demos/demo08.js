"use strict";
var demo08;
(function (demo08) {
    class Person {
        constructor(id, name, email, phone) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.email = email;
        }
        toString() {
            var _a, _b, _c;
            let name = this.name;
            if (typeof (this.name) !== "string") {
                let n = this.name;
                name = `${n.firstName} ${(_a = n.middleName) !== null && _a !== void 0 ? _a : ''} ${n.lastName}`;
            }
            return `Person[id=${this.id}, name=${name}, email=${(_b = this.email) !== null && _b !== void 0 ? _b : ''}, phone=${(_c = this.phone) !== null && _c !== void 0 ? _c : ''}]`;
        }
    }
    let p1 = new Person(1, "Vivek Dutta Mishra", "vivek@example.com");
    let p2 = new Person('sh2', { firstName: "Shivanshi", lastName: "Mishra" }, null, "9939393");
    console.log(`p1=${p1}`);
    console.log(`p2=${p2}`);
})(demo08 || (demo08 = {}));

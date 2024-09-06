var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num1 = 100;
var str1 = 'sgrsgsrg';
var str2 = 'sefsefd';
var bool1 = false;
bool1 = true;
var var1 = 123;
function calculator(a, b) {
    return a + b;
}
calculator(10, 20);
var User = /** @class */ (function () {
    function User(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    User.prototype.greeting = function () {
        console.log('hello');
    };
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, age, status, isAdmin) {
        var _this = _super.call(this, name, age, status) || this;
        _this.isAdmin = isAdmin;
        return _this;
    }
    SuperUser.prototype.greeting = function () {
        console.log('world');
    };
    return SuperUser;
}(User));
var users = [
    new User('asd', 123, true),
    { name: 'vasya', age: 23, status: false },
    { name: 'anya', age: 23, status: true },
    { name: 'oleg', age: 23, status: true },
    { name: 'inna', age: 23, status: false },
    { name: 'andrew', age: 23, status: false },
    { name: 'steve', age: 23, status: true },
    new SuperUser('asd', 123, false, true)
];
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["NON_BINARY"] = 2] = "NON_BINARY";
})(Gender || (Gender = {}));
var UserX = /** @class */ (function () {
    function UserX(_id, _name, _gender) {
        this._id = _id;
        this._name = _name;
        this._gender = _gender;
        this._id = _id;
        this._name = _name;
        this._gender = _gender;
    }
    Object.defineProperty(UserX.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserX.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserX.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserX;
}());
var user = new UserX(1, 'vasya', Gender.MALE);
var Driver = /** @class */ (function () {
    function Driver(id, name) {
        this.id = id;
        this.name = name;
    }
    Driver.prototype.checkID = function (id) {
        if (typeof id === 'string') { }
    };
    return Driver;
}());
var driver1 = new Driver(1, 'dsds');
var driver2 = new Driver('sfsrwfr1231', 'reterte');
console.log(driver1);
console.log(driver2);

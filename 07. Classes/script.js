// - - - - - - - - Campos em Classes - - - - - - - -
// - - - - - - - - Campos em Classes - - - - - - - -
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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Eduardo = new User();
console.log(Eduardo); // User { name: undefined, age: undefined }
Eduardo.name = "Eduardo";
Eduardo.age = 18;
// Eduardo.job = "Developer"; ERRO, pois não existe o campo job na classe User
// - - - - - - - - Constructor - - - - - - - -
// - - - - - - - - Constructor - - - - - - - -
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var joao = new NewUser("João", 20);
console.log(joao); // NewUser { name: 'João', age: 20 }
// - - - - - - - - Props com Readonly - - - - - - - -
// - - - - - - - - Props com Readonly - - - - - - - -
var Car = /** @class */ (function () {
    function Car(name) {
        // Wheel não poderá ser alterado
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var Fusca = new Car("Fusca");
console.log(Fusca); // Car { name: 'Fusca', wheels: 4 }
console.log(Fusca.wheels); // 4
// - - - - - - - - Herança e Super - - - - - - - -
// - - - - - - - - Herança e Super - - - - - - - -
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine("Destroyer", 10);
console.log(trator); // Machine { name: 'Trator' }
console.log(destroyer); // KillerMachine { name: 'Destroyer', guns: 10 }
// - - - - - - - - Methods - - - - - - - -
// - - - - - - - - Methods - - - - - - - -
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Ol\u00E1, eu sou o ".concat(this.name));
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
jimmy.greeting(); // Olá, eu sou o Jimmy
// - - - - - - - - This - - - - - - - -
// - - - - - - - - This - - - - - - - -
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, " e com ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var scania = new Truck("Scania", 500);
var volvo = new Truck("Volvo", 400);
scania.showDetails(); // Caminhão do modelo: Scania e com 500 cavalos de potência
volvo.showDetails(); // Caminhão do modelo: Volvo e com 400 cavalos de potência
// - - - - - - - - Getters - - - - - - - -
// - - - - - - - - Getters - - - - - - - -
// Leem e tratam a propriedade antes de retornar
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var eduardo = new Person("Eduardo", "Casagrande");
console.log(eduardo.fullName); // Eduardo Casagrande
// - - - - - - - - Setters - - - - - - - -
// - - - - - - - - Setters - - - - - - - -
// Alteram a propriedade antes de atribuir
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X foi alterado para: " + x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y foi alterado para: " + y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoord", {
        get: function () {
            return "X \u00E9 ".concat(this.x, " e Y \u00E9 ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
// Automaticamente as linhas abaixo darão o console.log
myCoords.fillX = 15; // X foi alterado para: 15
myCoords.fillY = 50; // Y foi alterado para: 50
console.log(myCoords.getCoord); // X é 15 e Y é 50
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O t\u00EDtulo do post \u00E9: ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello World");
console.log(myPost.itemTitle()); // O título do post é: Hello World
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O t\u00EDtulo \u00E9: ".concat(this.title);
    };
    return TestingInterface;
}());
// - - - - - - - - Override - - - - - - - -
// - - - - - - - - Override - - - - - - - -
// Sobrescrever um método da classe pai na classe filha
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Alguma coisa");
    };
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Base));
var myObj = new Child();
myObj.someMethod(); // Alguma coisa
// substitui o método herdado da classe pai pelo método da classe filha
Child.prototype.someMethod = function () {
    console.log("Outra coisa");
};
myObj.someMethod(); // Outra coisa
// - - - - - - - - Visibilidade - - - - - - - -
// - - - - - - - - Visibilidade - - - - - - - -
// public - Pode ser acessado de qualquer lugar
// private - Só pode ser acessado dentro da classe
// protected - Apenas classes e subclasses podem acessar. Para acessar, precisamos de um método.
// public
// O public já é o padrão para visibilidade de propriedades e métodos.
// Qualquer método ou propriedade declarado como public pode ser acessado de qualquer lugar.
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
console.log(cInstance.x); // 10
var dInstance = new D();
console.log(dInstance.x); // 10
// Protected
// Podem ser utilizados apenas em subclasses.
// Para acessar uma propriedade, é necessário um método
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("Esse é um método protegido!");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log(this.x);
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
// Ao tentar acessar a propriedade, dará erro
// console.log(fInstance.x); // Property 'x' is protected and only accessible within class 'E' and its subclasses.
// Porém ao acessar com um método, não dará erro
fInstance.showX(); // 10
// fInstance.protectedMethod(); // ERRO, pois o método é protegido
fInstance.showProtectedMethod(); // Esse é um método protegido!
// Private
// Podem ser acessados apenas dentro da classe que foram declarados.
// Além disso, também podem ser acessadas apenas por métodos
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        console.log(this.name);
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Esse é um método privado!");
    };
    PrivateClass.prototype.showwPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
// console.log(pObj.name); // Property 'name' is private and only accessible within class 'PrivateClass'.
pObj.showName(); // Private
// pObj.privateMethod(); // ERRO, pois o método é privado
pObj.showwPrivateMethod(); // Esse é um método privado!
var TestingPrivate = /** @class */ (function (_super) {
    __extends(TestingPrivate, _super);
    function TestingPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestingPrivate.prototype.myMethod = function () {
        // this.privateMethod(); ERRO, pois o método é privado
    };
    return TestingPrivate;
}(PrivateClass));
// - - - - - - - - Static Members - - - - - - - -
// - - - - - - - - Static Members - - - - - - - -
// Com o static, é possível acessar props dentro de uma class sem depender de um Objeto
// com a sintaxe de "const xx = new Class()", por exemplo.
// O static é comummente utilizado em classes de Helpers
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Esse é um Método estático");
    };
    StaticMembers.prop = "Teste static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
StaticMembers.staticMethod(); // Esse é um Método estático
// - - - - - - - - Generic Class - - - - - - - -
// - - - - - - - - Generic Class - - - - - - - -
// Generic Class é uma classe que pode ser usada com vários tipos de dados diferentes
// Para isso, é necessário usar o <T> na declaração da classe
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "typesOf", {
        get: function () {
            return "O first \u00E9 ".concat(typeof this.first, " e o second \u00E9 ").concat(typeof this.second);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("Caixa", "Surpresa");
console.log(newItem); // Item { first: 'Caixa', second: 'Surpresa' }
console.log(newItem.typesOf); // O first é string e o second é string
var secondItem = new Item(true, 15);
console.log(secondItem); // Item { first: true, second: 15 }
console.log(secondItem.typesOf); // O first é boolean e o second é number
// - - - - - - - - Parameters Prop - - - - - - - -
// - - - - - - - - Parameters Prop - - - - - - - -
// É um recurso que possibilidade definir PRIVACIDADE, NOME e TIPO de propriedades dentro do construtor
var ParametersProps = /** @class */ (function () {
    function ParametersProps(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParametersProps.prototype, "showDetails", {
        get: function () {
            return "O produto ".concat(this.name, " custa ").concat(this.price, " e tem ").concat(this.qty, " em estoque");
        },
        enumerable: false,
        configurable: true
    });
    return ParametersProps;
}());
var newShirt = new ParametersProps("Camiseta", 1, 19.99);
console.log(newShirt.name); // Camiseta
// console.log(newShirt.qty); // Property 'qty' is private and only accessible within class 'ParametersProps'.
// Através de métodos é possível acessar os dados denrto do objeto
console.log(newShirt.showDetails); // O produto Camiseta custa 19.99 e tem 1 em estoque
// - - - - - - - - Class Expressions - - - - - - - -
// - - - - - - - - Class Expressions - - - - - - - -
// Cria classes anônimas e vincula ela a uma variável
var classExpression = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new classExpression("João");
console.log(pessoa.name); // João
// - - - - - - - - Abstract Class - - - - - - - -
// - - - - - - - - Abstract Class - - - - - - - -
// Serve como molde de outra classe (mesma ideia das interfaces)
// não é possível instanciar um objeto a partir de uma abstract
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
// const newObj = new AbstractClass(); // ERRO, pois não é possível instanciar um objeto a partir de uma abstract
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("O nome \u00E9 ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
var abstractObj = new AbstractExample("João");
abstractObj.showName(); // O nome é João
// - - - - - - - - Relações entre Classes - - - - - - - -
// - - - - - - - - Relações entre Classes - - - - - - - -
// Podemso criar um objeto baseado em outra classe sem problemas
// além disso, o TS permite que classes sejam idênticas
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
// O TS não reclamará de ser o tipo Dog e uma instância de Cat, pois
// o ts valida apenas o conteúdo dentro da classe e não a classe em si
var doguinho = new Cat();

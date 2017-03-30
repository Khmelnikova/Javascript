var names = ["Adam", "Alan", "Albert", "Barbara", "Belinda", "David", "Dilan", "Diana", "Donald", "Dominic", "Edward", "Emma", "Emily", "Ella", "Eric", "Fred", "Fiona", "Freda", "George", "Gloria", "Gordon"]
var numFlats = 100; // квартир 100

var house = {
    people: [],
    flats: [],
    addPeople: function() {
        if(arguments.length === 0) {
            var name = prompt("Введите имя");
            var flat = prompt("Введите номер квартиры");
            flat *=1;
            if (flat > 0 && flat < 100) {
                this.people.push({ name: name, flat: flat })
                this.flats[flat - 1].people.push(name);

            }
            else { alert("Неверный ввод")}
        }
        else {
            this.people.push({ name: arguments[0], flat: arguments[1] });
            this.flats[arguments[1] - 1].people.push(arguments[0]);
        }
    },
    
    listPeople: function() {
        var number = prompt("Введите номер квартиры, список жильцов которой надо вывести");
        if (number > 0 && number < 100) {
            console.log(this.flats[number-1].people);
            
        }
        else { alert("Неверный ввод")}
    },
    cleanFlat: function() {
        var number = prompt("Введите номер квартиры, которую надо очистить");
        if (number > 0 && number < 100) {
            this.flats[number-1].people = null;
            
        }
        else { alert("Неверный ввод")}
    }
}

function random(min, max) {
    return Math.floor(Math.random()*(max + 1 - min) + min);
}

for(var i = 0; i < numFlats; i++) {
    house.flats[i] = { number: i + 1,
                area: random(30, 90), // почему-то решила, что площади квартир в таком диапазоне 
                people: []
               }
}
for( i = 0; i < names.length; i++) {
    house.people[i] = {name: names[i],
                 flat: random(1, numFlats - 1)
                }
    house.flats[house.people[i].flat].people.push(names[i])
}

console.log(house);

house.addPeople();
house.addPeople("Nadya", 6);
house.cleanFlat();
house.listPeople();
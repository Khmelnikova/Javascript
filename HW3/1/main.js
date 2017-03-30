var names = ["Adam", "Alan", "Albert", "Barbara", "Belinda", "David", "Dilan", "Diana", "Donald", "Dominic", "Edward", "Emma", "Emily", "Ella", "Eric", "Fred", "Fiona", "Freda", "George", "Gloria", "Gordon", "Gregory", "Cameron", "Carl", "Carlos", "Charles","Christopher", "Cole", "Connor", "Caleb", "Carter", "Chase", "Christian", "Clifford", "Cody", "Colin", "Curtis", "Cyrus", "Jacqueline", "Jada", "Jane", "Jasmine", "Jenna", "Jennifer", "Jessica", "Jocelyn", "Jordan", "Josephine", "Joyce", "Julia", "Malcolm", "Martin", "Mason", "Matthew", "Michael", "Miguel", "Miles", "Morgan", "Samantha", "Sandra", "Sara", "Sarah", "Savannah", "Sharon", "Sheila", "Shirley", "Sierra", "Sofia", "Sophia", "Stephanie", "Susan", "Sybil", "Sydney", "Sylvia" ];
var cities = ["Adana", "Algiers", "Ankara", "Bankok", "Berlin", "Barcelona", "Minsk", "Lisbon", "London", "Madrid", "Mexico", "Milan", "Paris", "Ottawa", "Prague", "Valencia", "Warsaw"];

var people = new Array(names.length);

function random(min, max) {
    return Math.floor(Math.random()*(max + 1 - min) + min);
}
    


for (var i = 0; i < people.length; i++) {
    people[i] = {
        age: random(1, 99) ,
        city: cities[random(0, cities.length - 1)] 
    }
}
var tmp, index;
function setName() {
    for(i = 0; i < people.length; i++) {
        people[i].name = names[i];
    }
    
    for( i = 0; i < people.length; i++) {
        index = random(0, people.length - 1);
        tmp = people[i].name;
        people[i].name = people[index].name;
        people[index].name = tmp;
    }
}
setName();

people.sort( function(a, b) {
    return b.age - a.age;
});

for ( i = 0; i < people.length; i++) {
    console.log(people[i].name);
    console.log(people[i].city);
    console.log(people[i].age);
    console.log("------------");
}

document.writeln("Вывела результат в консоли");
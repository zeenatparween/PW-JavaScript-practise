// There are six Object methods in js
// 1) Object.keys():
// 2) Object.values();
// 3) Object.entries();
// 4) Object.assign();
// 5) Object.freeze();
// 6) Object.seal();

         // Object.keys
var employDetails = {
    name: "Shehriyar",
    age: 28,
    salary: 25000
}          
var keys = Object.keys(employDetails)
console.log(keys)

    //   Object.values
var MoviesRealseYear = {
    ColdSkin: 2019,
    Thor : 2010,
    Parrates : 2022,
    Director : 'Alexsender'
}
var values = Object.values(MoviesRealseYear)
console.log(MoviesRealseYear)

// Object.entries()
var StoryBooks = {
    HellenKiller : "Novel",
    RichDadPoorDad : "Inspirational Novel",
    Sebestiean : "Drama",
    Goblin : "Motivational Drama"
}
let entries = Object.entries(StoryBooks)
console.log(entries)

// Object.assign()
var ActorDetails = {
    name: "Ahad Raza Mir",
    age: 34,
    Occupation :" Actor"
}   
var assign = Object.assign({} , ActorDetails)
console.log(assign)


// Object.freeze()
var MoviesDetals = {
    ColdSkin: 2019,
    Thor : 2010,
    Parrates : 2022,
    Director : 'Alexsender'
}
var freezed = Object.isFrozen(MoviesDetals)
console.log(freezed)

// Object.seal()
var StoryBooks = {
    HellenKiller : "Novel",
    RichDadPoorDad : "Inspirational Novel",
    Sebestiean : "Drama",
    Goblin : "Motivational Drama"
}
let seal = Object.isSealed(StoryBooks)
console.log(seal)
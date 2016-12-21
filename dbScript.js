var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoo');

var animalSchema = new mongoose.Schema({
  name  : '',
  diet  : ''
});

var visitorSchema = new mongoose.Schema({
  name            : '',
  favoriteAnimals : []
});

var Animal = mongoose.model('Animal', animalSchema);
var Visitor = mongoose.model('Visitor', visitorSchema);

var animals = [{
  name: 'elephant',
  diet: 'herbivore'
},{
  name: 'aardvark',
  diet: 'ants'
},{
  name: 'peacock',
  diet: 'peanuts'
}];

var visitors = [{
  name: 'Mario',
  favoriteAnimals: ['meerkat', 'marmot', 'manatee']
},{
  name: 'Deborah',
  favoriteAnimals: ['dingo', 'duck', 'dolphin']
}, {
  name: 'Fernando',
  favoriteAnimals: ['fox', 'flamingo', 'falcon']
}];

// animals.forEach(function(element) {
//   var animal = new Animal(element);
//   animal.save(function(err) {
//     if (err) {
//       console.log("Error: ", err)
//     } else {
//       console.log(element.name, ' was saved to the db');
//     }
//   });
// });

// visitors.forEach(function(element) {
//   var visitor = new Visitor(element);
//   visitor.save(function(err) {
//     if (err) {
//       console.log("Error: ", err)
//     } else {
//       console.log(element.name, ' was saved to the db')
//     }
//   });
// });

Visitor.find({favoriteAnimals: 'fox'}, (err, visitor)=>{
  if (err) {
    console.log('Error message: ', err)
  } else {
    console.log(visitor[0]);
  }
});

Visitor.find({name: process.argv[2]}, (err, visitor)=>{
  if (err) {
    console.log('Error message: ', err)
  } else {
    visitor[0].favoriteAnimals.push(process.argv[3]);
    console.log(visitor[0]);
  }
});



mongoose.connection.close();


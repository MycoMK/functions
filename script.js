console.log('connected')
//  function declaration
function great(name, lastName){
console.log('Hi' + name + ' ' + lastName)
}

great('John', 'Smith');

function people(firstName,lastName){
   console.log(`Hey there ${firstName},${lastName}`)

}
people('John', 'Smith');
people('Peter', 'Cech');
people('Arnold', 'Luke');
people('Emily', 'Button');

//  function expression

const speak = function(person1,person2){
console.log(`Good morning  ${person1} and ${person2}`);
};

speak( 'Kings','Emily')


function
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(){
  const captutorials = tutorials.map(tutorial => {
    const words = tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    console.log(words);
    return words;
  })
  return captutorials;
}









// function titleCased(tutorials){
//   return tutorials.toLowerCase().split(' ').map(function(word){
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }) .join(' ');
// }console.log(titleCased('what does the this keyword mean?'));


// function titleCased(tutorials){
//   return tutorials.toLowerCase().split(' ').map(function(word){
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }) .join(' ');
// }console.log(titleCased('what does the this keyword mean?'));




// function titleCased (tutorials){
//   const words = tutorials.split(' ')
//   const newArray = []
//   for (const word of words){
//     let firstLetter = word.substring(0)
//     firstLetter = firstLetter.toUpperCase()
//     let restLetters = word.substring(0)
//     newArray.push(firstLetter + restLetters)
//   }
//   return newArray.join(' ')
// }
// console.log(tutorials)



const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers =teachers.reverse();
console.log(teachers)

//Versione Manuale

// for (let i = 0; i < teachers.length; i++) {
//   const firstTeacher = teachers.pop()
//   const teachersPlace = teachers.splice(i, 0 ,firstTeacher)
// }
// console.log(teachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = [];
longNames = teachers.filter((word) => word.length >= 5)
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers)
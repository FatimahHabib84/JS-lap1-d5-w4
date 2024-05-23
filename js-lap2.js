characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  let blueEye = characters.find((e)=> e.eye_color=="blue")
  console.log(`character with blue eye is: `+blueEye.name);

  
  let MassOver50 = characters.find((e)=> e.mass>50)
  console.log(`character with mass over 50 is `+ MassOver50.name);

let heightLess200 = Array()
heightLess200 = characters.filter((e)=>e.height<200)
console.log(`characters with height less than 200 are: `);
heightLess200.forEach(e => {
    console.log(e.name);
});

console.log('All male characters');
console.log(characters.filter((e)=>e.gender=='male'))

names = []
characters.forEach(e => {
    names.push(e.name)
});
console.log(`All names are: `+names);

heights = []
characters.forEach(e => {
    heights.push(e.height)
});
console.log(`All heights are: `+heights);

let sortedByMass = characters.sort((a,b)=> a.mass - b.mass)
console.log(`sorting by mass`)
console.log(sortedByMass);

let sortedByHeights = characters.sort((a,b)=> b.mass - a.mass)
console.log(`sorting by heights: `)
console.log(sortedByHeights);

console.log(`Does every character have mass more than 40? `+ characters.every((e)=> e.mass >40))
console.log(`Is every character shorter than 200? `+ characters.every((e)=> e.height < 200));

console.log(`Is there at least one character with blue eyes? `+ characters.some((e)=> e.eye_color == 'blue'));
console.log(`Is there at least one character with blue eyes? `+ characters.some((e)=> e.height > 210));







// let student = [
//     {
//         fname : 'Fatimah',
//         age : 24,
//         GPA : 4.4
//     },
//     {
//         fname : 'Deema',
//         age : 29,
//         GPA : 5
//     }
// ]
// console.log(student);
// console.log(student[0]);
//  let st = {
//     fname : 'Noor',
//     age : 25,
//     GPA : 4.2
//  }
//  student.push(st),
//  console.log(student);
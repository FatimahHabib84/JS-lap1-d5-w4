// Objects

let User = {
    fname : "Fatimah",
    lname : 'Alshawmari',
    email: 'Fatimahhabib84@gmail.com',
    age : 24,
    GPA : 4.4,
    ID : 219018276,
    avaliable: false,
    address : {
        country : 'Saudi Arabia',
        provence : 'Eastren Provence',
        city : {
            original : 'Al-ahssa',
            current : 'Riyadh'
        }
    },
    skills : ['Drawing' , 'Writing' , 'Coding'],
    testAvalibility : function(){
        if(this.avaliable==true){
            console.log('Student is precent');
        } else {
            console.log('student is apcent');
        }
    }
}
console.log(User);
console.log(User.fname);
User.ID = 218016575
console.log(User.ID);
delete User.email;
console.log(User.email);
User.testAvalibility();
console.log(User.address);
console.log(User.address.city.current);
console.log(User.skills[2]);
// User.skills.forEach(element => {
//     console.log(element+' , ')
// });
console.log(User.skills.join(' , '));






// let Student = {
//     fname : "fatimah",
//     lname : "Habib",
//     age : 24,
//     ID : 219018276,
//     GPA : 4.4,
//     fullname: function(){
//         console.log(this.fname+" "+ this.lname)
//     },
//     courses:['course1','course2'],
//     address : {
//         add1:'Riyadh',
//         add2:'Al ahssa'
//     }
// }
// console.log(Student.fname);
// Student.isGraduate=true
// // delete Student.age
// console.log(Student);
// Student.fullname
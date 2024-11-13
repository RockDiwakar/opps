// let arr1=[1,2,3];
// let arr2=[1,2,3];
// arr1.sayHello=()=>{
//     console.log("Hello,i am arr ")
// };

// arr2.sayHello=()=>{
//     console.log("Hello,i am arr ")
// };

/// Factory function

// function PersonMaker(name,age) {
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         },
//     };
//     return person;
// } 

//let p1=PersonMaker("Rohit",20);


///Constructors-- does't return anything

// function Person(name,age) {
//    this.name=name;
//     this.age=age;
//     console.log(this)
// }
//    Person.prototype.talk=function(){
//             console.log(`Hi my name is ${this.name}`);
//         };
    
//  //let p1=PersonMaker("Rohit",20);
      

// class Person{
//    Constructor(name,age) {
//     this.name=name;
//      this.age=age;
      
//  }
//  talk(){
//     console.log(`Hi my name is ${this.name}`);
//  }
// };


// let p1=new Person("adam",20);
     

 /// 4. Inheritance 

 class Person{
    constructor(name,age){
        console.log("Person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,I am ${this.name}`)
    }
 }

 class Student extends Person{
    constructor(name,age,marks){
        console.log("Student class constructor");
        super(name,age)   // parent class constructor is being called
        this.marks=marks;
    }
 }
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age)   // parent class constructor is being called
        this.subject=subject
    }
}

/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
    const over50= arr.filter(student => student.marks > 50);
    const StdNames = over50.map(student => student.name);
    console.log(StdNames);
  }
  
  PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
      if (student.marks > 50) {
        console.log(student);
      }
    });
}
PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
  const newStd = {id: 4, name: "susan", age: "20", marks: 45};
    arr.push(newStd);
    console.log(arr);
}
addData() ;

// 4th task
function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks >= 50);
    console.log(arr);
}
 removeFailedStudent();

 //5th task
function concatenateArray() {
  //Write your code here, just console.log
  const newStd = [
      {
        id: 4,
        name: "mike",
        age: "21",
        marks: 75},
      {
        id: 5,
        name: "jane",
        age: "19",
        marks: 90},
      {
        id: 6,
         name: "peter",
          age: "22",
           marks: 60}
    ];
    arr = arr.concat(newStd);
    console.log(arr);

}
concatenateArray();

// // join
// {
//   const fruits = ['apple','banana','orange'];
//   const result = fruits.join();
//   console.log(result); 
// }
// //split
// {
//   const fruits = 'apple,pare,dean';
//   const result = fruits.split(',', 2);
//   console.log(result);
// }
// //reverse(아예 바꿔버린다.)
// {
//   const array = [1,2,3,4,5];
//   const result = array.reverse();
//   console.log(result);
// }
// // slice(부분 추출)
// {
//   const array = [1,2,3,4,5];
//   const result = array.slice(2,4);
//   console.log("array = "+ array + "\nresult = "+result);
// }
// // splice(부분 삭제)
// {
//   const array = [1,2,3,4,5];
//   const result = array.splice(2);
//   console.log("array = " + array , '\nresult = ' + result); 
// }
// // find() / filter() / map() / some() / every()
// {

//   class Student {
//     constructor(name,age,enrolled,score){
//       this.name = name;
//       this.age = age;
//       this.enrolled = enrolled;
//       this.score = score;
//     };
//   };

//   const students = [
//     new Student('A',29,true,45),
//     new Student('B',28,false,80),
//     new Student('C',30,true,90),
//     new Student('D',40,false,66),
//     new Student('E',18,true,88)
//   ];
  
//   const result = students.find((student) => student.score === 90);

//   console.log(result);

//   // 내가 기존의 생각으로 푼 것 
//   // indent가 너무 깊어지고 코드가 더러워진다.

//   // for (let index = 0; index < students.length; index++) {
//   //   const element = students[index];
//   //   if (element.score === 90) {
//   //     console.log(element.name);
//   //     };
//   // };
 
//   const result2 = students.filter((student) => student.enrolled === true)
//   console.log(result2);


//   const result3 = students.map((students) => students.score * 2)
//   console.log(result3);
//   // 내가 기존의 생각으로 푼 것
//   // indent가 너무 깊어지지는 않았다. 나쁘지 않다. 단지 map이라는 함수를 사용하지 않았을 뿐!!

//   // const result3 = []
//   // for (let index = 0; index < students.length; index++) {
//   //   result3.push(students[index].score)
//   // }
//   // console.log(result3);



//   const result4 = students.some((student) => student.score < 50);
//   const result5 = students.every((student) => student.score < 50);
//   console.log(result4);
//   console.log(result5);


//   const result6 = students.reduce((total,student) => total += student.score,0);
//   console.log(result6/students.length);

//   // 
//   // let result4 = false
//   // for (let index = 0; index < students.length; index++) {
//   //   const student = students[index];
//   //   if (student.score < 50){
//   //     result4 = true
//   //     break
//   //   }
//   // }
//   // console.log(result4);

//   const result7 = students
//     .map((student) => student.score)
//     .join()
//     .split(',');
//   console.log(result7);

//   const result8 = students
//     .map((student) => parseInt(student.score))
//     .sort()
//     .join()
//   console.log(result8);
// }


let result = {
  'Strike':0,
  'Ball':0,
  'Out':0
          };
let result2 = {
  'Strike':0,
  'Ball':0,
  'Out':0
          };
console.log(JSON.stringify(result) == JSON.stringify(result2))
console.log(Object.keys(result).length)

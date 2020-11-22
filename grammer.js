// join
{
  const fruits = ['apple','banana','orange'];
  const result = fruits.join();
  console.log(result); 
}
//split
{
  const fruits = 'apple,pare,dean';
  const result = fruits.split(',', 2);
  console.log(result);
}
//reverse(아예 바꿔버린다.)
{
  const array = [1,2,3,4,5];
  const result = array.reverse();
  console.log(result);
}
// slice(부분 추출)
{
  const array = [1,2,3,4,5];
  const result = array.slice(2,4);
  console.log("array = "+ array + "\nresult = "+result);
}
// splice(부분 삭제)
{
  const array = [1,2,3,4,5];
  const result = array.splice(2);
  console.log("array = " + array , '\nresult = ' + result); 
}
// find
{

  class Student {
    constructor(name,age,enrolled,score){
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    };
  };

  const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
  ];
  
  const result = students.find()
  // for (let index = 0; index < students.length; index++) {
  //   const element = students[index];
  //   if (element.score === 90) {
  //     console.log(element.name);
  //     };
  // };
  
}
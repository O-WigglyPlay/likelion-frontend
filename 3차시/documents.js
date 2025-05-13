////변수
// let k;
// k = "hello";
// console.log(k);

////함수
// function test() {
//   var k = "hello2";
//   console.log(k);
// }

// console.log(k);
// test();

////자료형
// let n = 123;
// console.log(n);
// n = 12.345;
// console.log(n);

// console.log(1 / 0);    // Infinity
// console.log("숫자가 아님" / 2); // NaN

////bigint 자료형
// let k =
//   129818274891278391273891273981728937182937891273891273891273891723891723891723n;
// console.log(k);

////문자열
// let str = "Hello";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed another ${str2}`;

// console.log(str + str2);
// console.log(str2);
// console.log(phrase);

// let age;
// console.log(age);

////오브젝트
// let user = {
//   name: "john",
//   age: 30,
// };

// console.log(user);
// console.log(user.name);
// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);

// user.name = "Pete";
// console.log(user.name);
// user["name"] = "Mary";
// console.log(user.name);

// let obj = {};
// console.log(obj);

////구조분해할당
// let array = [1, 2, 3, 4, 5, 6, 7];
// let [a1, a2, a3, ...other] = array;

// console.log(a1, a2, a3);
// console.log(other);

// let user = {
//   id: "test01",
//   password: "pass",
//   name: "테스트",
// };

// let { id, password, name } = user;

// console.log(id, password, name);

// let { password, ...user2 } = user;
// console.log(user2);

////함수
// function fn1(params) {
//   return 1;
// }

// fn1();

// //변수안에 함수도 넣을수있다.
// const fn2 = fn1;

// fn2();

// //화살표함수
// const arf = (params) => {
//   //code
// };

// const array1 = ["a", "b", "c"];

// array1.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// const array1 = [1, 4, 9, 16];
// const array2 = array1.map((e, i, a) => {
//   return e * 2;
// });

// console.log(array2);

// const words = ["Spray", "Limit", "Exuberant", "Destruction", "Present"];
// const result = words.filter((word) => {
//   return word.length > 6;
// });
// console.log(result);

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

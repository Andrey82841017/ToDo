// const arr = [
//   {
//     asdasd: {
//       id: 1,
//       name: 'someName',
//       descriptions: 'asdasdas',
//       user: {
//         id: 1,
//         name: 'John',
//       },
//     },
//     asdasdasdsadasdsad: {
//       id: 2,
//       name: 'someName2',
//       descriptions: 'asdsadasdsadsadasdasdas',
//       user: {
//         id: 1,
//         name: 'John',
//       },
//     },
//   },
// ];

// // [
// //   {
// //     id: 1,
// //     name: 'John',
// //     descriptions: ['asdasdas', 'asdsadasdsadsadasdasdas']
// //   },
// // ]

// function getInfo(arr) {
//   const result = {};
//   arr.forEach((item) => {
//     for (let key in item) {
//       const obj = item[key];
//       const userID = obj.user.id;
//       // console.log(userID);
//       if (!result[userID]) {
//         result[userID] = {
//           id: userID,
//           name: obj.user.name,
//           descriptions: [],
//         };
//       }
//       console.log('1111', result[userID]);
//       result[userID].descriptions.push(obj.descriptions);
//     }
//   });
//   return Object.values(result);
// }


// console.log(getInfo(arr));
console.log("b" + "a" ++ "" + "a" + "a")
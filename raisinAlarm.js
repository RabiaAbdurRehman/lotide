// const raisinAlarm = function(cookie) {
//     for (let i = 0; i < cookie.length; i++) {
//       if (cookie[i] !== "🍫") {
//         return "Raisin alert!";
//       }
//     }
//     return "All good!";
// }
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// const raisinAlarmArray = function (cookies) {
//     let arr = [];
//     cookies.forEach(chocolateChips => {
//       if (chocolateChips.includes("🍇")) {
//         arr.push("Raisin alert!");
//       } else {
//         arr.push("All good!");
//       }
//     });
//     return arr;
//   };

//   console.log(
//     raisinAlarmArray([
//       ["🍫", "🍫", "🍇", "🍫"],
//       ["🍫", "🍇", "🍫", "🍫", "🍇"],
//       ["🍫", "🍫", "🍫"]
//     ])
//   );
  const raisinAlarmArray = function (cookies) {
    let arr = [];

    for(let i = 0; i<cookies.length; i++){
     const cookie = cookies[i];
     let test = false;

      for ( let j = 0; j<cookie.length; j++){

  }
  if (cookie[j] === "🍇") {
    test = true;

    arr.push("Raisin alert!");
  } else {
    arr.push("All good!");
  }

  }
return arr;

  };
  console.log(
        raisinAlarmArray([
          ["🍫", "🍫", "🍇", "🍫"],
          ["🍫", "🍇", "🍫", "🍫", "🍇"],
          ["🍫", "🍫", "🍫"]
        ])
      );

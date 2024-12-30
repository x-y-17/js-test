setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve) {
  console.log(2);
  for (var i = 0; i < 10000; ) {
    i++;
  }
  console.log(3);
  return;
}).then(() => {
  console.log(4);
});
console.log(5);

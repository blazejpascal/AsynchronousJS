// Indirect recurence example
function even(number) {
  if (number == 0)
    return "even";
  else {
    return odd(number - 2);
  }
}
function odd(number) {
  if (number == 1)
    return "odd";
  else
    return even(number - 2);
}

console.log(even(44));

// Callback example
function some_function(arg1, arg2, callback) {
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  callback(my_number);
}
var internal_1 = function(num) {
  console.log("callback called! " + num);
};
var internal_2 = function(num) {
  console.log("callback 2 called! " + num);
};
some_function(5, 15, internal_2);

// Promise example
var wait = function (time) {
  return new Promise(function (resolve) {
    setTimeout(function() {resolve(7)}, time);
  });
};
var returned;
wait(3000).then(function (value) {
  returned = value;
  console.log( "Returned: ", returned);
});
// Should be undefined
console.log(returned);

// Async/await example
var wait_2 = async () => {
  console.log(await wait(4000));
}
wait_2();

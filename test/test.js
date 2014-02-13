//boolean test
test('isEven()', function() {
  ok(isEven(0), 'Zero is an even number');
  ok(isEven(2), 'So is two');
  ok(isEven(-4), 'So is negative four');
  ok(!isEven(1), 'One is not an even number');
  ok(!isEven(-7), 'Neither is negative seven');
});

//equals test
test('sayHi()', function () {
  equal(sayHi("Jack"), "Hi, Jack", "function outputs string correctly");
});
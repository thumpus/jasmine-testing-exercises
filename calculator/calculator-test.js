
//testing this with values that i know: my actual home loan 
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 209493.62, years: 30, rate: 2.875}
  expect(calculateMonthlyPayment(values)).toEqual('869.17');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 250000, years: 30, rate: 5}
  expect(calculateMonthlyPayment(values)).toEqual('1342.05');
  //without the .toFixed, we would expect 1342.0540575303496
});

/// etc

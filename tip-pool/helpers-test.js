describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

it('should correctly calculate the sum of the payment(s) when calling sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
    billAmtInput.value = 400
    tipAmtInput.value = 80
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(100);
  });

it('should correctly calculate tip percentage when calling calculateTipPercent()', function() {
  expect(calculateTipPercent(200, 40)).toEqual(20);
  expect(calculateTipPercent(3000, 5)).toEqual(0);
})

it('should make a new td from value and append it to tr on appendTd(tr,value)', function() {
  let newTr = document.createElement('tr');
  appendTd(newTr, 'test');
  expect(newTr.firstChild.innerText).toEqual('test');
})

  afterEach(function() {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;

  });
});

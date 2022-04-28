describe("payments test with setup and teardown", function(){
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

it('should add a new payment on submitPaymentInfo', function(){
    submitPaymentInfo();
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
})

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }
    expect(createCurPayment()).toEqual(expectedPayment);
  });

it('should payment update #paymentTable on appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('20%');
  });


})
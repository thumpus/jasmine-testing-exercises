describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it ('should add the inputted servers name and tip percentage to the table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentServerTable = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentServerTable[0].innerText).toEqual('Alice');
    expect(currentServerTable.length).toEqual(2);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

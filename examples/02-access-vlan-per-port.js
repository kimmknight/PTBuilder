addDevice("S1", "2960-24TT", 200, 100);
var c = ["enable", "configure terminal", "vlan 10", "exit"];
for (var i = 1; i <= 24; i++) {
  c.push("interface FastEthernet0/" + i, "switchport mode access", "switchport access vlan 10", "exit");
}
c.push("end", "write memory");
configureIosDevice("S1", c.join("\n"));

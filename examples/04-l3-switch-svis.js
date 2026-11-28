addDevice("L3S1", "3560-24PS", 200, 100);
var c = ["enable", "configure terminal", "hostname L3S1", "no ip domain-lookup", "ip routing", "vlan 40", "exit", "vlan 50", "exit"];
for (var i = 1; i <= 24; i++) {
  c.push("interface FastEthernet0/" + i, "switchport mode access", "switchport access vlan " + (i <= 12 ? 40 : 50), "exit");
}
c.push("interface vlan 40", "ip address 4.0.0.1 255.255.255.252", "no shutdown", "exit");
c.push("interface vlan 50", "ip address 5.0.0.1 255.255.255.252", "no shutdown", "exit");
c.push("end", "write memory");
configureIosDevice("L3S1", c.join("\n"));

addDevice("R1", "2911", 200, 100);
addDevice("S1", "2960-24TT", 200, 250);
addLink("R1", "GigabitEthernet0/1", "S1", "FastEthernet0/1", "straight");
configureIosDevice("R1", [
  "enable", "configure terminal", "hostname R1",
  "interface GigabitEthernet0/1", "ip address 192.168.10.1 255.255.255.0", "no shutdown", "exit",
  "router eigrp 1", "network 192.168.10.0", "no auto-summary", "exit",
  "end", "write memory"
].join("\n"));

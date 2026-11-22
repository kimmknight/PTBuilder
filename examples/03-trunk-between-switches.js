addDevice("S1", "2960-24TT", 100, 100);
addDevice("S2", "2960-24TT", 300, 100);
addLink("S1", "GigabitEthernet0/1", "S2", "GigabitEthernet0/1", "cross");
var c = ["enable", "configure terminal", "interface GigabitEthernet0/1", "switchport mode trunk", "exit", "end", "write memory"];
configureIosDevice("S1", c.join("\n"));
configureIosDevice("S2", c.join("\n"));

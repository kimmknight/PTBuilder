addDevice("S1", "2960-24TT", 200, 100);
addDevice("PC1", "PC-PT", 100, 200);
addDevice("PC2", "PC-PT", 300, 200);
addLink("PC1", "FastEthernet0", "S1", "FastEthernet0/1", "straight");
addLink("PC2", "FastEthernet0", "S1", "FastEthernet0/2", "straight");
configurePcIp("PC1", false, "192.168.10.2", "255.255.255.0", "192.168.10.1");
configurePcIp("PC2", false, "192.168.10.3", "255.255.255.0", "192.168.10.1");

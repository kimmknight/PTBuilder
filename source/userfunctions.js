addDevice = function(deviceName, deviceModel, x, y) {
    var deviceType = allDeviceTypes[deviceModel];
    var originalDeviceName = ipc.appWindow().getActiveWorkspace().getLogicalWorkspace().addDevice(deviceType, deviceModel, x, y);

    if (!originalDeviceName) { return false; }

    var device = ipc.network().getDevice(originalDeviceName);
    device.setName(deviceName);

    return true;
}

addModule = function(deviceName, slot, model) {
    var device = ipc.network().getDevice(deviceName);
    var moduleType = allModuleTypes[model];
    result = device.addModule(slot, moduleType, model);
    if (result != true) { return false; }

    return true;
}

addLink = function(device1Name, device1Interface, device2Name, device2Interface, linkType) {
    var linkType = allLinkTypes[linkType];
    result = ipc.appWindow().getActiveWorkspace().getLogicalWorkspace().createLink(device1Name, device1Interface, device2Name, device2Interface, linkType);
    if (result != true) { return false; }

    return true;
}

configurePcIp = function(deviceName, dhcpEnabled = undefined, ipaddress = undefined, subnetMask = undefined, defaultGateway = undefined, dnsServer = undefined) {
    var device = ipc.network().getDevice(deviceName);
    var port = device.getPort("FastEthernet0");
    if (dhcpEnabled) device.setDhcpFlag(dhcpEnabled);
    if (ipaddress && subnetMask) port.setIpSubnetMask(ipaddress, subnetMask);
    if (defaultGateway) port.setDefaultGateway(defaultGateway);
    if (dnsServer) port.setDnsServerIp(dnsServer);
}

configureIosDevice = function(deviceName, commands) {
    var device = ipc.network().getDevice(deviceName);
    device.skipBoot();
    builder.enterGlobalConfigMode(deviceName);
    commandsArray = commands.split("\n");
    for (var command of commandsArray) {
        builder.sendIosCommand(deviceName, command);
    }
    builder.sendIosCommand(deviceName, "end");
    builder.sendIosCommand(deviceName, "write memory");
    builder.sendIosCommand(deviceName, "exit");
}
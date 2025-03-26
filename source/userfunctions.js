addDevice = function(deviceName, deviceModel, x, y) {
    var deviceType = allDeviceTypes[deviceModel];
    var originalDeviceName = ipc.appWindow().getActiveWorkspace().getLogicalWorkspace().addDevice(deviceType, deviceModel, x, y);

    if (!originalDeviceName) { return false; }

    var device = ipc.network().getDevice(originalDeviceName);
    device.setName(deviceName);

    device.skipBoot();

    return true;
}

addModule = function(deviceName, slot, model) {
    var device = ipc.network().getDevice(deviceName);

    powerState = device.getPower();
    device.setPower(false);

    var moduleType = allModuleTypes[model];
    result = device.addModule(slot, moduleType, model);

    if (powerState) {
        device.setPower(true);
        device.skipBoot();
    }

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
    commandsArray = commands.split("\n");
    device.enterCommand("!", "global");
    for (var command of commandsArray) {
        device.enterCommand(command, "");
    }
    device.enterCommand("write memory", "enable");
}
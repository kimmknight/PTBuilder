addDevice = function(deviceName, deviceModel, x, y) {
    var deviceType = allDeviceTypes[deviceModel];
    var originalDeviceName = ipc.appWindow().getActiveWorkspace().getLogicalWorkspace().addDevice(deviceType, deviceModel, x, y);

    if (!originalDeviceName) { return false; }

    var device = ipc.network().getDevice(originalDeviceName);
    device.setName(deviceName);

    if (deviceType <= 1 || deviceType == 16) {
        device.skipBoot();
    }

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
        var deviceType = device.getType();
        if (deviceType <= 1 || deviceType == 16) {
            device.skipBoot();
        }
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
    var deviceType = device.getType();
    if (deviceType <= 1 || deviceType == 16) {
        device.skipBoot();
    }
    commandsArray = commands.split("\n");
    device.enterCommand("!", "global");
    for (var command of commandsArray) {
        device.enterCommand(command, "");
    }
    device.enterCommand("write memory", "enable");
}

var deviceTypes = {
    router: 0,
    switch: 1,
    cloud: 2,
    bridge: 3,
    hub: 4,
    repeater: 5,
    coaxialsplitter: 6,
    accesspoint: 7,
    pc: 8,
    server: 9,
    printer: 10,
    wirelessrouter: 11,
    ipphone: 12,
    dslmodem: 13,
    cablemodem: 14,
    remotenetwork: 15,
    multilayerswitch: 16,
    laptop: 17,
    tabletpc: 18,
    pda: 19,
    wirelessenddevice: 20,
    wiredenddevice: 21,
    tv: 22,
    homevoip: 23,
    analogphone: 24,
    multiuser: 25,
    asa: 26,
    ioe: 27,
    homegateway: 28,
    celltower: 29,
    ciscoaccesspoint: 30,
    centralofficeserver: 31,
    embeddedciscoaccesspoint: 32,
    sniffer: 33,
    mcu: 34,
    sbc: 35,
    thing: 36,
    mcucomponent: 37,
    embeddedserver: 38
}

function getDevices(filter = undefined, startsWith = "") {
    // filter can be a string, number or array of strings/numbers (or nothing)
    // For example:
    // "router"
    // 0
    // [switch, router, multilayerswitch]
    // [0, 1, 16]

    if (filter) {
        if (typeof filter == "string") {
            filter = [filter];
        }
        if (typeof filter == "number") {
            filter = [filter];
        }
        for (var i = 0; i < filter.length; i++) {
            if (typeof filter[i] == "string") {
                filter[i] = deviceTypes[filter[i].toLowerCase()];
            }
        }
    }
    var deviceCount = ipc.network().getDeviceCount();
    var devices = [];
    for (var i = 0; i < deviceCount; i++) {
        var device = ipc.network().getDeviceAt(i);
        var deviceName = device.getName();
        var deviceType = device.getType();
        
        if ((!filter || filter.includes(deviceType)) && deviceName.startsWith(startsWith)) {
            devices.push(deviceName);
        }
    }
    return devices;
}
var allModuleTypes = {
    "NM-1E": 1,
    "NM-1E2W": 1,
    "NM-1FE-FX": 1,
    "NM-1FE-TX": 1,
    "NM-1FE2W": 1,
    "NM-2E2W": 1,
    "NM-2FE2W": 1,
    "NM-2W": 1,
    "NM-4A/S": 1,
    "NM-4E": 1,
    "NM-8A/S": 1,
    "NM-8AM": 1,
    "NM-Cover": 1,
    "NM-ESW-161": 1,
    "1240-Cellular": 2,
    "1240-Cover": 2,
    "HWIC-1GE-SFP": 2,
    "HWIC-2T": 2,
    "HWIC-4ESW": 2,
    "HWIC-8A": 2,
    "HWIC-AP-AG-B": 2,
    "NIM-2T": 2,
    "NIM-Cover": 2,
    "NIM-ES2-4": 2,
    "WIC-1AM": 2,
    "WIC-1ENET": 2,
    "WIC-1T": 2,
    "WIC-2AM": 2,
    "WIC-2T": 2,
    "WIC-Cover": 2,
    "PT-ROUTER-NM-1AM": 3,
    "PT-ROUTER-NM-1CE": 3,
    "PT-ROUTER-NM-1CFE": 3,
    "PT-ROUTER-NM-1CGE": 3,
    "PT-ROUTER-NM-1FFE": 3,
    "PT-ROUTER-NM-1FGE": 3,
    "PT-ROUTER-NM-1S": 3,
    "PT-ROUTER-NM-1SS": 3,
    "PT-ROUTER-NM-COVER": 3,
    "AC-POWER-SUPPLY": 4,
    "POWER-COVER-PLATE": 4,
    "PT-SWITCH-NM-1CE": 4,
    "PT-SWITCH-NM-1CFE": 4,
    "PT-SWITCH-NM-1CGE": 4,
    "PT-SWITCH-NM-1FFE": 4,
    "PT-SWITCH-NM-1FGE": 4,
    "PT-SWITCH-NM-COVER": 4,
    "PT-CLOUD-NM-1AM": 5,
    "PT-CLOUD-NM-1CE": 5,
    "PT-CLOUD-NM-1CFE": 5,
    "PT-CLOUD-NM-1CGE": 5,
    "PT-CLOUD-NM-1CX": 5,
    "PT-CLOUD-NM-1FFE": 5,
    "PT-CLOUD-NM-1FGE": 5,
    "PT-CLOUD-NM-1S": 5,
    "PT-REPEATER-NM-1CE": 6,
    "PT-REPEATER-NM-1CFE": 6,
    "PT-REPEATER-NM-1CGE": 6,
    "PT-REPEATER-NM-1FFE": 6,
    "PT-REPEATER-NM-1FGE": 6,
    "PT-REPEATER-NM-COVER": 6,
    "Linksys-WMP300N": 7,
    "PT-HOST-NM-1AM": 7,
    "PT-HOST-NM-1CE": 7,
    "PT-HOST-NM-1CFE": 7,
    "PT-HOST-NM-1CGE": 7,
    "PT-HOST-NM-1FFE": 7,
    "PT-HOST-NM-1FGE": 7,
    "PT-HOST-NM-1W": 7,
    "PT-HOST-NM-1W-A": 7,
    "PT-HOST-NM-1W-AC": 7,
    "PT-HOST-NM-3G/4G": 7,
    "PT-HOST-NM-COVER": 7,
    "PT-MODEM-NM-1CE": 8,
    "PT-MODEM-NM-1CFE": 8,
    "PT-MODEM-NM-1CGE": 8,
    "Linksys-WPC300N": 9,
    "PT-LAPTOP-NM-1AM": 9,
    "PT-LAPTOP-NM-1CE": 9,
    "PT-LAPTOP-NM-1CFE": 9,
    "PT-LAPTOP-NM-1CGE": 9,
    "PT-LAPTOP-NM-1FFE": 9,
    "PT-LAPTOP-NM-1FGE": 9,
    "PT-LAPTOP-NM-1W": 9,
    "PT-LAPTOP-NM-1W-A": 9,
    "PT-LAPTOP-NM-1W-AC": 9,
    "PT-LAPTOP-NM-3G/4G": 9,
    "PT-CLOUD-NM-1CX": 10,
    "IP_PHONE_POWER_ADAPTER": 11,
    "Linksys-WPC300N": 12,
    "PT-TABLETPC-NM-1AM": 12,
    "PT-TABLETPC-NM-1CE": 12,
    "PT-TABLETPC-NM-1CFE": 12,
    "PT-TABLETPC-NM-1CGE": 12,
    "PT-TABLETPC-NM-1FFE": 12,
    "PT-TABLETPC-NM-1FGE": 12,
    "PT-TABLETPC-NM-1W": 12,
    "PT-TABLETPC-NM-1W-A": 12,
    "PT-TABLETPC-NM-1W-AC": 12,
    "PT-TABLETPC-NM-3G": 12,
    "Linksys-WPC300N": 13,
    "PT-PDA-NM-1AM": 13,
    "PT-PDA-NM-1CE": 13,
    "PT-PDA-NM-1CFE": 13,
    "PT-PDA-NM-1CGE": 13,
    "PT-PDA-NM-1FFE": 13,
    "PT-PDA-NM-1FGE": 13,
    "PT-PDA-NM-1W": 13,
    "PT-PDA-NM-1W-A": 13,
    "PT-PDA-NM-1W-AC": 13,
    "PT-PDA-NM-3G/4G": 13,
    "Linksys-WPC300N": 14,
    "PT-WIRELESSENDDEVICE-NM-1AM": 14,
    "PT-WIRELESSENDDEVICE-NM-1CE": 14,
    "PT-WIRELESSENDDEVICE-NM-1CFE": 14,
    "PT-WIRELESSENDDEVICE-NM-1CGE": 14,
    "PT-WIRELESSENDDEVICE-NM-1FFE": 14,
    "PT-WIRELESSENDDEVICE-NM-1FGE": 14,
    "PT-WIRELESSENDDEVICE-NM-1W": 14,
    "PT-WIRELESSENDDEVICE-NM-1W-A": 14,
    "PT-WIRELESSENDDEVICE-NM-1W-AC": 14,
    "Linksys-WPC300N": 15,
    "PT-WIREDENDDEVICE-NM-1AM": 15,
    "PT-WIREDENDDEVICE-NM-1CE": 15,
    "PT-WIREDENDDEVICE-NM-1CFE": 15,
    "PT-WIREDENDDEVICE-NM-1CGE": 15,
    "PT-WIREDENDDEVICE-NM-1FFE": 15,
    "PT-WIREDENDDEVICE-NM-1FGE": 15,
    "PT-WIREDENDDEVICE-NM-1W": 15,
    "PT-WIREDENDDEVICE-NM-1W-A": 15,
    "PT-HEADPHONE": 16,
    "PT-MICROPHONE": 16,
    "ASA-Cover": 19,
    "PT-CELL-NM-1CX": 21,
    "PT-CELL-NM-3G/4G": 21,
    "PT-IOT-NM-1CE": 22,
    "PT-IOT-NM-1CFE": 22,
    "PT-IOT-NM-1CGE": 22,
    "PT-IOT-NM-1W": 22,
    "PT-IOT-NM-1CE": 23,
    "PT-IOT-NM-1CFE": 23,
    "PT-IOT-NM-1CGE": 23,
    "PT-IOT-NM-1W": 23,
    "PT-IOT-NM-1W-AC": 23,
    "PT-IOT-NM-3G/4G": 23,
    "PT-IOT-CUSTOM-IO": 26,
    "PT-IOT-POWER-ADAPTER": 27,
    "PT-UNV-PWR-ADAPTER": 28,
    "ROUTER-ADAPTER": 29,
    "GLC-FE-100FX-RGD": 30,
    "GLC-GE-100FX": 30,
    "GLC-LH-SMD": 30,
    "GLC-T": 30,
    "GLC-TE": 30,
    "ACCESS_POINT_POWER_ADAPTER": 31,
    "C3650-BUILTIN": 32,
    "C3650-SFP-BUILTIN": 32,
    "ISR4321-BUILTIN": 32,
    "ISR4331-BUILTIN": 32,
    "PT-CONTROLLER-BUILTIN": 32,
    "MERAKI-POWER-ADAPTER": 34,
}
# Examples

Small, self-contained scripts. Paste one into **Extensions > Builder Code Editor** on an empty workspace and run it.

| File | Shows |
|---|---|
| `01-pc-static-ip.js` | Static IP, mask and gateway on PCs with `configurePcIp` |
| `02-access-vlan-per-port.js` | Access VLAN on every port of a switch, one interface at a time |
| `03-trunk-between-switches.js` | Crossover link between two switches, both ends set as trunks |
| `04-l3-switch-svis.js` | Layer 3 switch with VLANs, port assignments, SVIs and `ip routing` |
| `05-router-eigrp-lan.js` | Router LAN interface and EIGRP |

## Notes (tested on Packet Tracer 9.0.1.0858)

- The scripts contain no `//` comments. In testing, a `//` comment stopped every line after it from running, with no error shown. Block comments (`/* ... */`) work, because they have an explicit end.
- `interface range` commands sent through `configureIosDevice` did not apply, although the same commands work when pasted into the CLI. The examples configure each interface individually instead.
- After `vlan <id>`, send `exit` before the next command; otherwise the next `vlan` line can be rejected.
- New routers show the "initial configuration dialog" on the console. `configureIosDevice` applies the config anyway (the console shows `Configured from console by console`), but the dialog is not answered by the script. Type `no` in the CLI once to clear it. Alternatively, power-cycle the router: the examples end with `write memory`, so it boots from the saved startup config straight to the prompt.

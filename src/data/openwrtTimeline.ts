import type { TimelineEntry } from "./homelabTimeline.ts";

export const openwrtTimeline: TimelineEntry[] = [
  {
    year: "2025",
    title: "The spark",
    logo: "OpenWrt_Logo.svg",
    body: "During my Fixear internship, a coworker pointed out that OpenWrt was a cheaper, simpler path than standing up an OpnSense box from scratch — and the homeserver already needed something the ISP router simply couldn't give it: static DHCP leases. OpnSense was shelved (it still is), and the OpenWrt rabbit hole began.",
  },
  {
    year: "2025",
    title: "Rescued hardware",
    body: "The most open-source, low-budget route was used, working hardware. A 2017 TP-Link Archer C59 v1: a Qualcomm Atheros QCA9561 (MIPS) with 16 MiB of flash and 128 MiB of RAM. Modest by any measure — and exactly the kind of constraint that made it a great teacher for what a lean Linux kernel can really do.",
    image: "archer-c59-v1.png",
    caption: "The TP-Link Archer C59 v1 — a 2017 budget router turned OpenWrt lab.",
  },
  {
    year: "2025",
    title: "Taking back the network",
    logo: "router.svg",
    body: "Static DHCP leases by MAC came first — the whole reason this started. The ISP router was dropped into bridge mode and demoted to a plain access point, while OpenWrt took over routing with internal firewall rules for SYN-flood protection and LAN segmentation. For the first time the network answered to me, not the carrier's box.",
  },
  {
    year: "2025",
    title: "Breaking the 16 MiB wall",
    body: "16 MiB of flash barely fits the OS. extroot relocates the root filesystem onto a standard USB stick, so packages and system parts live there instead — turning almost no space into ~16 GB of headroom. The trade-off is honest: the USB is written to constantly and wears over time.",
  },
  {
    year: "2025",
    title: "Segmenting with VLANs",
    body: "As the homelab grew past a single server, security demanded isolation — servers reachable only by the devices I choose, not everything on the LAN. Working at night (this is the router the whole family shares, so downtime was real), the homeserver moved into a dedicated VLAN. The payoff is asymmetric visibility: I can reach the server, but the server can't see back into the LAN — enforced with LAN→VLAN firewall rules — plus a much quieter wire, with far less broadcast noise.",
  },
  {
    year: "2025",
    title: "A cleaner, faster network",
    body: "Adblock Fast — a high-performance, router-level pi-hole — filters malicious and noisy domains for every device on the network. SQM with CAKE trades a sliver of raw throughput for fair queueing and near-zero bufferbloat, so latency stays enterprise-flat even under load. A WPA3-SAE (Dragonfly) experiment to defeat handshake capture was later rolled back — some devices weren't compatible, and the encryption overhead wasn't worth it on this silicon.",
  },
  {
    year: "2026",
    title: "Private DNS over HTTPS",
    logo: "dns.svg",
    body: "The router runs its own DNS on port 53, and a DNS-LOCK firewall rule forces every LAN→WAN query through it. Upstream resolution then happens over DNS-over-HTTPS, so the ISP can see which sites I visit but not the contents of the lookups.",
    bodyHtml: "The router runs its own DNS on port 53, and a DNS-LOCK firewall rule forces every LAN→WAN query through it. Upstream resolution then happens over <button type=\"button\" class=\"cf-link\" data-drawer-open=\"doh\" aria-haspopup=\"dialog\">DNS-over-HTTPS</button>, so the ISP can see which sites I visit but not the contents of the lookups.",
  },
  {
    year: "2026",
    title: "zram: the final squeeze",
    logo: "ram-memory.svg",
    body: "With DoH, SQM, Adblock and a growing homelab all fighting over a consumer MIPS CPU, memory got tight. A custom zram override adds compressed swap — written straight to sysfs, persisted through rc.local, with vm.swappiness tuned to 80 — buying enough headroom to stay semi-LTS and survive future updates.",
    bodyHtml: "With DoH, SQM, Adblock and a growing homelab all fighting over a consumer MIPS CPU, memory got tight. A custom zram override adds compressed swap — written straight to sysfs, persisted through rc.local, with vm.swappiness tuned to 80 — buying enough headroom to stay semi-LTS and survive future updates. <a class=\"tline-repo\" href=\"https://github.com/Lucacux/OpenWRT-ZRAM-OVERRIDE\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"gh-mark\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z\"/></svg>zram override on GitHub</a>",
  },
  {
    year: "2026",
    title: "An enterprise wannabe",
    body: "A sub-$30 router that looked destined for e-waste now runs static leases, VLAN isolation, adblock, DoH and SQM, all leaning on a genuinely capable firewall — hardened, community-maintained, and far less CVE-exposed than the ISP box it replaced. Secure by design, and proof that with enough time and stubbornness the real limits are the user's, not the hardware's.",
    filled: true,
  },
];

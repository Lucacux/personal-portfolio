export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
  bodyHtml?: string; // optional rich HTML body (e.g. with an inline dotted link)
  logo?: string;    // small tech logo shown under the title
  image?: string;   // filename in src/images, optional
  caption?: string; // italic caption under the image
  filled?: boolean; // solid marker (milestone) vs hollow
}

export const homelabTimeline: TimelineEntry[] = [
  {
    year: "2022",
    title: "The rescue",
    body: "Two machines headed for disposal — a sluggish, unpatched Windows 7 box and an old Windows XP machine — were cleaned, re-pasted, and restored to working condition. They started as a testbed for anything I didn't want to run on my main computer.",
  },
  {
    year: "2023",
    title: "First contact with Linux",
    logo: "peppermint-logo.svg",
    body: "Pressed into service as a daily driver, the Pentium E5400 (2 GB RAM, 500 GB HDD) ran Peppermint Linux. This was where the fundamentals clicked: the terminal, package repositories, and how distributions and flavors actually differ.",
  },
  {
    year: "2024",
    title: "From PC to NAS",
    logo: "samba-logo.svg",
    body: "The box was provisioned as a NAS running Ubuntu 24.04 LTS. Samba — configured from scratch over several late nights — delivered network file storage at speeds well beyond the internet connection, alongside a local Plex server. The first real, tangible understanding of how a private LAN behaves.",
    image: "pentium-server.png",
    caption: "The pentium host — a recovered Dell OptiPlex running Ubuntu Server.",
  },
  {
    year: "2024 — 2025",
    title: "Hitting the walls",
    logo: "OpenWrt_Logo.svg",
    body: "Two obstacles surfaced. A dynamic local IP meant an arp-scan or nmap sweep to find the server each time — which led to OpenWrt for static DHCP leases by MAC, and, in parallel, deep into network security: packet captures, WPA2/WPA3, and hash cracking. The larger wall was CGNAT, which made conventional port forwarding impossible.",
    bodyHtml: "Two obstacles surfaced. A dynamic local IP meant an arp-scan or nmap sweep to find the server each time — which led to OpenWrt for static DHCP leases by MAC, and, in parallel, deep into network security: packet captures, WPA2/WPA3, and hash cracking. The larger wall was <button type=\"button\" class=\"cf-link\" data-drawer-open=\"cgnat\" aria-haspopup=\"dialog\">CGNAT</button>, which made conventional port forwarding impossible.",
    image: "archer-c59-v1.png",
    caption: "The home network rack — the Archer C59 v1 running OpenWrt at its center.",
  },
  {
    year: "2025",
    title: "Maxing out the hardware",
    body: "By mid-2025 the pentium host was pushed to its ceiling: 4 GB of DDR3, the most the board would accept. A modest bump on paper, but enough headroom to run Samba, Plex, and the tunneling stack side by side on hardware that was never meant to be a server.",
  },
  {
    year: "2025",
    title: "Breaking through CGNAT",
    logo: "Cloudflare_Logo.svg",
    body: "Cloudflare Tunnel resolved the constraint. Reusing the domain bought for this portfolio, a subdomain was pointed at the server's SSH port, making the host reachable from the WAN despite CGNAT. It was then hardened: SSH moved off its default port, key-only authentication, passwords disabled.",
    bodyHtml: "<button type=\"button\" class=\"cf-link\" data-drawer-open=\"cf\" aria-haspopup=\"dialog\">Cloudflare Tunnel</button> resolved the constraint. Reusing the domain bought for this portfolio, a subdomain was pointed at the server's SSH port, making the host reachable from the WAN despite <button type=\"button\" class=\"cf-link\" data-drawer-open=\"cgnat\" aria-haspopup=\"dialog\">CGNAT</button>. It was then hardened: SSH moved off its default port, key-only authentication, passwords disabled.",
    filled: true,
  },
  {
    year: "2025",
    title: "The Debian dinosaur",
    logo: "debian-original.svg",
    body: "With the workflow established, the old XP machine was rebuilt on Debian Trixie — single core, 512 MB of RAM, a 20-year-old disk with roughly 1,000 hours of use. Hardened and tunneled, it became a personal cloud reachable only via SSH forwarding: proof that durable hardware and a lean, secure OS still hold up.",
    filled: true,
  },
  {
    year: "2026",
    title: "A self-hosted personal cloud",
    logo: "jellyfin-logo.svg",
    body: "Jellyfin, exposed on its own subdomain and paired with yt-dlp for a lossless FLAC music library, replaced a Spotify subscription. A 2011 MacBook Pro joined the fleet on Arch Linux — its SSD and 10 GB of RAM serving a PostgreSQL and Redis stack in Docker Compose for a collaborative database project.",
    image: "server-mbp.png",
    caption: "server-mbp — a 2011 MacBook Pro on Arch Linux, the high-agility node.",
    filled: true,
  },
];

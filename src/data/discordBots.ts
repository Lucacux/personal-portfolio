// Discord bots case study — one entry per bot, ordered by relevance (most important first).
// Descriptions are based on each repo's README (github.com/Lucacux).
// `repo` is the GitHub repository name under github.com/Lucacux — used for the "View on GitHub" link.

export interface DiscordBot {
  id: string;
  title: string;
  body: string;
  tags: string[];
  repo: string;   // repository name under github.com/Lucacux
  lang: string;   // predominant-language logo filename in src/images/
}

export const discordBots: DiscordBot[] = [
  {
    id: "thinky",
    title: "Thinky-AI — local-LLM assistant & report aggregator",
    body:
      "An AI assistant that runs entirely on local inference — no external API calls. It talks to a local llama.cpp server (OpenAI-compatible endpoint) with hot-swappable models: a fast one for quick replies and a heavier one for analysis. Beyond chat, it listens for messages from the other infrastructure bots and summarizes their logs into structured report threads.",
    tags: ["Python", "discord.py", "Ollama", "aiohttp"],
    repo: "Thinky-AI",
    lang: "python-original.svg",
  },
  {
    id: "centinela",
    title: "Centinela — server security watchdog",
    body:
      "A 24/7 watchdog that monitors and secures Linux servers across distros (Arch and Debian/Ubuntu). It watches SSH logins in real time, detects brute-force attempts within a configurable window, tracks systemd services and resource thresholds (swap, temperature), and rolls everything into a single security score. It also audits packages for known CVEs (arch-audit / debsecan) and renders status charts.",
    tags: ["Python", "discord.py", "systemd", "SSH", "psutil"],
    repo: "Centinela-Pentium",
    lang: "python-original.svg",
  },
  {
    id: "isp-uplink-guardian",
    title: "isp-uplink-guardian — self-healing internet watchdog",
    body:
      "A watchdog that reboots the fibre ONU automatically when the connection drops — and stays traceable even with no WAN. It probes connectivity with debounced TCP-connect checks, then drives the ONU's web panel with a headless browser (Playwright), solving the panel's client-side anti-bot by reading the IdentCode from the DOM. Cooldowns and per-window reboot limits stop it from making a real ISP outage worse, and a LAN dashboard plus a deferred Discord flush give a full post-mortem once the link is back.",
    tags: ["Python", "Playwright", "Docker", "Dokploy"],
    repo: "isp-uplink-guardian",
    lang: "python-original.svg",
  },
  {
    id: "updates-bot",
    title: "Updates-Bot — fleet updates via Ansible",
    body:
      "Whole-fleet OS updates orchestrated from Discord. It runs Ansible playbooks across the managed nodes and streams live progress into the Discord embed as the playbook executes, instead of only reporting at the end. Every run is saved to its own log for auditing, and it understands Ubuntu's phased rollouts so a not-yet-released package never looks like a failure.",
    tags: ["Python", "discord.py", "Ansible", "SSH"],
    repo: "Updates-Bot",
    lang: "python-original.svg",
  },
  {
    id: "wol-bot",
    title: "WOL-Bot — remote power management",
    body:
      "Remote power control for the homelab nodes. An interactive /wol panel wakes machines with Wake-on-LAN magic packets and checks their live online/offline status; /shutdown and /reboot run over SSH with a confirmation step and live progress. A /schedule sets daily wake and shutdown windows, and a failsafe watchdog re-sends WOL with backoff if a server is down during hours it should be online — recovering from crashes or power cuts on its own.",
    tags: ["Python", "discord.py", "Wake-on-LAN", "SSH"],
    repo: "WOL-Bot",
    lang: "python-original.svg",
  },
  {
    id: "media-bot",
    title: "Media-Bot — automated media pipeline",
    body:
      "An automated pipeline that feeds the Plex / Jellyfin library from a Discord command. It fetches and processes content with yt-dlp and ffmpeg, lays files out in the folder structure Plex expects, and fixes metadata and cover art so thumbnails render correctly. It runs as a systemd service bound to its storage mount (RequiresMountsFor), so it won't start against a missing external disk or mergerfs pool.",
    tags: ["Python", "discord.py", "yt-dlp", "FFmpeg", "Jellyfin"],
    repo: "Media-Bot",
    lang: "python-original.svg",
  },
  {
    id: "gameserver-bot",
    title: "GameServer-Bot — dedicated server control",
    body:
      "One-tap control for a Counter-Strike: Source dedicated server, without touching SSH directly. Slash commands (/status, /start, /stop, /restart, /logs) manage the server over an SSH connection to the node it runs on, gamedig queries live server status every couple of minutes, and robust PID detection avoids false 'running' reports when the process has actually died.",
    tags: ["Node.js", "discord.js", "gamedig", "SSH"],
    repo: "GameServer-Bot",
    lang: "nodejs-original.svg",
  },
];

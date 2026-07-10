export interface StackItem {
  abbr: string;
  name: string;
  caption: string;
  logo?: string;
  status?: "ongoing";
}

export interface StackGroup {
  group: string;
  items: StackItem[];
}

export const technologies: StackGroup[] = [
  {
    group: "Languages",
    items: [
      { abbr: "C", name: "C", caption: "Systems programming & memory management", logo: "c-hexagonal.png" },
      { abbr: "PY", name: "Python", caption: "Scripting, automation & tooling", logo: "python-original.svg" },
      { abbr: "C#", name: "C#", caption: "ASP.NET & .NET development", logo: "csharp-original.svg" },
      { abbr: "H5", name: "HTML5", caption: "Semantic markup & web structure", logo: "html5-original.svg" },
      { abbr: "CSS", name: "CSS", caption: "Styling, layout & responsive design", logo: "css3-original.svg" },
    ],
  },
  {
    group: "Infrastructure & Tools",
    items: [
      { abbr: "LX", name: "Linux", caption: "Primary OS across all environments", logo: "linux-original.svg" },
      { abbr: "SH", name: "Bash", caption: "Shell scripting & task automation", logo: "bash-original.svg" },
      { abbr: "CF", name: "Cloudflare", caption: "Tunnel, domain & WAF to expose services past CGNAT", logo: "Cloudflare_Logo.svg" },
      { abbr: "JS", name: "Node.js", caption: "Backend services & Discord bots", logo: "nodejs-original.svg" },
      { abbr: "PG", name: "PostgreSQL", caption: "Relational database management", logo: "postgresql-original.svg" },
      { abbr: "DK", name: "Docker", caption: "Container-based deployments", logo: "docker-original.svg" },
      { abbr: "DC", name: "Docker Compose", caption: "Multi-container orchestration via YAML", logo: "logo-docker-compose-text.svg" },
      { abbr: "DP", name: "Dokploy", caption: "Self-hosted PaaS for container deployments", logo: "dokploy.svg" },
      { abbr: "GI", name: "Git", caption: "Version control & collaboration", logo: "git-original.svg" },
      { abbr: "GH", name: "GitHub", caption: "Repository hosting & CI/CD", logo: "github-original.svg" },
      { abbr: "AN", name: "Ansible", caption: "Configuration management & IaC", logo: "ansible-original.svg" },
      { abbr: "PM", name: "Proxmox", caption: "Hypervisor & VM management", logo: "Logo_Proxmox.svg" },
      { abbr: "OW", name: "OpenWrt", caption: "Custom network routing", logo: "OpenWrt_Logo.svg" },
      { abbr: "VPN", name: "OpenVPN", caption: "Secure remote access & encrypted tunneling", logo: "openvpn-icon.svg" },
      { abbr: "AD", name: "Active Directory", caption: "Identity & access provisioning at EY", logo: "active-directory.svg" },
      { abbr: "SN", name: "ServiceNow", caption: "ITSM at EY", logo: "ServiceNow_logo.svg" },
      { abbr: "WZ", name: "Wazuh", caption: "SIEM & security monitoring", logo: "wazuh.svg" },
    ],
  },
  {
    group: "Currently learning",
    items: [
      {
        abbr: "AWS",
        name: "AWS Cloud",
        caption: "Cloud infrastructure fundamentals",
        logo: "aws-original.svg",
        status: "ongoing",
      },
    ],
  },
];

export const dailyDrivers: StackItem[] = [
  { abbr: "AR", name: "Arch Linux", caption: "ThinkPad T480", logo: "archlinux-original.svg" },
  { abbr: "KL", name: "Kali Linux", caption: "ThinkPad T14 Gen 1", logo: "kalilinux-original.svg" },
  { abbr: "VS", name: "Visual Studio", caption: "C# / .NET development", logo: "visualstudio-plain.svg" },
  { abbr: "VSC", name: "VS Code", caption: "Primary code editor", logo: "vscode-original.svg" },
  { abbr: "NA", name: "nano", caption: "Quick remote edits via SSH", logo: "nano-original.svg" },
];

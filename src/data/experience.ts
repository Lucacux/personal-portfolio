export interface ExperienceSkill {
  label: string;
  logo: string;
}

export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  description: string;
  logo?: string;
  skills?: ExperienceSkill[];
}

export const experience: ExperienceEntry[] = [
  {
    date: "Jan 2026 — Present",
    role: "IAM Provisioning Associate",
    company: "EY GDS",
    description:
      "Identity & Access Management provisioning within EY's Global Delivery Services — Active Directory group administration.",
    logo: "ey-2025.svg",
    skills: [
      { label: "AD", logo: "active-directory.svg" },
      { label: "ServiceNow", logo: "ServiceNow_logo.svg" },
    ],
  },
  {
    date: "Jul — Sep 2025 · 3 mos",
    role: "Jr. Cybersecurity Analyst — Internship",
    company: "Fixear Cybersecurity",
    description:
      "Security monitoring, alert triage, and incident detection using SIEM tooling, including log review and security infrastructure maintenance. Supported Linux system hardening and secure service configuration, alongside technical documentation — with a focus on defensive security, networking, and automation.",
    logo: "fixear.svg",
    skills: [
      { label: "Wazuh", logo: "Wazuh-Logo-2022.png" },
      { label: "Proxmox", logo: "Logo_Proxmox.svg" },
      { label: "OpenVPN", logo: "openvpn-icon.svg" },
    ],
  },
];

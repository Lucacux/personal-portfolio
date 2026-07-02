export interface Certification {
  name: string;
  issuer: string;
  issuerAbbr: string;
  logo?: string;
  link?: string;
}

export interface CertCategory {
  category: string;
  items: Certification[];
}

export const certifications: CertCategory[] = [
  {
    category: "Security & GRC",
    items: [
      {
        name: "Intro to IoT Pentesting",
        issuer: "Packt",
        issuerAbbr: "PK",
        logo: "packt-logo.svg",
        link: "https://www.coursera.org/account/accomplishments/verify/DWFWY0W7D1MW",
      },
      {
        name: "Information Security for New Joiners",
        issuer: "EY",
        issuerAbbr: "EY",
        logo: "ey-2025.svg",
      },
      {
        name: "Data Protection Fundamentals",
        issuer: "EY",
        issuerAbbr: "EY",
        logo: "ey-2025.svg",
      },
      { name: "Cybersecurity Habits Masterclass", issuer: "Udemy", issuerAbbr: "UD", logo: "udemy-original.svg" },
      { name: "ISO 27001 Information Security Mgmt.", issuer: "Udemy", issuerAbbr: "UD", logo: "udemy-original.svg" },
      {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        issuerAbbr: "CI",
        logo: "credly-intro-cybersecurity.png",
        link: "https://www.credly.com/badges/e8d402c3-78e4-4630-a221-e69b73315c2e/public_url",
      },
      {
        name: "Pre Security Certificate",
        issuer: "TryHackMe",
        issuerAbbr: "TH",
        logo: "fi-snsuxx-tryhackme.png",
        link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-DQN3A5A7VF.pdf",
      },
    ],
  },
  {
    category: "Networking & Systems",
    items: [
      {
        name: "Networking Basics",
        issuer: "Cisco",
        issuerAbbr: "CI",
        logo: "credly-networking-basics.png",
        link: "https://www.credly.com/badges/cd1f7414-b73e-43ca-89a2-d4d9ba4494c0/public_url",
      },
      {
        name: "Computer Hardware Basics",
        issuer: "Cisco",
        issuerAbbr: "CI",
        logo: "credly-computer-hardware.png",
        link: "https://www.credly.com/badges/ade6cecb-cc33-41c7-ba28-bc6d4815118e/public_url",
      },
      {
        name: "Linux Unhatched",
        issuer: "Cisco",
        issuerAbbr: "CI",
        logo: "credly-linux-unhatched.png",
        link: "https://www.credly.com/badges/de5be2c0-201a-4ab1-a05b-1092a1e6c9fe/public_url",
      },
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      { name: "From Generative AI to Agentic AI", issuer: "EY", issuerAbbr: "EY", logo: "ey-2025.svg" },
      { name: "AI for Consulting: The Jagged Frontier", issuer: "EY", issuerAbbr: "EY", logo: "ey-2025.svg" },
      { name: "AI Now 2.0 — Module 1", issuer: "EY", issuerAbbr: "EY", logo: "ey-2025.svg" },
      { name: "AI Now 2.0 — Module 2", issuer: "EY", issuerAbbr: "EY", logo: "ey-2025.svg" },
    ],
  },
  {
    category: "Programming",
    items: [
      {
        name: "Python Essentials I",
        issuer: "Cisco",
        issuerAbbr: "CI",
        logo: "credly-python-essentials.png",
        link: "https://www.credly.com/badges/e7938f09-c3e6-4954-a4a8-c72a909364d0/public_url",
      },
    ],
  },
];

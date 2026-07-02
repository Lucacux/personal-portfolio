export interface Badge {
  name: string;
  issuer: string;
  logo: string;       // the EY/issuer logo
  image: string;      // the actual badge image
  link: string;
}

export const badges: Badge[] = [
  {
    name: "Information Security Awareness — Bronze Learning (2026)",
    issuer: "EY",
    logo: "ey-2025.svg",
    image: "badge.png",
    link: "https://www.credly.com/badges/a40c58e8-068b-4d47-9043-a1486863bcbc",
  },
];

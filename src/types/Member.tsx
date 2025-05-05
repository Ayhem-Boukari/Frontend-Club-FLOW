export interface Member {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  image: string;
  club: "CME" | "IEEE" | "Mlekart" | "Microsoft" | "CPC";
  role: "Président" | "Vice-Président" | "Secrétaire Général" | "Trésorier";
  birthDate: string;
  address: string;
  link: string;
}
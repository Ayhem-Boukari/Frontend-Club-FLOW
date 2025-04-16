export interface Member {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  image: string;
  club: "CME" | "IEEE" | "Mlekart" | "Microsoft";
  role: "Président" | "Vice-Président" | "Secrétaire Général" | "Trésorier" | "Membre";
  birthDate: string;
  address: string;
  link: string;
}
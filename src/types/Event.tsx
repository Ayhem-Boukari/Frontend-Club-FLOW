export interface Event {
  _id: string;
  title: string;
  description: string;
  type:
    | "Réunion"
    | "Assemblée Générale"
    | "Réunion Générale"
    | "Team Building"
    | "Formation"
    | "Workshop"
    | "Autre";
  club?:  "IEEE" | "MELKART" | "CME" | "MICROSOFT" | "CPC";
  date: string;
  time: string;
  location: string;
}

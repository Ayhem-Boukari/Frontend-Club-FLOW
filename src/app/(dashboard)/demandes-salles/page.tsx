// src/app/demandes-salles/page.tsx
import { Metadata } from "next";
import { RoomReservationCard, DemandeSalle } from "./_components/RoomReservationCard";

export const metadata: Metadata = {
  title: "Demandes de salles",
  description: "Liste de vos réservations de salles",
};

const reservations: DemandeSalle[] = [
  {
    id: 1,
    demandeur: "Club Informatique",
    salle: "B101",
    batiment: "Principal",
    date: "2023-11-15",
    heure: "14:00",
    duree: 120,
    objectif: "Réunion du club informatique",
    statut: "Confirmée",
  },
  {
    id: 2,
    demandeur: "Club Dev",
    salle: "A202",
    batiment: "Annexe",
    date: "2023-11-16",
    heure: "10:00",
    duree: 90,
    objectif: "Atelier de programmation",
    statut: "En attente",
  },
  {
    id: 3,
    demandeur: "Club Robotique",
    salle: "B205",
    batiment: "Principal",
    date: "2023-11-17",
    heure: "09:00",
    duree: 180,
    objectif: "Préparation compétition",
    statut: "Rejetée",
    motifRejet: "Salle déjà réservée à cette heure",
  },
];

export default function DemandesSallesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Titre dans le même conteneur que les cartes */}
        <header>
          <h1 className="text-4xl font-bold text-primary">📋 Vos réservations de salles</h1>
          <p className="text-gray-600 mt-1">
            Retrouvez ici toutes vos demandes de réservation de salle.
          </p>
        </header>

        {/* Cartes de réservation */}
        <RoomReservationCard demandes={reservations} />
      </div>
    </div>
  );
}

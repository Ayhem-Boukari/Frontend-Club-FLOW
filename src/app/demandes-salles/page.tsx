// src/app/demandes-salles/page.tsx
import { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import { RoomReservationCard } from './_components/RoomReservationCard';

export const metadata: Metadata = {
  title: "Demandes de salles",
  description: "Liste de vos réservations de salles",
};

// Données mockées - à remplacer par votre appel API
const reservations = [
  {
    id: '1',
    roomNumber: 'B101',
    building: 'Principal',
    date: '2023-11-15',
    startTime: '14:00',
    endTime: '16:00',
    purpose: 'Réunion du club informatique',
    status: 'confirmed'
  },
  {
    id: '2',
    roomNumber: 'A202',
    building: 'Annexe',
    date: '2023-11-16',
    startTime: '10:00',
    endTime: '11:30',
    purpose: 'Atelier de programmation',
    status: 'pending'
  },
  {
    id: '3',
    roomNumber: 'B205',
    building: 'Principal',
    date: '2023-11-17',
    startTime: '09:00',
    endTime: '12:00',
    purpose: 'Préparation compétition',
    status: 'rejected'
  }
];

export default function DemandesSallesPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Vos réservations de salles</h1>
          <p className="text-gray-600 mt-2">
            Liste de toutes vos demandes de réservation de salles
          </p>
        </div>
        
        <div className="space-y-4">
          {reservations.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Vous n'avez aucune réservation pour le moment</p>
            </div>
          ) : (
            reservations.map(reservation => (
              <RoomReservationCard 
                key={reservation.id}
                reservation={reservation}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
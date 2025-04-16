// src/app/demandes-salles/_components/RoomReservationCard.tsx
'use client';
import { Calendar, Clock, Building, AlertCircle } from 'lucide-react';

type Reservation = {
  id: string;
  roomNumber: string;
  building: 'Principal' | 'Annexe';
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  status: 'confirmed' | 'pending' | 'rejected';
};

export function RoomReservationCard({ reservation }: { reservation: Reservation }) {
  // Fonction pour obtenir la couleur en fonction du statut
  const getStatusColor = () => {
    switch (reservation.status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Fonction pour formater la date en français
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className={`border rounded-lg p-4 mb-4 ${getStatusColor()}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Building className="h-5 w-5" />
            Salle {reservation.roomNumber} - Bâtiment {reservation.building}
          </h3>
          
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(reservation.date)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>{reservation.startTime} - {reservation.endTime}</span>
          </div>
          
          <div className="mt-2">
            <p className="text-sm font-medium">Motif :</p>
            <p className="text-sm">{reservation.purpose}</p>
          </div>
        </div>
        
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {reservation.status === 'confirmed' && 'Confirmée'}
          {reservation.status === 'pending' && 'En attente'}
          {reservation.status === 'rejected' && 'Rejetée'}
        </span>
      </div>
      
      {reservation.status === 'rejected' && (
        <div className="mt-3 flex items-start gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <p>Votre demande a été refusée. Veuillez contacter l'administration.</p>
        </div>
      )}
    </div>
  );
}
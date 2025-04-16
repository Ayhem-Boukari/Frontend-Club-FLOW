'use client';

import { Bus } from 'lucide-react';
import { DemandesBusTable } from './_components/DemandesBusTable';

// Fake data pour les demandes de bus
const fakeDemandesBus = [
  {
    id: 1,
    demandeur: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    destination: 'Paris',
    dateDepart: '15/12/2023',
    dateRetour: '17/12/2023',
    passagers: 25,
    statut: 'En attente',
    dateDemande: '20/11/2023'
  },
  {
    id: 2,
    demandeur: 'Marie Martin',
    email: 'marie.martin@email.com',
    destination: 'Lyon',
    dateDepart: '18/12/2023',
    dateRetour: '20/12/2023',
    passagers: 40,
    statut: 'Confirmée',
    dateDemande: '15/11/2023'
  },
  {
    id: 3,
    demandeur: 'Pierre Lambert',
    email: 'pierre.lambert@email.com',
    destination: 'Marseille',
    dateDepart: '22/12/2023',
    dateRetour: '25/12/2023',
    passagers: 30,
    statut: 'Rejetée',
    dateDemande: '10/11/2023',
    motifRejet: 'Capacité insuffisante'
  },
  {
    id: 4,
    demandeur: 'Sophie Dubois',
    email: 'sophie.dubois@email.com',
    destination: 'Bordeaux',
    dateDepart: '05/01/2024',
    dateRetour: '07/01/2024',
    passagers: 20,
    statut: 'En attente',
    dateDemande: '25/11/2023'
  },
];

export default function DemandesBusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Bus className="h-8 w-8 mr-2 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Demandes de Bus</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <DemandesBusTable demandes={fakeDemandesBus} />
      </div>
    </div>
  );
}
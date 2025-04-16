'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Mail, User, MapPin, CalendarDays, Users, Info } from 'lucide-react';

interface DemandeBus {
  id: number;
  demandeur: string;
  email: string;
  destination: string;
  dateDepart: string;
  dateRetour: string;
  passagers: number;
  statut: 'En attente' | 'Confirmée' | 'Rejetée';
  dateDemande: string;
  motifRejet?: string;
}

export function DemandesBusTable({ demandes }: { demandes: DemandeBus[] }) {
  const [demandesList, setDemandesList] = useState(demandes);
  const [selectedStatus, setSelectedStatus] = useState<string>('Tous');

  const handleStatusChange = (id: number, newStatus: 'Confirmée' | 'Rejetée') => {
    setDemandesList(prev => 
      prev.map(demande => 
        demande.id === id ? { ...demande, statut: newStatus } : demande
      )
    );
  };

  const filteredDemandes = selectedStatus === 'Tous' 
    ? demandesList 
    : demandesList.filter(d => d.statut === selectedStatus);

  const statusOptions = ['Tous', 'En attente', 'Confirmée', 'Rejetée'];

  return (
    <div className="p-4">
      {/* Filtres par statut */}
      <div className="flex flex-wrap gap-2 mb-6">
        {statusOptions.map(status => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
              selectedStatus === status 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status === 'En attente' && <Clock className="mr-2 h-4 w-4" />}
            {status === 'Confirmée' && <CheckCircle2 className="mr-2 h-4 w-4" />}
            {status === 'Rejetée' && <XCircle className="mr-2 h-4 w-4" />}
            {status}
          </button>
        ))}
      </div>

      {/* Tableau des demandes */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demandeur</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDemandes.map((demande) => (
              <tr key={demande.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="font-medium text-gray-900">{demande.demandeur}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Mail className="h-4 w-4 mr-1" /> {demande.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{demande.destination}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p>Départ: {demande.dateDepart}</p>
                      <p>Retour: {demande.dateRetour}</p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center">
                        <Users className="h-4 w-4 mr-1" /> {demande.passagers} passagers
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    demande.statut === 'Confirmée' ? 'bg-green-100 text-green-800' :
                    demande.statut === 'Rejetée' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {demande.statut === 'En attente' && <Clock className="mr-1 h-4 w-4" />}
                    {demande.statut === 'Confirmée' && <CheckCircle2 className="mr-1 h-4 w-4" />}
                    {demande.statut === 'Rejetée' && <XCircle className="mr-1 h-4 w-4" />}
                    {demande.statut}
                  </span>
                  {demande.statut === 'Rejetée' && demande.motifRejet && (
                    <p className="text-xs text-red-500 mt-1 flex items-start">
                      <Info className="h-3 w-3 mr-1 mt-0.5" /> Motif: {demande.motifRejet}
                    </p>
                  )}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {demande.statut === 'En attente' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(demande.id, 'Confirmée')}
                        className="text-green-600 hover:text-green-800 flex items-center"
                      >
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Confirmer
                      </button>
                      <button
                        onClick={() => handleStatusChange(demande.id, 'Rejetée')}
                        className="text-red-600 hover:text-red-800 flex items-center"
                      >
                        <XCircle className="mr-1 h-4 w-4" /> Rejeter
                      </button>
                    </div>
                  )}
                  {demande.statut !== 'En attente' && (
                    <span className="text-gray-400">Action terminée</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
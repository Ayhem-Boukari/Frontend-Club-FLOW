"use client"

import { motion } from "framer-motion"

const fakeRequests = [
  {
    id: 1,
    club: "Club Robotique",
    nom: "🎥 Vidéo projecteur",
    quantite: 2,
    date: "2025-05-10",
    raison: "Présentation annuelle",
    statut: "En attente"
  },
  {
    id: 2,
    club: "Club Média",
    nom: "🎤 Micros sans fil",
    quantite: 3,
    date: "2025-05-12",
    raison: "Conférence nationale",
    statut: "En attente"
  }
]

export default function MaterielRequestList() {
  const handleAction = (id: number, action: "accepter" | "refuser") => {
    console.log(`Demande ${id} ${action}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary">
          📋 Demandes de Matériel
        </h2>

        <div className="space-y-6">
          {fakeRequests.map((req) => (
            <motion.div
              key={req.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="space-y-1 text-[15px]">
                  <h3 className="text-lg font-semibold text-gray-800">
                    🏷️ {req.nom} ({req.quantite}x)
                  </h3>
                  <p className="text-gray-500">🏫 <strong>Club :</strong> {req.club}</p>
                  <p className="text-gray-500">📆 <strong>Date :</strong> {req.date}</p>
                  <p className="text-gray-600">📝 <strong>Raison :</strong> {req.raison}</p>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-300">
                    ⏳ {req.statut}
                  </span>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAction(req.id, "accepter")}
                    className="px-4 py-1.5 text-sm bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition shadow"
                  >
                    ✅ Accepter
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAction(req.id, "refuser")}
                    className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition shadow"
                  >
                    ❌ Refuser
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

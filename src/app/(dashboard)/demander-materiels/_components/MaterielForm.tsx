"use client"

import { useState } from "react"

export default function MaterielForm() {
  const [club, setClub] = useState("")
  const [nom, setNom] = useState("")
  const [quantite, setQuantite] = useState(1)
  const [date, setDate] = useState("")
  const [raison, setRaison] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ club, nom, quantite, date, raison })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-2xl space-y-6 border border-gray-200"
      >
        <h2 className="text-4xl font-bold text-primary">
          🛠️ Demande de Matériel
        </h2>

        {/* Club */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">Nom du club</label>
          <input
            type="text"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            placeholder="Ex : Club Robotique"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Nom du matériel */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">Nom du matériel</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Ex : Vidéoprojecteur"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Quantité */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">Quantité</label>
          <input
            type="number"
            min={1}
            value={quantite}
            onChange={(e) => setQuantite(parseInt(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">Date souhaitée</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Raison */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-2">Raison / Justification</label>
          <textarea
            value={raison}
            onChange={(e) => setRaison(e.target.value)}
            placeholder="Pourquoi ce matériel est-il nécessaire ?"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
            required
          />
        </div>

        {/* Bouton */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            📤 Envoyer la demande
          </button>
        </div>
      </form>
    </div>
  )
}

"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export function ReclamationForm() {
  const [club, setClub] = useState("");
  const [objet, setObjet] = useState("Salle");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ club, objet, message, date });
    toast.success("✅ Réclamation envoyée avec succès !");
    setClub("");
    setObjet("Salle");
    setMessage("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-xl space-y-6 animate-fadeIn"
    >
      {/* Champ club */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Nom du club *</label>
        <input
          type="text"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          placeholder="Ex : Club Informatique"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Champ objet */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Objet de la réclamation *</label>
        <select
          value={objet}
          onChange={(e) => setObjet(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="Salle">Salle</option>
          <option value="Matériel">Matériel</option>
          <option value="Bus">Bus</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Champ message */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Décrivez votre problème ou remarque ici..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>
      </div>

      {/* Champ date */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Date *</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Bouton soumettre */}
      <div className="text-center pt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Envoyer la réclamation
        </button>
      </div>
    </form>
  );
}

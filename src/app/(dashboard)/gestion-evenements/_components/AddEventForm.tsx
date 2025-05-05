"use client";
import { Event } from "@/types/Event";
import React, { useState } from "react";

const AddEventForm: React.FC = () => {
  const [formData, setFormData] = useState<Event>({
    _id: Date.now().toString(),
    title: "",
    description: "",
    type: "Réunion",
    club: undefined,
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      ["Réunion", "Formation", "Workshop"].includes(formData.type) &&
      !formData.club
    ) {
      alert("Veuillez sélectionner un club pour ce type d'évènement.");
      return;
    }

    console.log("Event Submitted:", formData);

    setFormData({
      _id: Date.now().toString(),
      title: "",
      description: "",
      type: "Réunion",
      club: undefined,
      date: "",
      time: "",
      location: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Titre
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez le titre de l'évènement"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez une description de l'évènement"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="type">
          Type d&apos;Évènement
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="Réunion">Réunion</option>
          <option value="Formation">Formation</option>
          <option value="Workshop">Workshop</option>
          <option value="Assemblée Générale">Assemblée Générale</option>
          <option value="Réunion Générale">Réunion Générale</option>
          <option value="Team Building">Team Building</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      {/* Conditionally Render Club Field */}
      {["Réunion", "Formation", "Workshop"].includes(formData.type) && (
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="club">
            Club
          </label>
          <select
            id="club"
            name="club"
            value={formData.club}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Sélectionnez un club</option>
            <option value="IEEE">IEEE</option>
            <option value="MELKART">MELKART</option>
            <option value="CME">CME</option>
            <option value="MICROSOFT">MICROSOFT</option>
            <option value="CPC">CPC</option>
          </select>
        </div>
      )}
      <div className="flex flex-row gap-4 w-full">
        <div className="w-full">
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mb-1" htmlFor="time">
            Horaire
          </label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="location">
          Lieu
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez le lieu de l'évènement"
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;

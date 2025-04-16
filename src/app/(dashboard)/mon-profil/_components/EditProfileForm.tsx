"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { user } from "@/dump";

export default function EditProfileForm() {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address,
    birthDate: user.birthDate,
    image: user.image,
    club: user.club,
    role: user.role,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profil Modifié !");
    console.log("Updated Profile Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      {/* Prénom */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="firstName">
          Prénom
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre prénom"
          required
        />
      </div>

      {/* Nom */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="lastName">
          Nom
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre nom"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre email"
          required
        />
      </div>

      {/* Téléphone */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
          Numéro de Téléphone
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre numéro de téléphone"
          required
        />
      </div>

      {/* Adresse */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="address">
          Adresse
        </label>
        <input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre adresse"
          required
        />
      </div>

      {/* Date de naissance */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="birthDate">
          Date de Naissance
        </label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      {/* Club */}
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
          <option value="CME">CME</option>
          <option value="IEEE">IEEE</option>
          <option value="Mlekart">Mlekart</option>
          <option value="Microsoft">Microsoft</option>
        </select>
      </div>

      {/* Rôle */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="role">
          Rôle
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="Président">Président</option>
          <option value="Vice-Président">Vice-Président</option>
          <option value="Secrétaire Général">Secrétaire Général</option>
          <option value="Trésorier">Trésorier</option>
          <option value="Membre">Membre</option>
        </select>
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="image">
          Image de Profil (URL)
        </label>
        <input
          id="image"
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez l'URL de l'image de profil"
        />
      </div>

      {/* Bouton */}
      <div className="flex justify-end gap-4 col-span-2">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}

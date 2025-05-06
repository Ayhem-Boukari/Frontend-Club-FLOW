/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Member } from "@/types/Member";
import { X } from "lucide-react";

interface AddMemberPopupProps {
  onClose: () => void;
  onSave: (newMember: Member) => void;
}

const AddMemberPopup: React.FC<AddMemberPopupProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState<Member & { password: string; confirmPassword: string }>({
    _id: Date.now().toString(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
    club: "CME",
    role: "Membre",
    birthDate: "",
    address: "",
    link: "",
    password: "",
    confirmPassword: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file.name }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    const { password, confirmPassword, ...memberData } = formData;
    onSave(memberData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Ajouter un Membre</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">Prénom</label>
            <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Nom</label>
            <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Numéro de téléphone</label>
            <input id="phoneNumber" name="phoneNumber" type="text" value={formData.phoneNumber} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="birthDate">Date de naissance</label>
            <input id="birthDate" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="address">Adresse</label>
            <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="link">Lien</label>
            <input id="link" name="link" type="url" value={formData.link} onChange={handleChange} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="club">Club</label>
            <select id="club" name="club" value={formData.club} onChange={handleChange} className="w-full border rounded p-2" required>
              <option value="CME">CME</option>
              <option value="IEEE">IEEE</option>
              <option value="Mlekart">Mlekart</option>
              <option value="Microsoft">Microsoft</option>
              <option value="CPC">CPC</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="role">Rôle</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full border rounded p-2" required>
              <option value="Président">Président</option>
              <option value="Vice-Président">Vice-Président</option>
              <option value="Secrétaire Général">Secrétaire Général</option>
              <option value="Trésorier">Trésorier</option>
              <option value="Membre">Membre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirmer mot de passe</label>
            <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">Photo de profil</label>
            <input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
            {imagePreview && <img src={imagePreview} alt="Aperçu de la photo" className="mt-2 w-24 h-24 object-cover rounded-full" />}
          </div>
          <div className="flex justify-end gap-2 col-span-2">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Annuler</button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberPopup;
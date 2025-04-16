"use client";

import { WorkshopRequest } from "@/types/WorkshopRequest";
import React, { useState } from "react";

const WorkshopRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<WorkshopRequest>({
    _id: "",
    title: "",
    member: "",
    reason: "",
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

    console.log("RequestWorkshop Submitted:", formData);

    setFormData({
      _id: "",
      title: "",
      member: "",
      reason: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Nom de la formation
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Saisir le nom de la formation"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="reason">
          Raison
        </label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Pourquoi souhaitez-vous suivre cette formation ?"
          rows={2}
          required
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default WorkshopRequestForm;

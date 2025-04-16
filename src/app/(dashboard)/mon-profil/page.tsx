/* eslint-disable @next/next/no-img-element */

import { user } from "@/dump";
import React from "react";
import { Metadata } from "next";
import ProfileCard from "./_components/ProfileCard";
import EditProfileForm from "./_components/EditProfileForm";

export const metadata: Metadata = {
  title: "Melkart JE | Mon Profil",
  description:
    "Affichez et modifiez vos informations personnelles sur le tableau de bord Melkart Junior Entreprise.",
};

const ProfilePage: React.FC = () => {
  return (
    <main className="flex flex-col justify-start items-start sm:p-8 gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">Mon profil</h1>
        <p className="text-grey">
          Bienvenue sur votre profil, vous pouvez mettre à jour vos informations
          personnelles ici.
        </p>
      </div>
      <ProfileCard user={user} />

      <div className="w-full space-y-4">
        <h1 className="text-2xl font-bold text-primary">
          Modifier Mes Informations
        </h1>
        <EditProfileForm />
      </div>
    </main>
  );
};

export default ProfilePage;

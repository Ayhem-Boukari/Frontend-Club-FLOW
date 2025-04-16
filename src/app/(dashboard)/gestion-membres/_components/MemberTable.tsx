/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Member } from "@/types/Member";
import { membersList } from "@/dump";
import { Pencil, Trash2, PlusCircle, Eye } from "lucide-react";
import MemberDetailsPopup from "./MemberDetailsPopup";
import EditMemberPopup from "./EditMemberPopup";
import DeleteMemberPopup from "./DeleteMemberPopup";
import AddMemberPopup from "./AddMemberPopup";

const MemberTable: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(membersList);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(membersList);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [deleteMember, setDeleteMember] = useState<Member | null>(null);
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);

  // Handle Search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowerCaseQuery = query.toLowerCase();
    setFilteredMembers(
      members.filter(
        (member) =>
          member.firstName.toLowerCase().includes(lowerCaseQuery) ||
          member.lastName.toLowerCase().includes(lowerCaseQuery) ||
          member.email.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  // Add Member Handler
  const handleAddMember = (newMember: Member) => {
    setMembers((prev) => [...prev, newMember]);
    setFilteredMembers((prev) => [...prev, newMember]);
    setShowAddMemberPopup(false);
  };

  const handleSaveEdit = (updatedMember: Member) => {
    setMembers((prev) =>
      prev.map((member) =>
        member._id === updatedMember._id ? updatedMember : member
      )
    );
    setFilteredMembers((prev) =>
      prev.map((member) =>
        member._id === updatedMember._id ? updatedMember : member
      )
    );
  };

  const handleDeleteConfirm = () => {
    if (deleteMember) {
      setMembers((prev) =>
        prev.filter((member) => member._id !== deleteMember._id)
      );
      setFilteredMembers((prev) =>
        prev.filter((member) => member._id !== deleteMember._id)
      );
      setDeleteMember(null);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Rechercher un membre..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-1/2"
        />

        {/* Add Member Button */}
        <button
          onClick={() => setShowAddMemberPopup(true)}
          className="flex  items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300"
        >
          <PlusCircle size={18} />
          Ajouter un Membre
        </button>
      </div>

      {/* Members Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-grey/5">
              <th></th>
              <th className="px-4 py-2 whitespace-nowrap text-start">
                Nom Complet
              </th>
              <th className="px-4 py-2 whitespace-nowrap text-start">Email</th>
              <th className="px-4 py-2 whitespace-nowrap text-start">Club</th>
              <th className="px-4 py-2 whitespace-nowrap text-start">
                Rôle
              </th>
              <th className="px-4 py-2 whitespace-nowrap text-start">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr
                key={member._id}
                className="hover:bg-grey/5 border-b last:border-0"
              >
                <td className="py-2">
                  <img
                    src={member.image}
                    alt="Profile"
                    className="h-12 w-12 rounded-full"
                  />
                </td>
                <td className="px-4 py-2 truncate">
                  {member.firstName} {member.lastName}
                </td>
                <td className="px-4 py-2 truncate">{member.email}</td>
                <td className="px-4 py-2 truncate">{member.club}</td>
                <td className="px-4 py-2 truncate">{member.role}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2 items-center justify-center h-full">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="flex items-center justify-center p-2 bg-green-400 hover:bg-green-500 rounded-lg text-green-900"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => setEditMember(member)}
                      className="flex items-center justify-center p-2 bg-yellow-300 hover:bg-yellow-400 rounded-lg text-yellow-900"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => setDeleteMember(member)}
                      className="flex items-center justify-center p-2 bg-red-400 hover:bg-red-500 rounded-lg text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render Popups */}
      {selectedMember && (
        <MemberDetailsPopup
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {editMember && (
        <EditMemberPopup
          member={editMember}
          onClose={() => setEditMember(null)}
          onSave={handleSaveEdit}
        />
      )}

      {deleteMember && (
        <DeleteMemberPopup
          member={deleteMember}
          onClose={() => setDeleteMember(null)}
          onDelete={handleDeleteConfirm}
        />
      )}

      {showAddMemberPopup && (
        <AddMemberPopup
          onClose={() => setShowAddMemberPopup(false)}
          onSave={handleAddMember}
        />
      )}
    </>
  );
};

export default MemberTable;

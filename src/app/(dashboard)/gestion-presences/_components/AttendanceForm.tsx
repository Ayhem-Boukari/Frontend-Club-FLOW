/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useMemo } from "react";
import Select, { MultiValue } from "react-select";
import toast from "react-hot-toast";
import { Member } from "@/types/Member";
import { Event } from "@/types/Event";
import { PresenceList } from "@/types/PresenceList";

type AttendanceStatus = "Present" | "Absent" | "Justified Absent";

interface AttendanceFormProps {
  members: Member[];
  events: Event[];
}

export default function AttendanceForm({
  members,
  events,
}: AttendanceFormProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [attendance, setAttendance] = useState<{
    [key: string]: AttendanceStatus;
  }>({});
  const [additionalMembers, setAdditionalMembers] = useState<string[]>([]);
  const [selectedAdditionalMembers, setSelectedAdditionalMembers] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);

  const handleAttendanceChange = (
    memberId: string,
    status: AttendanceStatus
  ) => {
    setAttendance((prev) => ({ ...prev, [memberId]: status }));
  };

  const handleEventChange = (eventId: string) => {
    setSelectedEvent(eventId);
    setAttendance({});
    setAdditionalMembers([]);
    setSelectedAdditionalMembers([]);
  };

  const handleAddAdditionalMembers = (
    selected: MultiValue<{ value: string; label: string }>
  ) => {
    const newMemberIds = selected.map((option) => option.value);
    const uniqueNewMembers = newMemberIds.filter(
      (id) => !additionalMembers.includes(id)
    );

    uniqueNewMembers.forEach((memberId) => {
      setAttendance((prev) => ({ ...prev, [memberId]: "Present" }));
    });

    setAdditionalMembers((prev) => [...prev, ...uniqueNewMembers]);
    setSelectedAdditionalMembers(selected);
  };

  const handleSaveAttendance = () => {
    if (!selectedEvent) {
      toast.error("Veuillez sélectionner un évènement.");
      return;
    }

    const event = events.find((e) => e._id === selectedEvent);
    if (!event) {
      toast.error("Évènement introuvable.");
      return;
    }

    const eventMembers = [
      ...members.filter((member) => !event.pole || member.pole === event.pole),
      ...members.filter((member) => additionalMembers.includes(member._id)),
    ];

    const missingStatus = eventMembers.some(
      (member) => !attendance[member._id]
    );

    if (missingStatus) {
      toast.error("Veuillez indiquer un statut pour chaque membre.");
      return;
    }

    const presenceList: PresenceList = {
      _id: `presence_${selectedEvent}`,
      eventId: selectedEvent,
      attendance: Object.keys(attendance).map((memberId) => ({
        memberId,
        status: attendance[memberId],
      })),
    };

    console.log("Presence List Saved:", presenceList);
    toast.success("Présences sauvegardées avec succès !");
  };

  const event = useMemo(
    () => events.find((e) => e._id === selectedEvent),
    [events, selectedEvent]
  );

  const eventMembers = useMemo(() => {
    if (!event) return [];
    return members.filter((member) => !event.pole || member.pole === event.pole);
  }, [event, members]);

  const additionalMemberOptions = members
    .filter(
      (member) =>
        !eventMembers.some((evMember) => evMember._id === member._id) &&
        !additionalMembers.includes(member._id)
    )
    .map((member) => ({
      value: member._id,
      label: `${member.firstName} ${member.lastName} (${member.pole})`,
    }));

  return (
    <>
      {/* Event Selection */}
      <div className="w-full">
        <label htmlFor="eventSelect" className="block text-sm font-medium mb-1">
          Sélectionnez un évènement
        </label>
        <select
          id="eventSelect"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={selectedEvent || ""}
          onChange={(e) => handleEventChange(e.target.value)}
          required
        >
          <option value="" disabled>
            Sélectionnez un évènement
          </option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.title} ({event.date} à {event.time})
            </option>
          ))}
        </select>
      </div>

      {/* Member Attendance Table */}
      {selectedEvent && (
        <>
          <div className="w-full overflow-x-auto mt-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Fiche de présences
            </h2>
            <table className="min-w-full table-auto text-sm border-collapse">
              <thead>
                <tr className="bg-grey/5">
                  <th className="hidden md:flex"></th>
                  <th className="px-4 py-2 whitespace-nowrap text-start">
                    Membre
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap text-start">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...eventMembers, ...additionalMembers.map((id) => members.find((m) => m._id === id)).filter(Boolean)].map((member) => {
                  if (!member) return null;
                  return (
                    <tr key={member._id} className="border-b last:border-0">
                      <td className="md:flex hidden py-1">
                        <img
                          src={member.image}
                          alt="Profile"
                          className="h-12 w-12 rounded-full"
                        />
                      </td>
                      <td className="px-4 py-2 truncate">
                        {member.firstName} {member.lastName}
                        <p className="text-xs sm:text-sm text-grey">
                          Pôle {member.pole}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          {["P", "A", "J"].map((status) => (
                            <button
                              key={status}
                              onClick={() =>
                                handleAttendanceChange(
                                  member._id,
                                  status === "P"
                                    ? "Present"
                                    : status === "A"
                                    ? "Absent"
                                    : "Justified Absent"
                                )
                              }
                              className={`px-3 py-2 rounded-lg text-sm font-bold ${
                                attendance[member._id] ===
                                (status === "P"
                                  ? "Present"
                                  : status === "A"
                                  ? "Absent"
                                  : "Justified Absent")
                                  ? status === "P"
                                    ? "bg-green-500 text-white"
                                    : status === "A"
                                    ? "bg-red-500 text-white"
                                    : "bg-yellow-500 text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Add Members */}
          <div className="w-full mt-6">
            <label className="block text-sm font-medium mb-1">
              Ajouter des membres
            </label>
            <Select
              isMulti
              value={selectedAdditionalMembers}
              options={additionalMemberOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(selected) =>
                handleAddAdditionalMembers(
                  selected as MultiValue<{ value: string; label: string }>
                )
              }
            />
          </div>

          <button
            onClick={handleSaveAttendance}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Sauvegarder les Présences
          </button>
        </>
      )}
    </>
  );
}

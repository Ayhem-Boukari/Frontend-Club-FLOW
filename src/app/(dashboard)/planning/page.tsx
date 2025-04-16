import React from "react";
import { eventsList } from "@/dump"; // Assuming you have exported the events list
import { Calendar, Clock, MapPin } from "lucide-react";
import EventCard from "./_components/EventCard";

export const metadata = {
  title: "Club FLOW | Planning",
  description:
    "Consultez les évènements à venir et les détails des activités planifiées.",
};

export default function PlanningPage() {
  return (
    <main className="flex flex-col justify-start items-start sm:p-8 gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">Planning</h1>
        <p className="text-grey">
          Consultez les évènements à venir et les détails des activités
          planifiées.
        </p>
      </div>

      {/* Event List */}
      <div className=" w-full grid md:grid-cols-2 gap-4">
        {eventsList.map((event) => (
          <React.Fragment key={event._id}>
            <EventCard event={event} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

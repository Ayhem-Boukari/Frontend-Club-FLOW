import AttendanceForm from "./_components/AttendanceForm";
import { eventsList } from "@/dump";
import { membersList } from "@/dump";

export const metadata = {
  title: "ClubFLOW | Gestion des Présences",
  description:
    "Marquez les présences et absences des membres pour des évènements spécifiques.",
};

export default function AddAbsencesPage() {
  return (
    <main className="flex flex-col justify-start items-start sm:p-8 gap-6">
      <h1 className="text-4xl font-bold text-primary">Gestion des Présences</h1>
      <p className="text-gray-600">
        Marquez les présences et absences des membres pour des évènements
        spécifiques.
      </p>

      <AttendanceForm members={membersList} events={eventsList} />
    </main>
  );
}

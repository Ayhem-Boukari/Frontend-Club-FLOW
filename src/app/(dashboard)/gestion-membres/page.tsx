import MemberTable from "./_components/MemberTable";

export const metadata = {
  title: "Melkart JE | Gestion des Membres",
  description:
    "Gérez les informations des membres, modifiez leurs profils ou supprimez des comptes.",
};

const MembersList: React.FC = () => {
  return (
    <main className="flex flex-col justify-start items-start sm:p-8 gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-primary">Gestion des Membres</h1>
        <p className="text-grey">
          Gérez les informations des membres, modifiez leurs profils ou
          supprimez des comptes.
        </p>
      </div>
      <MemberTable />
    </main>
  );
};

export default MembersList;

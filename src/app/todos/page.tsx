import AuthGetCurrentUserServer from "@/components/AuthGetCurrentUserServer";
import SignOutButton from "@/components/SignOutButton";
import TodosServer from "@/components/TodoServer";

export default async function Todos() {
  return (
    <main>
      <AuthGetCurrentUserServer />
      <SignOutButton />
      <TodosServer />
    </main>
  );
}

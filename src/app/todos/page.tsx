import AuthGetCurrentUserServer from "@/components/AuthGetCurrentUserServer";
import SignOutButton from "@/components/SignOutButton";
import TodosServer from "@/components/TodoServer";
import { NextPage } from "next";
import dynamic from "next/dynamic";

export default async function Todos() {
  const AdminApp = dynamic(() => import("@/components/AdminApp"), {
    ssr: false,
  });

  return (
    <main>
      <AdminApp />
    </main>
  );
}

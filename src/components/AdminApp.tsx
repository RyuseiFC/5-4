// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "@/CutomAppBar";
import Map from "./Map";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={Map}
      create={<div>作成画面</div>}
      recordRepresentation="name"
    />
  </Admin>
);

export default AdminApp;

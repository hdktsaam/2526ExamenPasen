import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {

  return (
    <div>
      <RegistrationForm />
      <hr />
      <UserList />
    </div>
  );
}

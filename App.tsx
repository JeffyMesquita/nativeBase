import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import { SignIn } from "./src/Screens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}

import AppRouter from "./router/AppRouter";
import React from "react";
import Footer from "./components/UI/Footer";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <AppRouter className="flex-1"/>
        <Footer className="mt-auto"/>
    </div>
  );
}

export default App;

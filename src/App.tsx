import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import FloatingFormCard from "./components/FloatingCard";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Toaster position="top-center" />
      <GlobalStyle />
      <Header />
      {showForm && <FloatingFormCard setShowForm={setShowForm} />}
      <Main setShowForm={setShowForm} />
      <Footer />
    </>
  );
}

export default App;

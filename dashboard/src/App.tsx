import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Create } from "./pages/Create";
import { Home } from "./pages/Home";
import { Update } from "./pages/Update";

const App: FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-8 mx-16 lg:mx-72">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

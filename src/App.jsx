import { Route, Routes } from "react-router";
import "./App.css";
import { ThemeContext } from "styled-components";
import AppLayout from "./components/app-layout/app-layout";
import HomePage from "./pages/home-page/home-page";
import QuestionsPage from "./pages/questions-page/questions-page";
import ResultPage from "./pages/result-page/result-page";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  function changeTheme() {
    if (theme === "light") {
      setTheme(() => "dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      setTheme(() => "light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
  return (
    <ThemeContext value={{ theme, changeTheme }}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="questions" element={<QuestionsPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;

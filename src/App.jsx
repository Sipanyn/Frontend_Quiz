import { Route, Routes } from "react-router";
import "./App.css";
import { ThemeContext } from "styled-components";
import AppLayout from "./components/app-layout/app-layout";
import HomePage from "./pages/home-page/home-page";
import QuestionsPage from "./pages/questions-page/questions-page";
import ResultPage from "./pages/result-page/result-page";
import { useEffect, useState } from "react";
import { SubjectContext } from "./context/SubjectContext";
import {
  getCurrentQuestionLocal,
  getPointLocal,
  getSelectedSubjectLocal,
} from "./utils/localStorage";

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
  // subject context
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(() => {
    const item = getSelectedSubjectLocal("selectedSubject");
    return item || null;
  });
  const [selectedOption, setSelectedOoption] = useState(null);
  const [result, setResult] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const item = getCurrentQuestionLocal("currentQuestion");
    return Number(item) || Number(0);
  });
  const [point, setPoint] = useState(() => {
    const item = getPointLocal("point");
    return Number(item) || Number(0);
  });
  // current question =>index of question
  useEffect(() => {
    fetch(`https://frontend-quiz-mock-api.vercel.app/subjects`)
      .then((response) => response.json())
      .then((json) => setSubjects(json));
  }, []);
  function selectSubjectHandler(index) {
    setSelectedSubject(index);
  }

  function SetSelectedOptionHandler(index) {
    setSelectedOoption(index);
  }
  function validationFun() {
    if (
      selectedOption === subjects[selectedSubject].info[currentQuestion].answer
    ) {
      setResult(true);
      setPoint((pre) => pre + 1);

      setSelectedOoption(null);
    } else {
      setResult(false);
      setSelectedOoption(null);
    }
  }
  function setCurrentQuestionHandler() {
    setCurrentQuestion((pre) => pre + 1);
    setResult(null);
  }
  function resetGame() {
    setSelectedSubject(null);
    setResult(null);
    setCurrentQuestion(0);
    setPoint(() => 0);
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("point");
    localStorage.removeItem("selectedSubject");
  }
  console.log(selectedSubject);

  return (
    <SubjectContext
      value={{
        subjects,
        selectedSubject,
        selectSubjectHandler,
        selectedOption,
        SetSelectedOptionHandler,
        validationFun,
        result,
        currentQuestion,
        setCurrentQuestionHandler,
        point,
        resetGame,
      }}
    >
      <ThemeContext value={{ theme, changeTheme }}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="questions" element={<QuestionsPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Routes>
      </ThemeContext>
    </SubjectContext>
  );
}

export default App;

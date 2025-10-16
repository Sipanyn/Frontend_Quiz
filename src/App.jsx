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
import Subject from "./components/subject/subject";
import ProtectedRoute from "./components/protected-route/protected-route";
import ProtectedRouteQuestions from "./components/protected-route-questions/protected-route-questions";
import NotFound from "./components/not-found/not-found";
import NotFoundPage from "./pages/not-found-page/not-found-page";

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
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
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
      setCorrectAnswer(subjects[selectedSubject].info[currentQuestion].answer);
      setPoint((pre) => pre + 1);
    } else {
      setResult(false);
      setCorrectAnswer(subjects[selectedSubject].info[currentQuestion].answer);
    }
  }
  function setCurrentQuestionHandler() {
    setCurrentQuestion((pre) => pre + 1);
    setResult(null);
    setCorrectAnswer(null);
    setSelectedOoption(null);
  }
  function resetGame() {
    setSelectedSubject(null);
    setResult(null);
    setCorrectAnswer(null);
    setCurrentQuestion(0);
    setQuizCompleted(false);
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
        correctAnswer,
        setQuizCompleted,
      }}
    >
      <ThemeContext value={{ theme, changeTheme }}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="questions"
              element={
                <ProtectedRouteQuestions condition={selectedSubject}>
                  <QuestionsPage />
                </ProtectedRouteQuestions>
              }
            />
            <Route
              path="result"
              element={
                <ProtectedRoute condition={quizCompleted}>
                  <ResultPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeContext>
    </SubjectContext>
  );
}

export default App;

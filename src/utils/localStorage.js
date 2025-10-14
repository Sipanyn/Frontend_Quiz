export function setSelectedSubjectLocal(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export function getSelectedSubjectLocal(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? item : undefined;
  } catch (error) {
    console.log(error);
  }
}
export function setPointLocal(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export function getPointLocal(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? item : undefined;
  } catch (error) {
    console.log(error);
  }
}
export function setCurrentQuestionLocal(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export function getCurrentQuestionLocal(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? item : undefined;
  } catch (error) {
    console.log(error);
  }
}

import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";

const convertData = (input) => {
  const departments = Array.from(new Set(input.map(({ department }) => department)));

  console.log(departments);

  const bureaus = Array.from(new Set(input.map(({ bureau }) => bureau)));

  console.log(bureaus);

  return { children: [] }; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};

export default Lesson;

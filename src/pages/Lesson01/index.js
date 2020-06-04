import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {

  input.sort((i2, i1) => i1[1] - i2[1]);

  return input.map(([name, count]) => ({
    name,
    count,
  }));
  // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;

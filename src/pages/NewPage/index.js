import React from "react";
import LessonPage from "../../components/NewPage";
import Chart from "../../components/ChartNew";
import instruction from "./instruction.md";

const convertNewData = (input) => {
  input.sort((i1, i2) => i2.count - i1.count);
  return input.slice(10, 60);
  // return input;
};

const Lesson = () => {
  return (
    <LessonPage
      // answerUrl="/answer05"
      convertData={convertNewData}
      dataUrl="data/count.json"
      instruction={instruction}
      title="NewPage"
      Chart={Chart}
    />
  );
};

export default Lesson;

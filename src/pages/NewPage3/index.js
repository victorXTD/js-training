import React from "react";
import LessonPage from "../../components/NewPage3";
import Chart from "../../components/ChartNew3";
import instruction from "./instruction.md";

const convertNewData = (input) => {
  input.sort((i1, i2) => i2.sum - i1.sum);

  input = input.slice(5, 25);
  const output = input.map(({word, data}) => {
    return {
      id: word,
      data: data.sort((i1, i2) => i1.date - i2.date).map(({date, count}) => {
        return {
          x: date,
          y: count,
        };
      }),
    };
  });

  return output;
  // return input;
};

const Lesson = () => {
  return (
    <LessonPage
      // answerUrl="/answer05"
      convertData={convertNewData}
      dataUrl="data/count_by_day_new.json"
      instruction={instruction}
      title="NewPage3"
      Chart={Chart}
    />
  );
};

export default Lesson;

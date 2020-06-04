import React from "react";
import LessonPage from "../../components/NewPage2";
import Chart from "../../components/ChartNew2";
import instruction from "./instruction.md";

const convertData = (input) => {
  
  // const hours = Array.from({ length: 24 }).map((_, i) => {
  //   const obj = {
  //     bin: i.toString(),
  //   };

  //   const keys = Array.from(new Set(input.map(({ keys }) => keys)));
  //   // const keys = input.hour.filter((item) => item.keyP === i.toString());

  //   for (const key of keys) {
  //     obj[key] = 0;
  //   }
  //   // for (const { keys, score } of input.keyP) { //不一定能取到
  //   //   score[keys] = score;
  //   // }
  //   return obj;
  // });

  // for (const { score, keys } of input.hour) {
  //   // const i = Math.round(y) - min;
  //   // hours[hour][keys] = score;
  // };

  // return hours;


  input.sort((i1, i2) => i2.count - i1.count);
  // return input.slice(0, 50);
  
  return input.map(({ word, count }) => {
    return {
      id: word,
      label: word,
      value: count,
    };
  }).slice(10, 30);

  // return input;// ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      // answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/count.json"
      instruction={instruction}
      title="pie"
      Chart={Chart}
    />
  );
};

export default Lesson;

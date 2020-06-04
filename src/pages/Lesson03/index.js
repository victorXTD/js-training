import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

const convertData = (input) => { // `input` から `gender` が男性の要素のみを取り出し
  return input.filter((item) => {
    return (item.gender === '男性') && (item.y >= 170);
  });
  // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
    
  );
};

export default Lesson;

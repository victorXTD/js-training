import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => { //id=species にはアヤメの品種の名前、data にはその品種のがく片の長さを x=sepalLength 、花びらの幅を y=petalWidth
  
  const species = Array.from(new Set(input.map(({ species }) => species)));
  
  console.log(species);

  return console.log(species.map((species) => {
    return {
      id: species,
      data: input
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  }));
  // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      // dataUrl="data/size-and-weight.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;

import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";

const convertData = (input) => {
  // 时区调整
  function covDate(myDate) {
    var date = new Date(myDate); 
    
    date.setHours(date.getHours() + 9); 

    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    var newData = year + "-" + month + "-" + day; 
    
    return newData;
  }

  // 时区转换
  const data = input.map(({createdAt, text, isRetweet}) => {
      return {
        createdAt: covDate(createdAt),
        text: text,
        isRetweet: isRetweet,
      };
    });

  console.log(data);

  // 日期合计
  const dates = Array.from(new Set(data.map(({ createdAt }) => createdAt)));
  dates.sort();

  console.log(dates);

  // 每日计数
  const count = { tweet: {}, retweet: {} };
  for (const d of dates) {
    count.tweet[d] = 0;
    count.retweet[d] = 0;
  }
  
  for (const { createdAt, isRetweet } of data) {
    if (isRetweet) {
      count.retweet[createdAt] += 1;
    } else {
      count.tweet[createdAt] += 1;
    }
  }

  console.log(count);

  return ["tweet", "retweet"].map((key) => {
    return {
      id: key,
      data: dates.map((d) => {
        return {
          x: d,
          y: count[key][d],
        };
      }),
    };
  });

 

  // return []; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer07"
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      instruction={instruction}
      title="Lesson 07"
      Chart={Chart}
    />
  );
};

export default Lesson;

import { useEffect, useState } from "react";
import Quizy from "../assets/quizy.svg";

type DataProp = {
  category: string;
  correct_answer: string;
  id: string;
  incorrect_answers: [string, string, string];
  question: string;
  type: string;
};

function ActiveQuiz() {
  const [data, setdata] = useState<DataProp[] | undefined>();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3000/results");
        const data = await res.json();
        setdata(data);
        console.log(data);
      } catch {
        throw new Error("sorry something went wrong when getting data");
      }
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col max-w-4xl w-full">
      <img src={Quizy} alt="Quizy logo" className="h-20" />
      <h1 className="text-base">Question</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tortor elit amet duis maecenas
        quis elementum vivamus ipsum pretium. Nunc facilisi posuere semper
        quisque lorem. Nunc aliquet?
      </p>
      <ul>{data ? data[0].category : null}</ul>
    </div>
  );
}

export default ActiveQuiz;

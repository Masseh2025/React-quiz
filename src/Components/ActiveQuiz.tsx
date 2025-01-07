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

type ActiveQuizProps = {
  question: number;
};

function ActiveQuiz({ question }: ActiveQuizProps) {
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
  if (data)
    return (
      <div className="flex flex-col">
        <img src={Quizy} alt="Quizy logo" className="mb-12 h-20" />
        <p>{data[question].question}</p>
        <li></li>
      </div>
    );

  if (!data) return <p>Sorry there was a error fetching data</p>;
}

export default ActiveQuiz;

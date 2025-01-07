import { useEffect, useState } from "react";
import Quizy from "../assets/quizy.svg";

type DataProp = {
  category: string;
  correct_answer: string;
  id: string;
  answers: string[];
  question: string;
  type: string;
};

type ActiveQuizProps = {
  question: number;
  nextQuestion: React.MouseEventHandler<HTMLButtonElement>;
  correctQuestion: React.MouseEventHandler<HTMLButtonElement>;
  restart: React.MouseEventHandler<HTMLButtonElement>;
  score: number;
};

function ActiveQuiz({
  question,
  nextQuestion,
  correctQuestion,
  restart,
  score,
}: ActiveQuizProps) {
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
  function handleAnswer(item: string, correct_answer: string) {
    if (item !== correct_answer) return nextQuestion;
    if (item === correct_answer) return correctQuestion;
  }
  if (question === 10)
    return (
      <div className="text-4xl flex flex-col">
        <p className="mb-4 text-center">Congratulations you got a {score}!</p>
        <button
          onClick={restart}
          className="bg-accent text-complementary p-4 rounded-full"
        >
          Click here to restart
        </button>
      </div>
    );
  if (data)
    return (
      <div className="flex flex-col max-w-4xl w-full">
        <img src={Quizy} alt="Quizy logo" className="mb-12 h-20" />
        <p className="text-4xl mb-4">{data[question].question}</p>
        {data[question].answers.map((item) => {
          return (
            <li key={item} className="list-none mb-2 text-2xl">
              <button
                className="bg-complementary w-full hover:bg-accent"
                onClick={handleAnswer(item, data[question].correct_answer)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </div>
    );

  if (!data) return <p>Sorry there was a error fetching data</p>;
}

export default ActiveQuiz;

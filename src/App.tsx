import { useReducer } from "react";
import Starter from "./Components/Starter";
import ActiveQuiz from "./Components/ActiveQuiz";

const initialState = {
  gameMode: "start",
  question: -1,
  score: -1,
};
function reducer(state = initialState, action: ActionProps) {
  switch (action.type) {
    case "startGame":
      return {
        gameMode: (state.gameMode = "active"),
        question: state.question,
        score: state.score,
      };
    case "nextQuestion":
      return {
        gameMode: state.gameMode,
        question: state.question + 1,
        score: state.score,
      };
    case "restart":
      return {
        gameMode: (state.gameMode = "start"),
        question: (state.question = -1),
        score: (state.score = -1),
      };
    default:
      return state;
  }
}

type ActionProps = {
  type: "startGame" | "nextQuestion" | "restart";
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.gameMode === "start")
    return (
      <main className="h-screen flex justify-center items-center">
        <button onClick={() => dispatch({ type: "startGame" })}>start</button>
        <Starter />
      </main>
    );
  if (state.gameMode === "active")
    return (
      <main className="h-screen flex justify-center items-center">
        <ActiveQuiz />
      </main>
    );
}

import { useReducer } from "react";
import Starter from "./Components/Starter";

type StateProps = {
  gameMode: "start" | "active" | "end";
  question: number;
  score: number;
};

type ActionProps = {
  type: string;
};

const initialState: StateProps = {
  gameMode: "start",
  question: -1,
  score: -1,
};

function reducer(state = initialState, action: ActionProps) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main className="h-screen flex justify-center items-center">
      <Starter />
    </main>
  );
}

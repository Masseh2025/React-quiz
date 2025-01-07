/// <reference types="vite/client" />

type eventProp = {
  event: React.MouseEventHandler<HTMLButtonElement>;
};

type ActionProps = {
  type:
    | "startGame"
    | "nextQuestion"
    | "restart"
    | "correctQuestion"
    | "endGame";
};

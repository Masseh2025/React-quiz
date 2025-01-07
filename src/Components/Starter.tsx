import Quizy from "../assets/Quizy.svg";

import Button from "./Button";

function Starter({ event }: eventProp) {
  return (
    <div className="flex flex-col">
      <img src={Quizy} alt="Quizy logo" className="mb-12 h-20" />
      <Button big={true} event={event}>
        <p>Start</p>
      </Button>
    </div>
  );
}

export default Starter;

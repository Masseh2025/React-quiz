import Quizy from "../assets/Quizy.svg";

import Button from "./Button";
function Starter() {
  return (
    <div className="flex flex-col">
      <img src={Quizy} alt="Quizy logo" className="mb-12" />
      <Button big={true}>
        <p>Start</p>
      </Button>
    </div>
  );
}

export default Starter;

import "./HangmanDrawing.css";

const Head = <div className="head"></div>;
const Body = <div className="body"></div>;
const Right_Arm = <div className="right-arm"></div>;
const Left_Arm = <div className="left-arm"></div>;
const Right_Leg = <div className="right-Leg"></div>;
const Left_Leg = <div className="left-Leg"></div>;

const BODY_PARTS = [Head, Body, Right_Arm, Left_Arm, Right_Leg, Left_Leg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="Line4"></div>
      <div className="Line3"></div>
      <div className="Line2"></div>
      <div className="Line1"></div>
    </div>
  );
};

export default HangmanDrawing;

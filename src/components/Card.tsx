type CardProps = {
  count?: number;
  text: string;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  alertMessage?: (message: string) => void;
  color?: "red" | "blue";
};
export const Card = ({
  count,
  text,
  setCount = () => {},
  alertMessage = () => {},
  color,
}: CardProps) => {
  return (
    <div className="card-wrapper">
      <h2>Card</h2>
      <p>{text}</p>
      <p>{color}</p>
      {count !== undefined && <p>{count}</p>}
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
      <button onClick={(e) => alertMessage("hi alert!")}>alert</button>
    </div>
  );
};

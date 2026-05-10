type CardProps = {
  children: React.ReactNode;
};
export const CardWithChildren = ({ children }: CardProps) => {
  // const [count, setCount] = useState(0);

  return <div className="card-wrapper">{children}</div>;
};

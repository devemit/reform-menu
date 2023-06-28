interface TitleProps {
  label: string;
}

const DrinktsTitle: React.FC<TitleProps> = ({ label }) => {
  return <h1>{label}</h1>;
};

export default DrinktsTitle;

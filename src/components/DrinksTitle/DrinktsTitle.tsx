interface TitleProps {
  label: string;
}

const DrinktsTitle: React.FC<TitleProps> = ({ label }) => {
  return <h2>{label}</h2>;
};

export default DrinktsTitle;

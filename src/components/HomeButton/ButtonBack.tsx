import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import './buttonstyles.css';
interface ButtonProps {
  label?: string;
  link: string;
}

const ButtonBack: React.FC<ButtonProps> = ({ link, label }) => {
  return (
    <div className='wrapper'>
      <Link className='btn-back' to={link}>
        <BsArrowLeftShort size={30} />
      </Link>
      <span className='label'>{label}</span>
    </div>
  );
};

export default ButtonBack;

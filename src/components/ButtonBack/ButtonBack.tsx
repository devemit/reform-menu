import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

interface ButtonProps {
  label?: string;
  link: string;
}

const ButtonBack: React.FC<ButtonProps> = ({ link }) => {
  return (
    <Link className='btn-back' to={link}>
      <BsArrowLeftShort style={{ color: 'black', marginTop: '.7rem' }} size={40} />
    </Link>
  );
};

export default ButtonBack;

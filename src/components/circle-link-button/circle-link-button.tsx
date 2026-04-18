import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import './circle-link-button.css';

export interface CircleLinkButtonProps {
  label?: string;
  link: string;
}

const CircleLinkButton: React.FC<CircleLinkButtonProps> = ({ link, label }) => {
  return (
    <div className='circle-link-button'>
      <Link className='circle-link-button__link' to={link}>
        <BsArrowLeftShort size={25} />
      </Link>
      {label ? <span className='circle-link-button__label'>{label}</span> : null}
    </div>
  );
};

export default CircleLinkButton;

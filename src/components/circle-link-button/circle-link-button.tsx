import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import './circle-link-button.css';

export interface CircleLinkButtonProps {
  label?: string;
  link: string;
  useHistoryBack?: boolean;
}

const CircleLinkButton: React.FC<CircleLinkButtonProps> = ({ link, label, useHistoryBack = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const canUseHistoryBack =
    useHistoryBack &&
    location.state?.fromMenuCard === true &&
    typeof window !== 'undefined' &&
    Number(window.history.state?.idx) > 0;

  const handleHistoryBack = () => {
    if (canUseHistoryBack) {
      navigate(-1);
      return;
    }

    navigate(link);
  };

  return (
    <div className='circle-link-button'>
      {useHistoryBack ? (
        <button
          type='button'
          className='circle-link-button__link'
          onClick={handleHistoryBack}
          aria-label={label ?? 'Back'}
        >
          <BsArrowLeftShort size={25} />
        </button>
      ) : (
        <Link className='circle-link-button__link' to={link}>
          <BsArrowLeftShort size={25} />
        </Link>
      )}
      {label ? <span className='circle-link-button__label'>{label}</span> : null}
    </div>
  );
};

export default CircleLinkButton;

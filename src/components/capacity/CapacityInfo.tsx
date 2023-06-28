import './Capacity.css';

interface CapacityInfo {
  imgUrl?: string;
  desc: string;
  title: string;
}

const CapacityInfo: React.FC<CapacityInfo> = ({ imgUrl, desc, title }) => {
  return (
    <div className='pro'>
      <img src={imgUrl} alt='/' />
      <div className='num'>{desc}</div>
      <div className='desc'>{title}</div>
    </div>
  );
};

export default CapacityInfo;

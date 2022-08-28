import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: 'center' }}
      height="150"
      width="150"
      color="#2DB5A4"
    />
  );
};

export default Loader;

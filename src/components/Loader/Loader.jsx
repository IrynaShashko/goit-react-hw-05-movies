import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: 'center' }}
      height="150"
      width="150"
      color="#3879B3"
    />
  );
};

export default Loader;

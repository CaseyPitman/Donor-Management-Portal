// This component renders a loader animation to run while app is loading data.

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingAnimation = () => {
  return <Loader type='Audio' color='#00BFFF' height={80} width={80} />;
};

export default LoadingAnimation;

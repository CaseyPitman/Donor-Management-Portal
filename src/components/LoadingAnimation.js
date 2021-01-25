// // This component renders a loader animation to run while app is loading data.

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingAnimation = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      // <Loader type='Audio' color='#00BFFF' height={80} width={80} />
      <h1>Loading</h1>
    )
  );
};

export default LoadingAnimation;

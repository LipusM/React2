const c = console.log.bind(document);

import "./style.scss";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <InfinitySpin width="200" color="#6d6d6d" />
    </>
  );
};

export default Loader;

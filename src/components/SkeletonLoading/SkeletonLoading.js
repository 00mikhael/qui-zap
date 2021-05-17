import React from "react";
import Skeleton from 'react-loading-skeleton'

const SkeletonLoading = () => {
  return (
      <Skeleton count={2} style={{flexBasis: "18.5rem", height: "400px", width: "400px"}} className={`flex-grow m-2 rounded-lg`} />
  );
};

export default SkeletonLoading;

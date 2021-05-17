import React from "react";
import {VscLoading} from 'react-icons/vsc'

const Loading = () => {
  return (
    <VscLoading className={`my-4 mx-auto animate-spin text-fuchsia-700`}  height={20} width={20}/>
  )
}

export default Loading;

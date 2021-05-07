import React from "react";

const ListCategory = ({children}) => {
  return (
    <div className={`py-8`}>
      <div className={`text-lg`}>Select a category</div>
      <span className={`flex flex-wrap gap-4`}>
      {children}
      </span>
    </div>
  );
};

export default ListCategory;

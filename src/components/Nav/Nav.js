import React from "react";


const Nav = ({className, children}) => {
  return (
    <nav>
      <ul className={className}>
        {children}
      </ul>
    </nav>
  );
};

export default Nav;

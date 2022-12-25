import React from 'react';

/* generate button count page */

const ButtonCount = () => {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};

export default ButtonCount;
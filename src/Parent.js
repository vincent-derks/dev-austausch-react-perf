import React, { useState, memo, useMemo } from 'react';

const SomeChild = () => <>Some child component</>;

const ChildWrapper = memo(({ children }) => <div>{children}</div>);
ChildWrapper.whyDidYouRender = true;
ChildWrapper.displayName = 'ChildWrapper';

const Parent = () => {
  const [count, setCounter] = useState(0);
  return (
    <>
      Counter:
      {count}
      <br />
      <button onClick={() => setCounter(c => c + 1)} type="button">
        increase count
      </button>
      <ChildWrapper>
        <SomeChild />
      </ChildWrapper>
    </>
  );
};

Parent.whyDidYouRender = true;

export default Parent;

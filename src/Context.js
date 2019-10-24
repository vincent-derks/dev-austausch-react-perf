import React, {
  createContext, useState, useContext, useCallback, memo,
} from 'react';
import { PageWrapper } from './ui';

const TestContext = createContext({});

const Count = memo(({ count }) => <span>{count}</span>);

const IncreaseButton = memo(({ increaseCount }) => (
  <button type="button" onClick={increaseCount}>
    Increase!
  </button>
));

const Content = memo(() => {
  const { count, increaseCount } = useContext(TestContext);
  return (
    <>
      Count:
      {' '}
      <Count count={count} />
      <br />
      <IncreaseButton increaseCount={increaseCount} />
    </>
  );
});

const ContentWrapper = memo(() => (
  <PageWrapper>
    <Content />
  </PageWrapper>
));

const Context = () => {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => setCount(c => c + 1), []);
  return (
    <TestContext.Provider value={{ count, increaseCount }}>
      <ContentWrapper />
    </TestContext.Provider>
  );
};

export default Context;

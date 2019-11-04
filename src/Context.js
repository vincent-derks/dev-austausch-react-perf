import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  memo
} from 'react';
import { PageWrapper } from './ui';

const TestContext = createContext({});

const Count = ({ count }) => {
  console.log('Count renders');
  return <span>{count}</span>;
};

const IncreaseButton = memo(({ increaseCount }) => {
  console.log('IncreaseButton renders');
  return (
    <button type="button" onClick={increaseCount}>
      Increase!
    </button>
  );
});

const Content = () => {
  console.log('Content renders');
  const { count, increaseCount } = useContext(TestContext);
  return (
    <>
      Count:
      <Count count={count} />
      <br />
      <IncreaseButton increaseCount={increaseCount} />
    </>
  );
};

const ContentWrapper = memo(() => {
  console.log('ContentWrapper renders');
  return (
    <PageWrapper>
      <Content />
    </PageWrapper>
  );
});

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

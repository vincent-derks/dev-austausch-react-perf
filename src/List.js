import React, { useState } from 'react';
import { hooks } from './data';
import { ListItemWrapper } from './ui';

const ListItem = ({ item, doSomething }) => (
  <ListItemWrapper onClick={doSomething}>{item.value}</ListItemWrapper>
);

const HooksList = ({ doSomething }) => (
  <ul>
    {hooks.map(snack => (
      <ListItem key={snack.id} item={snack} doSomething={doSomething} />
    ))}
  </ul>
);

const List = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>A list example</h4>
      <HooksList doSomething={e => console.log(e.target.innerHTML, 'was clicked')} />
      <p>How many times did Vincent say "hooks" last week?</p>
      <span>{`Count: ${count}`}</span>
      <br />
      <button type="button" onClick={() => setCount(c => c + 1)}>
        increase count
      </button>
    </div>
  );
};

export default List;

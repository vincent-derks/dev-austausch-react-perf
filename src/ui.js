import styled, { createGlobalStyle } from 'styled-components';

const colors = {
  green: '#09d3ac',
  darkBlue: '#282c34',
};

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  color: ${colors.green};
}

button {
  color: ${colors.green};
  padding: 5px 10px ;
  font-size: 28px;
  border-radius: 3px;
  border: 2px solid ${colors.green};
  background-color: ${colors.darkBlue};
}

button:focus {
  outline: none;
}

button:active {
  background-color: ${colors.green};
  color: ${colors.darkBlue};
}

input {
  padding: 5px 10px;
  font-size: 28px;
  border-radius: 3px;
  border: none;
  margin: 5px 0 10px;
}

ul {
  margin: 0;
  padding: 0 0 0 2rem;
  margin-top: 2rem;
  list-style: none;
}

ul > li {
  position: relative;
}

ul > li:before {
  content: '';
  position: absolute;
  left: -2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.5rem;
  background-color: ${colors.green};
  top: 50%;
  transform: translateY(-10%);
}
`;

export const ListItemWrapper = styled.li`
  max-width: 30rem;
`;

export const PageWrapper = styled.div`
  width: 500px;
`;

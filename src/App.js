import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';

const initialState = {
  question: [],

  // loading, error, ready, active, 'finished
  status: 'loading',
};
function reducer(state, action) {}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:8000/questions');
      const data = await res.json();
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;

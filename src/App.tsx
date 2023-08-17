import { useEffect } from 'react';
import { Modal } from './components/Modal';

function App() {
  const promise = new Promise((res) => {
    setTimeout(() => {
      res(404);
    }, 2000);
  });

  useEffect(() => {
    promise.then((res) => {
      if (res === 404) {
        Modal._ref?.show();
      }
    });
  }, []);

  return <div> 2초뒤에 404 에러가 발생합니다.</div>;
}

export default App;

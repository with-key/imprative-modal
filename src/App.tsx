import { Modal } from './components/Modal';

function App() {
  return (
    <>
      <button name="trigger" onClick={() => Modal._ref?.toggle()}>
        열기
      </button>
    </>
  );
}

export default App;

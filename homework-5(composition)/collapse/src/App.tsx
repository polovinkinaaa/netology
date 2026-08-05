import Collapse from "./components/Collapse/Collapse.tsx";

function App() {
  return (
    <>
      <Collapse collapsedLabel="Подробнее" expandedLabel="Скрыть">
        <p>
          Первый блок: кнопка с кастомными подписями. Здесь может быть любой
          текст.
        </p>
      </Collapse>
      <Collapse>
        <p>
          Второй блок: без названий. «Развернуть» / «Свернуть» по умолчанию.
        </p>
      </Collapse>
    </>
  );
}

export default App;

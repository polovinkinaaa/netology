import Card from "./components/Card/Card.tsx";

function App() {
  return (
    <>
      <Card image="https://placecats.com/300/200">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      <Card>
        <p className="card-text">
          Карточка без заголовка — только описание и действие.
        </p>
        <a href="#" className="btn btn-primary">
          Купить сейчас
        </a>
      </Card>
      <Card>
        <h5 className="card-title">Только информация</h5>
        <p className="card-text">
          Здесь нет кнопки — просто заголовок и текст.
        </p>
      </Card>
      <Card>
        <p className="card-text">
          Совсем короткая заметка без заголовка и кнопки.
        </p>
      </Card>
    </>
  );
}

export default App;

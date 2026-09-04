import { useJsonFetch } from "./hooks/useJsonFetch.ts";

function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

function FetchError() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

function Loading() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <>
      <Data />
      <FetchError />
      <Loading />
    </>
  );
}

export default App;

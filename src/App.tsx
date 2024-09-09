import useFetch from "./hooks/useFetch";

function App() {
  const { data, isLoading, error } = useFetch('https://5025y.wiremockapi.cloud/json/1');
  console.log(data);
  console.log(isLoading);
  console.log(error);
  return (
    <>
      App
    </>
  );
}

export default App;

async function getCombinedData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (
      response
    ) {
      return response.json();
    }),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(function (
      response
    ) {
      return response.json();
    }),
  ]);
  const combinedData = {
    todo: data1,
    post: data2,
  };
  return combinedData;
}
getCombinedData().then((data) => console.log(data));

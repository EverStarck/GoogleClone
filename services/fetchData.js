export async function fetcher(query) {
  console.log("llamando", query);
  const response = await fetch(`https://everstarckgoogleapi.herokuapp.com/api?query=${query}`);
  console.log(response.status);

  if (!response.ok || response.status === "503" || response.status === "500") {
    return "Error, something goes wrong :(";
  } else {
    const dataJson = await response.json();
    console.log(dataJson);
    return dataJson;
  }
}

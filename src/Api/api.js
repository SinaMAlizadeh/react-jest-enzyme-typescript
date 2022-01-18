export async function fetchData() {
  return await fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((res) => res);
}

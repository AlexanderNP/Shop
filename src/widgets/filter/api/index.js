export async function getFilters(){
  return fetch("/filters")
  .then(response => response.json())
}
export async function getProducts(){
  return fetch("/products")
  .then(response => response.json())
}
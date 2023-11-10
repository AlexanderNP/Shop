export async function getFilterProducts(props){
  const searchParam = props
  return fetch("/filterProducts", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      searchParam: searchParam,
    })
  })
  .then(response => response.json())
}
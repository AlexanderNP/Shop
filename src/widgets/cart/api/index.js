export async function getPromocode(props) {
  const promocode = props
  return fetch("/apply-promocode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ promocode }),
  })
  .then(response => response.json())
}
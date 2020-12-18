const fetch = require("node-fetch")


async function callAPI(prams) {
  const res = await fetch(`https://api.illusionman1212.me/cheese/${prams}`)
  if (res.status !== 200) throw Error("Error calling the api")
  const json = await res.json()
  if(json.failed) throw Error("Error calling the api")
  return json
}

async function random() { return callAPI("random") }

async function search(q, page = 1, per_page = 10) {
  if(!q) throw Error("No query provided")
  if(per_page > 50 || per_page < 1) throw Error("Invalid per_page argument")
  return callAPI(`search?q=${q}&page=${page}&per_page=${per_page}`)
}

async function today() { return callAPI("today") }

async function alphabetical(letter, page = 1, per_page = 10) {
  if(!letter || letter.length > 1) throw Error("No or too much letter/s provided")
  if(per_page > 50 || per_page < 1) throw Error("Invalid per_page argument")
  return callAPI(`alphabetical?letter=${letter}&page=${page}&per_page=${per_page}`)
}

async function vegetarian(page = 1, per_page = 10) {
  if(per_page > 50 || per_page < 1) throw Error("Invalid per_page argument")
  return callAPI(`vegetarian?page=${page}&per_page=${per_page}`)
}


module.exports = {
  random,
  search,
  today,
  alphabetical,
  vegetarian
}
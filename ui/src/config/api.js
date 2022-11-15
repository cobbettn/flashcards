const dev = 'http://localhost:3000' // local environment

const baseUrl = dev // read in env variable here instead?

const user = '/user'
const register = '/register'
const activate = '/activate'
const login = '/login'
const cards = '/cards'

const userUrl = baseUrl + user
const registerUrl = userUrl + register
const activateUrl = userUrl + activate
const loginUrl = userUrl + login

const cardsUrl = baseUrl + cards
const getUserCardsUrl = userId => `${userUrl}/${userId}${cards}`

const jsonContentHeader = {"Content-Type": "application/json"}
const getAuthToken = token => ({"Authorization": `Bearer ${token}`})

export {
  baseUrl,
  registerUrl,
  activateUrl,
  loginUrl,
  getUserCardsUrl,
  cardsUrl,
  jsonContentHeader,
  getAuthToken
}

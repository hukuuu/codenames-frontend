export const isLoggedIn = () => {
  const is = !!getToken()
  console.log(`logged in? ${is ? 'yes' : 'no'}`)
  return is
}

export const getToken = () => {
  return localStorage.getItem('token')
}

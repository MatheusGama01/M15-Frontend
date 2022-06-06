const STORAGE_KEY = "AAA"

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export { isLogged, STORAGE_KEY }


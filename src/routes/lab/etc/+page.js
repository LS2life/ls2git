export async function load ({ data, fetch }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        age: 28,
        users: users
    }
}
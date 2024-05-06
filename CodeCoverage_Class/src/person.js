export function mapPerson(PersonStr) {
    const { name, age } = JSON.parse(PersonStr)

    return {
        name,
        age,
        createdAt: new Date()
    }
}
class Person {
    static validate(person) {
        if(!person.name) throw new Error('Name is Required')
        if(!person.cpf) throw new Error('CPF is Required')
    }

    static format(person) {
        const[name, ...lastName] = person.name.split(' ')
        return {
            cpf: person.cpf.replace(/\D/g, ''),
            name,
            lastName: lastName.join(' ')
        }
    }

    static save(person) {
        if(!['name', 'cpf', 'lastName'].every(prop => person[prop])) {
            throw new Error(`Cannot save invalid person: ${JSON.stringify(person)}`)
        }

        console.log('Successfully registered')
    }

    static process(person) {
        this.validate(person)
        const personFormatted = this.format(person)
        this.save(personFormatted)
        return 'ok'
    }
}

// Person.process({ name: 'John Doe', cpf: '012.294.129-23'})

export default Person
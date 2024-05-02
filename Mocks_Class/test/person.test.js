import { describe, it, expect, jest } from '@jest/globals'
import Person from '../src/person.js'


describe('# Person Suite', () => {
    describe('# Validate', () => {
        it('Should throw an error if name is not present', () => {
            const mockInvalidPerson = {
                name: '',
                cpf: '012.294.129-23'
            }

            expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('Name is Required'))
        })
        it('Should throw an error if CPF is not present', () => {
            const mockInvalidPerson = {
                name: 'John Doe',
                cpf: ''
            }

            expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('CPF is Required'))
        })
        it('Should not throw an error if person is valid', () => {
            const mockInvalidPerson = {
                name: 'John Doe',
                cpf: '012.294.129-23'
            }

            expect(() => Person.validate(mockInvalidPerson)).not.toThrow()
        })
    })

    describe('# Format', () => {
        it('Should format the person name and CPF', () => {
            const mockPerson = {
                name: 'John Doe',
                cpf: '012.294.129-23'
            }

            const formattedPerson = Person.format(mockPerson)

            const expected = {
                name: 'John',
                cpf: '01229412923',
                lastName: 'Doe'
            }

            expect(formattedPerson).toStrictEqual(expected)
        })
    })

    describe('# Save', () => {
        it('Should not save person without name or/and last name', () => {
            const mockPerson = {
                name: '',
                cpf: '012.294.129-23'
            }

            const formattedPerson = Person.format(mockPerson)
            expect(() => Person.save(formattedPerson)).toThrow()
        })

        it('Should not save person without cpf', () => {
            const mockPerson = {
                name: 'John',
                lastName: 'Doe'
            }

            expect(() => Person.save(mockPerson)).toThrow()
        })

        it('Should not save person without name', () => {
            const mockPerson = {
                name: 'John',
                lastName: 'Doe',
                cpf: '01229412923'
            }
            expect(() => Person.save(mockPerson)).not.toThrow()
        })
    })

    describe('# Process', () => {
        it('Should process a valid person', () => {
            const mockPerson = {
                name: 'John Doe',
                cpf: '012.294.129-23'
            }

            jest.spyOn(
                Person,
                Person.validate.name
            ).mockReturnValue()

            jest.spyOn(
                Person,
                Person.format.name
            ).mockReturnValue({
                name: 'John',
                lastName: 'Doe',
                cpf: '01229412923'
            })

            const result = Person.process(mockPerson)
            const expected = 'ok'

            expect(result).toStrictEqual(expected)
        })
    })
})
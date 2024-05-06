import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import { mapPerson } from '../src/person.js'

describe('# Person Test Suite', () => {
    describe('# Happy Path', () => {
        it('Should map person', () => {
            const personStr = '{"name":"John Doe","age":30}'
            const personObj = mapPerson(personStr)

            expect(personObj).toEqual({
                name: 'John Doe',
                age: 30,
                createdAt: expect.any(Date)
            })
        })
    })

    describe('# What Coverage doesnt tell you', () => {
        it('Should not map person given invalid JSON String', () => {
            const personStr = '{"name":'

            expect(() => mapPerson(personStr)).toThrow('Unexpected end of JSON input')
        })

        it('Should not map person given invalid JSON data', () => {
            const personStr = '{}'
            const personObj = mapPerson(personStr)

            expect(personObj).toEqual({
                name: undefined,
                age: undefined,
                createdAt: expect.any(Date)
            })
        })
    })
})
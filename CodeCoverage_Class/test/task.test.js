import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import Task from '../src/task.js'

describe('# Task Test Suite', () => {
    let _logmock
    let _task

    beforeEach(() => {
        _logmock = jest.spyOn(
            console,
            console.log.name
        ).mockImplementation()

        _task = new Task()
    })

    it('Should only run tasks hat are due with fake timers', async () => {
        jest.useFakeTimers()
 
        const tasks = [
            {
                name: 'Test will run in 5 seconds',
                dueAt: new Date(Date.now() + 5000),
                fn: jest.fn()
            },
            {
                name: 'Test will run in 10 seconds',
                dueAt: new Date(Date.now() + 10000),
                fn: jest.fn()
            }
        ]
        _task.save(tasks.at(0))
        _task.save(tasks.at(1))

        _task.run(200)

        jest.advanceTimersByTime(4000)
        expect(tasks.at(0).fn).not.toHaveBeenCalled()
        expect(tasks.at(1).fn).not.toHaveBeenCalled()

        jest.advanceTimersByTime(2000)
        expect(tasks.at(0).fn).toHaveBeenCalled()
        expect(tasks.at(1).fn).not.toHaveBeenCalled()

        jest.advanceTimersByTime(4000)
        expect(tasks.at(0).fn).toHaveBeenCalled()
        expect(tasks.at(1).fn).toHaveBeenCalled()

        jest.useRealTimers()
    })
})
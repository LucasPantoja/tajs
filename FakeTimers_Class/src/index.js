import Task from "./task.js"

const oneSecond = 1000
const runInASec = new Date(Date.now() + oneSecond)
const runInTwSecs = new Date(Date.now() + oneSecond * 2)
const runInThSecs = new Date(Date.now() + oneSecond * 3)

const task = new Task()
task.save({
    name: 'task 1',
    dueAt: runInASec,
    fn: () => console.log('task 1 executed')
})

task.save({
    name: 'task 2',
    dueAt: runInTwSecs,
    fn: () => console.log('task 2 executed')
})

task.save({
    name: 'task 3',
    dueAt: runInThSecs,
    fn: () => console.log('task 3 executed')
})

task.run(oneSecond)
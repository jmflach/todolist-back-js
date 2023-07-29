const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    const createdTask = await connection.execute(query, [title, 'pendente', dateUTC]);

    return {insertId: createdTask[0].insertId};
}


module.exports = {
    getAll,
    createTask
};
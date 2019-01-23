export const savetoLocal = (todos) => localStorage.setItem('todos', JSON.stringify(todos));
export const getFromLocal = () => JSON.parse(localStorage.getItem('todos'));


function getDate() {
  return new Date().toDateString();
}
const data = {
  msg: 'Hello Vue 3 + Vite',
  color: 'text-blue-500',
  getDate:getDate(),
  tasks: [
    { id: 1, text: 'Learn JavaScript', done: false },
    { id: 2, text: 'Learn Vue', done: false },
    { id: 3, text: 'Build something awesome', done: false }
  ]
}
export { data }
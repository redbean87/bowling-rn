export default function app(
  state = {
    description: 'Hello World'
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}

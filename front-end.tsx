import { render } from "preact"

function App() {
  return <p class="big">Hello World!</p>
}

render(<App />, document.getElementById("app")!)

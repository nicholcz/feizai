import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">feizai.com</p>
        <h1>Hello 👋</h1>
        <p className="subtitle">
          Welcome to Feizai. This little corner of the internet is now alive.
        </p>
        <a className="button" href="mailto:hello@feizai.com">
          Say hello
        </a>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

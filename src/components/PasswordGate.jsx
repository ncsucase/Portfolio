import { useState } from 'react'
import './PasswordGate.css'

export default function PasswordGate({ onSuccess }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value === import.meta.env.VITE_SITE_PASSWORD) {
      setError(false)
      onSuccess()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className="password-gate">
      <div className="password-gate__card">
        <h1 className="password-gate__title">Mikey Cestari</h1>
        <p className="password-gate__subtitle">Enter the password to continue.</p>
        <form className="password-gate__form" onSubmit={handleSubmit} noValidate>
          <div className="password-gate__field">
            <label htmlFor="gate-password" className="password-gate__label">Password</label>
            <input
              id="gate-password"
              type="password"
              className={`password-gate__input${error ? ' password-gate__input--error' : ''}`}
              value={value}
              onChange={e => { setValue(e.target.value); setError(false) }}
              autoComplete="current-password"
              autoFocus
            />
            {error && (
              <p className="password-gate__error" role="alert">Incorrect password. Try again.</p>
            )}
          </div>
          <button type="submit" className="password-gate__submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import CTA from './CTA'
import Icon from './Icon'
import './PasswordGate.css'

export default function PasswordGate({ onSuccess, onDismiss }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

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

  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) onDismiss()
  }

  return (
    <dialog
      ref={dialogRef}
      className="password-gate"
      onCancel={onDismiss}
      onClick={handleBackdropClick}
    >
      <div className="password-gate__card">
        <div className="password-gate__header">
          <h1 className="password-gate__title">Want to see my work?</h1>
          <p className="password-gate__instructions">You'll need the password from my resume.</p>
        </div>
        <form className="password-gate__form" onSubmit={handleSubmit} noValidate>
          <div className="password-gate__field">
            <div className="password-gate__input-wrap">
              <input
                id="gate-password"
                type={revealed ? 'text' : 'password'}
                className={`password-gate__input${error ? ' password-gate__input--error' : ''}`}
                value={value}
                onChange={e => { setValue(e.target.value); setError(false) }}
                autoComplete="current-password"
                autoFocus
                placeholder=" "
                aria-label="Password"
              />
              <button
                type="button"
                className="password-gate__reveal"
                onClick={() => setRevealed(r => !r)}
                aria-label={revealed ? 'Hide password' : 'Show password'}
                aria-pressed={revealed}
              >
                <Icon name={revealed ? 'eye-off' : 'eye'} size="24px" />
              </button>
            </div>
            {error && (
              <p className="password-gate__error" role="alert">Incorrect password. Try again.</p>
            )}
          </div>
          <CTA type="submit" variant="primary" className="password-gate__submit">Enter</CTA>
        </form>
      </div>
    </dialog>
  )
}

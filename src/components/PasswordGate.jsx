import { useState, useRef, useEffect } from 'react'
import CTA from './CTA'
import Icon from './Icon'
import './PasswordGate.css'

export default function PasswordGate({ onSuccess, onDismiss }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
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
          <CTA onClick={onDismiss} className="password-gate__close" aria-label="Close" variant="tertiary">
            <Icon name="x" />
          </CTA>
        </div>
        <div className="password-gate__body">
          <p className="password-gate__instructions">You'll need the password from my resume.</p>
          <form className="password-gate__form" onSubmit={handleSubmit} noValidate>
            <div className="password-gate__field">
              <input
                id="gate-password"
                type="password"
                className={`password-gate__input${error ? ' password-gate__input--error' : ''}`}
                value={value}
                onChange={e => { setValue(e.target.value); setError(false) }}
                autoComplete="current-password"
                autoFocus
                aria-label="Password"
              />
              {error && (
                <p className="password-gate__error" role="alert">Incorrect password. Try again.</p>
              )}
            </div>
            <CTA type="submit" variant="primary" className="password-gate__submit">Enter</CTA>
          </form>
        </div>
      </div>
    </dialog>
  )
}

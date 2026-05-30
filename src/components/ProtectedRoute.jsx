import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import PasswordGate from './PasswordGate'

export default function ProtectedRoute() {
  const { authed, login } = useAuth()
  const navigate = useNavigate()
  if (!authed) return <PasswordGate onSuccess={login} onDismiss={() => navigate('/')} />
  return <Outlet />
}

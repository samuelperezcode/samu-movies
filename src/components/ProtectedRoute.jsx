import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// eslint-disable-next-line react/prop-types
function ProtectedRoute ({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  return isAuthenticated ? children : <Navigate to='/login' state={location} />
}

export default ProtectedRoute

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const PrivteRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  const MySwal = withReactContent(Swal);
  if (user && user.uid) {
    return children;
  }
  if (loading) {
    return <div>Lading...</div>
  }

  return <Navigate to="/login" state={{ from: location }} replace>

    {MySwal.fire({
      title: <strong>Warning</strong>,
      html: <h5>You Need First Log In</h5>,
      icon: 'warning'
    })}


  </Navigate>
};

export default PrivteRoute;
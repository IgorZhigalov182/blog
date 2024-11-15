import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props;

  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some(role => userRoles?.includes(role));
  }, []);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};

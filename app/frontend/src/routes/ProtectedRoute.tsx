import LoadingSpinner from "@/components/loading-spinner";
import useAuth from "@/context/auth-context";
import { RoleEnumType } from "@/lib/enums";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

interface ProtectedRouteProps {
  allowedRoles?: RoleEnumType[];
}
/**
 * This component checks if a JWT token is present in the local storage.
 * If the token is found, it renders the given component.
 * Otherwise, it redirects the user to the login page.
 */
const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, userRole, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  if (!isAuthenticated) {
    toast.error("You must be logged in to access this page.");
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

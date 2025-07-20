import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/auth-context";
import { ProtectedRoute } from "@/routes/";
import Layout from "@/components/layout";

// Error pages
const Forbidden = lazy(() => import("@/pages/error/403"));
const NotFound = lazy(() => import("@/pages/error/404"));
const ServerError = lazy(() => import("@/pages/error/500"));
const ServiceUnavailablePage = lazy(() => import("@/pages/error/503"));

// Auth pages
const SignInPage = lazy(() => import("@/pages/signin/page"));
const SignUpPage = lazy(() => import("@/pages/signup/page"));
const LandingPage = lazy(() => import("@/pages/landing/page"));
const AboutPage = lazy(() => import("@/pages/about/page"));
const FeaturesPage = lazy(() => import("@/pages/features/page"));
const PricingPage = lazy(() => import("@/pages/pricing/page"));
const MusicDashboard = lazy(() => import("@/pages/dashboard/page"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/features",
        element: <FeaturesPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/pricing",
        element: <PricingPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/forbidden",
        element: <Forbidden />,
    },
    {
        path: "/server-error",
        element: <ServerError />,
    },
    {
        path: "/maintenance",
        element: <ServiceUnavailablePage />,
    },
    {
        path: "/signin",
        element: <SignInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/user",
        element: (
            <AuthProvider>
                <Layout>
                    <ProtectedRoute allowedRoles={['user']} />
                </Layout>
            </AuthProvider>
        ),
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: "dashboard", element: <MusicDashboard /> },
        ],
    },
]);

export default router;

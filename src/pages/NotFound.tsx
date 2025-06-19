import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/seo/Seo';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout showBreadcrumbs={false}>
      <Seo
        title="Page Not Found | Somerhaus Cincinnati"
        description="The page you requested could not be found."
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;


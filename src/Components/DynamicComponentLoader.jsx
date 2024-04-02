// DynamicComponentLoader.js

import React, { Suspense } from "react";

// This function dynamically imports a component
const loadComponent = (componentPromise) => {
  const LazyComponent = React.lazy(() => componentPromise);
  return <LazyComponent />;
};

// This component wraps the lazy-loaded component with Suspense
const DynamicComponentLoader = ({ componentPromise, fallback }) => (
  <Suspense fallback={fallback}>{loadComponent(componentPromise)}</Suspense>
);

export default DynamicComponentLoader;

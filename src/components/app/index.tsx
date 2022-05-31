import React, { FC, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styles from "./App.module.css";

// Create a client
const queryClient = new QueryClient();

const App: FC = () => {
  const Tester = React.lazy(() => import("@/components/tester"));

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Tester />
        </Suspense>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;

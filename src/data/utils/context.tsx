import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      suspense: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      retry: false
    }
  }
});

type Props = {
  children?: React.ReactNode;
};

export const DataProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Alert, Box, Button, Typography } from "@mui/material";
import { ErrorInfo, Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { PageSpinner } from "./PageSpinner";

const UnhandledError: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Alert severity="error">
        <Typography variant="h4">Something went wrong:</Typography>
        <pre>{error?.message}</pre>
        <div>
          <code>{JSON.stringify((error as any)?.body)}</code>
        </div>
        <Button sx={{ my: 2 }} variant="outlined" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </Alert>
    </Box>
  );
};

const errorHandler = (error: Error, info: ErrorInfo) => {
  // eslint-disable-next-line no-console
  console.log(error);
  // eslint-disable-next-line no-console
  console.log(info);
};

export const Boundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const key = window.location.href;

  return (
    <ErrorBoundary key={key} FallbackComponent={UnhandledError} onError={errorHandler}>
      <Suspense
        fallback={
          <Box sx={{ height: "calc(100vh - 64px)", display: "flex" }}>
            <PageSpinner />
          </Box>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

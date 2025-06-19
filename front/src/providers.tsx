'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router';

const Providers = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Toaster position={'top-center'} />
        {children}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Providers;

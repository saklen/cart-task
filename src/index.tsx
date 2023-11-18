import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React from 'react';
import App from './App.tsx'

const client = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  rootElement
);

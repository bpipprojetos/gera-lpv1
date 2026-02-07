import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@cg/components/ui/sonner";
import NotFound from "@cg/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@cg/pages/Home";
import { PrivacyPolicy } from "@cg/pages/PrivacyPolicy";

function Router() {
  return (
    <WouterRouter base="/clinica-gera-cg">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/politica-privacidade" component={PrivacyPolicy} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

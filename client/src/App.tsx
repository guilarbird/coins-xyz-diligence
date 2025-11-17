import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CoreOperations from "./pages/CoreOperations";
import Licensing from "./pages/Licensing";
import Expansion from "./pages/Expansion";
import ComingSoon from "./pages/ComingSoon";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/core-operations"} component={CoreOperations} />
      <Route path={"/licensing"} component={Licensing} />
      <Route path={"/expansion"} component={Expansion} />
      <Route path={"/payments"}>
        {() => <ComingSoon title="Payments" description="B2B cross-border payment infrastructure analysis" />}
      </Route>
      <Route path={"/exchange"}>
        {() => <ComingSoon title="Exchange" description="Retail crypto exchange operations and metrics" />}
      </Route>
      <Route path={"/trade-desk"}>
        {() => <ComingSoon title="Trade Desk" description="OTC trading services and institutional clients" />}
      </Route>
      <Route path={"/financials"}>
        {() => <ComingSoon title="Financial Projections" description="Revenue forecasts and profitability analysis" />}
      </Route>
      <Route path={"/team"}>
        {() => <ComingSoon title="Team & Operations" description="Leadership team and operational structure" />}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

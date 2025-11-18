import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Overview from "./pages/Overview";
import CoreOperations from "./pages/CoreOperations";
import Licensing from "./pages/Licensing";
import Expansion from "./pages/Expansion";
import CompetitiveLandscape from "./pages/CompetitiveLandscape";
import TheModel from "./pages/TheModel";
import Markets from "./pages/Markets";
import Blueprint from "./pages/Blueprint";
import Metrics from "./pages/Metrics";
import Infrastructure from "./pages/Infrastructure";
import Community from "./pages/Community";
import Regulation from "./pages/Regulation";
import InvestorQA from "./pages/InvestorQA";
import OnChainResearch from "./pages/OnChainResearch";
import ApiDocs from "./pages/ApiDocs";
import ComingSoon from "./pages/ComingSoon";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
        <Route path="/" component={Overview} />
      <Route path={"/core-operations"} component={CoreOperations} />
      <Route path={"/licensing"} component={Licensing} />
      <Route path={"/expansion"} component={Expansion} />
      <Route path={"/competitive-landscape"} component={CompetitiveLandscape} />
      <Route path={"/the-model"} component={TheModel} />
      <Route path={"/markets"} component={Markets} />
      <Route path={"/blueprint"} component={Blueprint} />
      <Route path={"/metrics"} component={Metrics} />
      <Route path={"/infrastructure"} component={Infrastructure} />
      <Route path={"/community"} component={Community} />
      <Route path={"/regulation"} component={Regulation} />
      <Route path="/investor-qa" component={InvestorQA} />
      <Route path="/on-chain-research" component={OnChainResearch} />
      <Route path={"/api-docs"} component={ApiDocs} />
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
        switchable
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

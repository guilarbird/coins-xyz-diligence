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
import DataAI from "./pages/DataAI";
import Infrastructure from "./pages/Infrastructure";
import Community from "./pages/Community";
import Regulation from "./pages/Regulation";
import InvestorQA from "./pages/InvestorQA";
import OnChainResearch from "./pages/OnChainResearch";
import ApiDocs from "./pages/ApiDocs";
import ComingSoon from "./pages/ComingSoon";
import SimpleLogin from "./pages/SimpleLogin";
import Signup from "./pages/Signup";
import RequestAccess from "./pages/RequestAccess";
import AdminDashboard from "./pages/AdminDashboard";
import { SimpleAuthGuard } from "./components/SimpleAuthGuard";
import ChangePassword from "./pages/ChangePassword";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Public auth routes */}
      <Route path="/simple-login" component={SimpleLogin} />
      <Route path="/signup" component={Signup} />
      <Route path="/request-access" component={RequestAccess} />
      <Route path="/change-password" component={ChangePassword} />
      
      {/* Admin routes */}
      <Route path="/admin">
        {() => (
          <SimpleAuthGuard>
            <AdminDashboard />
          </SimpleAuthGuard>
        )}
      </Route>
      
      {/* Protected content routes */}
      <Route path="/">
        {() => (
          <SimpleAuthGuard>
            <Overview />
          </SimpleAuthGuard>
        )}
      </Route>
      <Route path={"/core-operations"}>
        {() => (
          <SimpleAuthGuard>
            <CoreOperations />
          </SimpleAuthGuard>
        )}
      </Route>
      <Route path={"/licensing"}>
        {() => (<SimpleAuthGuard><Licensing /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/expansion"}>
        {() => (<SimpleAuthGuard><Expansion /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/competitive-landscape"}>
        {() => (<SimpleAuthGuard><CompetitiveLandscape /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/the-model"}>
        {() => (
          <SimpleAuthGuard>
            <TheModel />
          </SimpleAuthGuard>
        )}
      </Route>
      <Route path={"/markets"}>
        {() => (
          <SimpleAuthGuard>
            <Markets />
          </SimpleAuthGuard>
        )}
      </Route>
      <Route path={"/blueprint"}>
        {() => (<SimpleAuthGuard><Blueprint /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/data-ai"}>
        {() => (<SimpleAuthGuard><DataAI /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/infrastructure"}>
        {() => (<SimpleAuthGuard><Infrastructure /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/community"}>
        {() => (<SimpleAuthGuard><Community /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/regulation"}>
        {() => (<SimpleAuthGuard><Regulation /></SimpleAuthGuard>)}
      </Route>
      <Route path="/investor-qa">
        {() => (<SimpleAuthGuard><InvestorQA /></SimpleAuthGuard>)}
      </Route>
      <Route path="/on-chain-research">
        {() => (<SimpleAuthGuard><OnChainResearch /></SimpleAuthGuard>)}
      </Route>
      <Route path={"/api-docs"}>
        {() => (<SimpleAuthGuard><ApiDocs /></SimpleAuthGuard>)}
      </Route>
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

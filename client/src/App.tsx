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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequestAccess from "./pages/RequestAccess";
import AdminDashboard from "./pages/AdminDashboard";
import AuthGuard from "./components/AuthGuard";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Public auth routes */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/request-access" component={RequestAccess} />
      
      {/* Admin routes */}
      <Route path="/admin">
        {() => (
          <AuthGuard requireAdmin>
            <AdminDashboard />
          </AuthGuard>
        )}
      </Route>
      
      {/* Protected content routes */}
      <Route path="/">
        {() => (
          <AuthGuard>
            <Overview />
          </AuthGuard>
        )}
      </Route>
      <Route path={"/core-operations"}>
        {() => (
          <AuthGuard>
            <CoreOperations />
          </AuthGuard>
        )}
      </Route>
      <Route path={"/licensing"}>
        {() => (<AuthGuard><Licensing /></AuthGuard>)}
      </Route>
      <Route path={"/expansion"}>
        {() => (<AuthGuard><Expansion /></AuthGuard>)}
      </Route>
      <Route path={"/competitive-landscape"}>
        {() => (<AuthGuard><CompetitiveLandscape /></AuthGuard>)}
      </Route>
      <Route path={"/the-model"}>
        {() => (
          <AuthGuard>
            <TheModel />
          </AuthGuard>
        )}
      </Route>
      <Route path={"/markets"}>
        {() => (
          <AuthGuard>
            <Markets />
          </AuthGuard>
        )}
      </Route>
      <Route path={"/blueprint"}>
        {() => (<AuthGuard><Blueprint /></AuthGuard>)}
      </Route>
      <Route path={"/data-ai"}>
        {() => (<AuthGuard><DataAI /></AuthGuard>)}
      </Route>
      <Route path={"/infrastructure"}>
        {() => (<AuthGuard><Infrastructure /></AuthGuard>)}
      </Route>
      <Route path={"/community"}>
        {() => (<AuthGuard><Community /></AuthGuard>)}
      </Route>
      <Route path={"/regulation"}>
        {() => (<AuthGuard><Regulation /></AuthGuard>)}
      </Route>
      <Route path="/investor-qa">
        {() => (<AuthGuard><InvestorQA /></AuthGuard>)}
      </Route>
      <Route path="/on-chain-research">
        {() => (<AuthGuard><OnChainResearch /></AuthGuard>)}
      </Route>
      <Route path={"/api-docs"}>
        {() => (<AuthGuard><ApiDocs /></AuthGuard>)}
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

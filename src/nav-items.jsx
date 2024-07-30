import { Home, DollarSign, Users, History, List } from "lucide-react";
import Index from "./pages/Index.jsx";
import USDashboard from "./pages/USDashboard.jsx";
import CMDashboard from "./pages/CMDashboard.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "US Dashboard",
    to: "/us-dashboard",
    icon: <DollarSign className="h-4 w-4" />,
    page: <USDashboard />,
  },
  {
    title: "CM Dashboard",
    to: "/cm-dashboard",
    icon: <Users className="h-4 w-4" />,
    page: <CMDashboard />,
  },
  // Add placeholder routes for other pages
  {
    title: "New Transaction",
    to: "/new-transaction",
    icon: <DollarSign className="h-4 w-4" />,
    page: <div>New Transaction Page</div>,
  },
  {
    title: "Manage Accounts",
    to: "/manage-accounts",
    icon: <Users className="h-4 w-4" />,
    page: <div>Manage Accounts Page</div>,
  },
  {
    title: "Transaction History",
    to: "/transaction-history",
    icon: <History className="h-4 w-4" />,
    page: <div>Transaction History Page</div>,
  },
  {
    title: "Pending Transactions",
    to: "/pending-transactions",
    icon: <List className="h-4 w-4" />,
    page: <div>Pending Transactions Page</div>,
  },
];

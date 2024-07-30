import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const USDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">US Executive Dashboard</h1>
      <div className="space-y-4">
        <Button onClick={() => navigate('/new-transaction')}>Initiate New Transaction</Button>
        <Button onClick={() => navigate('/manage-accounts')}>Manage Employee Accounts</Button>
        <Button onClick={() => navigate('/transaction-history')}>View Transaction History</Button>
        <Button variant="outline" onClick={() => navigate('/')}>Logout</Button>
      </div>
    </div>
  );
};

export default USDashboard;

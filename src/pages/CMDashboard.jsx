import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CMDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Cameroon Executive Dashboard</h1>
      <div className="space-y-4">
        <Button onClick={() => navigate('/pending-transactions')}>View Pending Transactions</Button>
        <Button onClick={() => navigate('/transaction-history')}>View Transaction History</Button>
        <Button variant="outline" onClick={() => navigate('/')}>Logout</Button>
      </div>
    </div>
  );
};

export default CMDashboard;

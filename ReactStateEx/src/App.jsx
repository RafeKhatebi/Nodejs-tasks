import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";

export default function App() {
  // Dynamic component rendering based on loading state
  const isLoading = false; // Change this to true to see the loading state
  function renderContent() {
    if (isLoading) {
      return <Loading />;
    } else {
      return <Dashboard />;
    }
  }
  return (
    <div>
      {renderContent()}
    </div>
  );
}
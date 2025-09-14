import RecordForm from "../components/RecordForm";
import "./Admin.css";

// This page serves as the admin portal where new records can be added to the store.
// It renders the RecordForm component, which handles input and submission logic.
// Keeping this page simple and focused promotes modularity and separation of concerns.

function Admin() {
  return (
    <div className="admin-container">
      <RecordForm />
    </div>
  );
}

export default Admin;
// This component serves as the landing page for the Vinyl Vault site.
// It fetches and displays store information such as name, description, and contact.
// This ensures users have immediate access to store context and branding on page load.

import { useEffect, useState } from 'react';

function Home() {
  // useState hook to store the fetched store information (name, description, phone).
  const [storeInfo, setStoreInfo] = useState(null);

  // useEffect hook used to fetch store data from the mock backend (JSON Server) once on mount.
  // The server is hosted at http://localhost:3001/store_info, and we expect an array with one object.
  useEffect(() => {
    fetch('http://localhost:3001/store_info')
      .then((res) => res.json())
      .then((data) => setStoreInfo(data[0]))
      .catch((err) => console.error("Error fetching store info:", err));
  }, []);

  // Show a loading message while the fetch request is in progress and storeInfo is still null.
  if (!storeInfo) return <p>Loading store info...</p>;

  // Once the store info is fetched, display the name, description, and contact number.
  // These are populated dynamically from the state object.
  return (
    <div>
      <h1>{storeInfo.name}</h1>
      <p>{storeInfo.description}</p>
      <p>Contact: {storeInfo.phone_number}</p>
    </div>
  );
}

export default Home;
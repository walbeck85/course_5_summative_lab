import { useEffect, useState } from 'react';

function Home() {
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/store_info')
      .then((res) => res.json())
      .then((data) => setStoreInfo(data[0]))
      .catch((err) => console.error("Error fetching store info:", err));
  }, []);

  if (!storeInfo) return <p>Loading store info...</p>;

  return (
    <div>
      <h1>{storeInfo.name}</h1>
      <p>{storeInfo.description}</p>
      <p>Contact: {storeInfo.phone_number}</p>
    </div>
  );
}

export default Home;
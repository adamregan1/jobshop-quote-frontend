import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://jobshop-quote-app.onrender.com";

function App() {
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("quantity", quantity);

    try {
      const res = await axios.post(`${API_URL}/generate-quote`, formData);
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse("Error connecting to backend.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Shop Quote</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;

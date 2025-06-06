import React, { useState, useEffect } from 'react';
import { Employees } from '../../APIRequest/APIRequest';

function TestComp(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await Employees();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []); // শুধু একবার চলবে

  if (loading) {
    return <p>লোড হচ্ছে...</p>;
  }

  if (error) {
    return <p>একটা সমস্যা হয়েছে: {error}</p>;
  }
  return (
    <div>
      <h1>API থেকে পাওয়া তথ্য:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>কোনো ডেটা পাওয়া যায়নি।</p>
      )}
      {props.children}

    </div>
    
  );
}

export default TestComp;
import { useState } from 'react';

const useSignUp = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (data:any) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/user/create-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      setResponse(result);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    response,
    error,
    loading,
    signUp,
  };
};

export default useSignUp;

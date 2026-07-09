import { useState } from "react";

export default function useCalculator() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const clearResults = () => {
    setResult(null);
    clearMessages();
  };

  return {
    loading,
    setLoading,

    message,
    setMessage,

    error,
    setError,

    result,
    setResult,

    clearMessages,
    clearResults,
  };
}
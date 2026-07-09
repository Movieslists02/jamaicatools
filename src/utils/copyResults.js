export async function copyResults(text, setMessage) {
  try {
    await navigator.clipboard.writeText(text);

    setMessage("✅ Results copied to clipboard.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  } catch {
    setMessage("❌ Unable to copy results.");
  }
}


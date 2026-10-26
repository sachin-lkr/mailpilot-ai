
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../utils/api.js";

export default function useEmailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState("");

  // Send the prompt to the backend AI endpoint
  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error("Please enter a prompt first.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post("/ai/generate-email", {
        prompt: prompt.trim(),
      });

      setResult(data);
      toast.success("Your emails are ready!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate emails. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Copy any generated content
  const copyToClipboard = async (text, type) => {
    if (!text) {
      toast.error("Nothing to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast.success("Copied to clipboard!");

      // Clear the copied indicator after 2 seconds
      setTimeout(() => {
        setCopied((current) => (current === type ? "" : current));
      }, 2000);
    } catch {
      toast.error("Could not copy. Please try again.");
    }
  };

  return {
    prompt,
    setPrompt,
    loading,
    result,
    copied,
    handleGenerate,
    copyToClipboard,
  };
}

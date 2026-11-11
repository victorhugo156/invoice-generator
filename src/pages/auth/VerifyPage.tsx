import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FileTextIcon } from "@phosphor-icons/react";
import axios from "axios";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";

type Status = "verifying" | "error";

export function VerifyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState<Status>("verifying");
  const [errorMessage, setErrorMessage] = useState("");

  // The token can only be used once, so this must never run twice.
  const hasVerified = useRef(false);

  const token = searchParams.get("token");

  useEffect(() => {
    if (hasVerified.current) return;
    hasVerified.current = true;

    async function verifyToken() {
      if (!token) {
        setStatus("error");
        setErrorMessage("This page needs a login link. Please request a new one.");
        return;
      }

      try {
        await api.get("/auth/verify", { params: { token } });
        await queryClient.invalidateQueries({ queryKey: ["me"] });
        navigate("/dashboard", { replace: true });
      } catch (error) {
        setStatus("error");

        if (axios.isAxiosError(error) && error.response?.status === 401) {
          setErrorMessage("This link has expired or has already been used.");
        } else {
          setErrorMessage("We could not sign you in right now. Please try again.");
        }
      }
    }

    verifyToken();
  }, [token, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[440px] rounded-lg border border-gray-200 bg-white px-8 py-14 text-center shadow-md max-[440px]:px-5">
        <FileTextIcon size={32} className="mx-auto text-purple-700" />

        {status === "verifying" ? (
          <>
            <h1 className="mt-2 text-2xl font-bold text-gray-800">Signing you in…</h1>
            <p className="mt-4 text-sm text-gray-400">Verifying your login link.</p>
            <div className="mx-auto mt-8 h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />
          </>
        ) : (
          <>
            <h1 className="mt-2 text-2xl font-bold text-gray-800">Login failed</h1>
            <p className="mt-4 text-sm text-gray-400">{errorMessage}</p>
            <Link
              to="/"
              className="mt-8 inline-block text-xxs font-bold uppercase text-purple-700"
            >
              Back to login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
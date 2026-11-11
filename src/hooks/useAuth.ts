import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  name: string;
  email: string;
};



export function useAuth() {
    const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await api.get<{ user: User }>("/auth/me");
      return response.data.user;
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  async function logout() {

    try {
      await api.post("/auth/logout");
    } finally {
      queryClient.removeQueries({ queryKey: ["me"] });
      navigate("/", { replace: true });
    }
  }

  return {
    user: data ?? null,
    isLoading,
    isAuthenticated: !isError && !!data,
    logout,
  };
}


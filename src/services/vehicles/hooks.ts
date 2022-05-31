import { useQuery } from "react-query";
import { getVehicles } from "./api";

export const useVehiclesList = () => {
  // Queries
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      return await getVehicles;
    },
    select: (data) => data?.data?.data,
    cacheTime: 10000,
    staleTime: 3000,
    refetchOnWindowFocus: true,
  });
};

// Mutations

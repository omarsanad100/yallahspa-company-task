import { useQuery } from "@tanstack/react-query";
import { fetchServices, fetchServiceTimes } from "../api/servicesApi";

export const useServices = () =>
  useQuery({ queryKey: ["services"], queryFn: fetchServices });

export const useServiceTimes = (id: string) =>
  useQuery({
    queryKey: ["serviceTimes", id],
    queryFn: () => fetchServiceTimes(id),
    enabled: !!id,
  });

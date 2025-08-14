import { useQuery } from "@tanstack/react-query";
import { fetchServices, fetchServiceById } from "../api/servicesApi";

export const useServices = () =>
  useQuery({ queryKey: ["services"], queryFn: fetchServices });

export const useServiceById = (id: string) =>
  useQuery({
    queryKey: ["service", id],
    queryFn: () => fetchServiceById(id),
    enabled: !!id,
  });

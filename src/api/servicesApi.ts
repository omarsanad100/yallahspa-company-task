import axios from "axios";

const BASE_URL = "https://n8n.srv817545.hstgr.cloud/webhook";

// Fetch all services
export const fetchServices = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/28d361b3-db44-4ceb-bf3c-2450b7b46538`
    );
    return Array.isArray(data.services) ? data.services : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw new Error("Failed to load services");
  }
};

// Fetch one service by ID
export const fetchServiceById = async (id: string) => {
  try {
    const services = await fetchServices();
    const service = services.find((s: any) => s.id === Number(id));

    if (!service) {
      throw new Error("Service not found");
    }

    return service;
  } catch (error) {
    console.error(`Failed to fetch service ${id}:`, error);
    throw error;
  }
};

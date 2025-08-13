import axios from "axios";

const BASE_URL = "https://n8n.srv817545.hstgr.cloud/webhook";

export const fetchServices = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/28d361b3-db44-4ceb-bf3c-2450b7b46538`
  );
  return data;
};

export const fetchServiceTimes = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/times/${id}`);
  return data;
};

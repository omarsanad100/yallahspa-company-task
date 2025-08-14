import { useServices } from "../hooks/useServices";
import ServiceList from "../components/ServiceList";

const Services = () => {
  const { data, isLoading, isError } = useServices();

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      {isError ? (
        <div className="bg-red-100 text-red-600 p-4 rounded">
          ❌ Failed to load services.
        </div>
      ) : (
        <ServiceList services={data || []} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Services;

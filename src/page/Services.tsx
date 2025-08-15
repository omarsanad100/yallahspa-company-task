import { useServices } from "../hooks/useServices";
import ServiceList from "../components/ServiceList";

const Services = () => {
  const { data, isLoading, isError } = useServices();

  return (
    <div className="p-6  min-h-screen">
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

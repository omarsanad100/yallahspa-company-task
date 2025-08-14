import ServiceCard from "./ServiceCard";
import ServiceCardSkeleton from "./ServiceCardSkeleton";

type Props = {
  services: any[];
  isLoading: boolean;
};

const ServiceList = ({ services, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No services available</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          name={service.name_en}
          image={service.image}
          type={service.type}
        />
      ))}
    </div>
  );
};

export default ServiceList;

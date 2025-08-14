const ServiceCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;

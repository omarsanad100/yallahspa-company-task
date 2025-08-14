import { useParams } from "react-router-dom";
import { useServiceById } from "../hooks/useServices";
import { useState, useEffect } from "react";
import ServiceDetailsUI from "./ServiceDetailsUI";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: service, isLoading, isError } = useServiceById(id || "");
  const [selectedPrice, setSelectedPrice] = useState<any>(null);
  const [selectedRepeat, setSelectedRepeat] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Set initial selections when service data loads
  useEffect(() => {
    if (service?.prices?.length) {
      setSelectedPrice(service.prices[0]);
    }
    if (service?.repeats?.length) {
      setSelectedRepeat(service.repeats[0]);
    }
  }, [service]);

  // Calculate total price
  useEffect(() => {
    if (!selectedPrice) return;

    let calculatedPrice = selectedPrice.price;
    if (service?.type === "custom" && selectedRepeat) {
      calculatedPrice *= selectedRepeat.number_of_sessions;
    }
    setTotalPrice(calculatedPrice);
  }, [selectedPrice, selectedRepeat, service]);

  return (
    <ServiceDetailsUI
      service={service}
      isLoading={isLoading}
      isError={isError}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      selectedRepeat={selectedRepeat}
      setSelectedRepeat={setSelectedRepeat}
      totalPrice={totalPrice}
    />
  );
};

export default ServiceDetails;

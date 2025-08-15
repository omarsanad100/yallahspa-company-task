import BackButton from "../components/Button";

interface ServiceDetailsUIProps {
  service: any;
  isLoading: boolean;
  isError: boolean;
  selectedPrice: any;
  setSelectedPrice: (price: any) => void;
  selectedRepeat: any;
  setSelectedRepeat: (repeat: any) => void;
  totalPrice: number;
  theme: string;
}

const ServiceDetailsUI = ({
  service,
  isLoading,
  isError,
  selectedPrice,
  setSelectedPrice,
  selectedRepeat,
  setSelectedRepeat,
  totalPrice,
  theme,
}: ServiceDetailsUIProps) => {
  if (isLoading)
    return (
      <div
        data-theme-mode={theme}
        className="p-6 bg-white/50 min-h-screen data-[theme-mode=light]:bg-white data-[theme-mode=dark]:bg-gray-900 data-[theme-mode=dark]:text-gray-800  transition-colors
        "
      >
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );

  if (isError || !service)
    return (
      <div className="flex justify-center items-center min-h-screen bg-white/50">
        <div className="bg-red-100 border border-red-400 px-10 py-6 rounded-lg shadow-lg text-center animate-pulse">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Error 404</h1>
          <p className="text-gray-700 mb-4">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="flex justify-center">
            <BackButton />
          </div>
        </div>
      </div>
    );

  return (
    <div
      data-theme-mode={theme}
      className="p-6 bg-white/50 min-h-screen  data-[theme-mode=light]:bg-white data-[theme-mode=dark]:bg-black data-[theme-mode=dark]:text-gray-800  transition-colors
       "
    >
      <BackButton />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.name_en}
          className="w-full h-96 object-cover"
        />

        <div
          data-theme-mode={theme}
          className="p-6  bg-white/50 min-h-screen  data-[theme-mode=light]:bg-white data-[theme-mode=dark]:bg-black data-[theme-mode=dark]:text-gray-800  transition-colors"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-800 italic">
              {service.name_en}
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                service.type === "custom"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {service.type === "custom" ? "Custom Package" : "Single Session"}
            </span>
          </div>

          <p className="text-gray-600 mb-6 font-bold">
            {service.description_en}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Options */}
            <div className="border rounded-lg p-4 dark:text-white">
              <h2 className="text-xl font-semibold mb-3">Session Options</h2>

              {service.prices?.length > 0 && (
                <div className="space-y-3">
                  {service.prices.map((price: any) => (
                    <div
                      key={price.duration}
                      className={`p-3 border rounded-lg cursor-pointer transition-all dark:bg-gray-400 dark:text-white${
                        selectedPrice?.duration === price.duration
                          ? "border-green-500 bg-green-50"
                          : "hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPrice(price)}
                    >
                      <div className="flex justify-between items-center dark:text-white">
                        <span className="font-medium">{price.label}</span>
                        <span className="font-bold">${price.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Repeat Options (Custom Services Only) */}
            {service.type === "custom" && service.repeats?.length > 0 && (
              <div className="border rounded-lg p-4 ">
                <h2 className="text-xl font-semibold mb-3 dark:text-white">
                  Package Options
                </h2>

                <div className="space-y-3">
                  {service.repeats.map((repeat: any) => (
                    <div
                      key={repeat.name_en}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedRepeat?.name_en === repeat.name_en
                          ? "border-purple-500 bg-purple-50"
                          : "hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedRepeat(repeat)}
                    >
                      <div className="font-medium">{repeat.name_en}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {repeat.number_of_sessions} sessions
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Display */}
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-400 dark:text-white rounded-lg ">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Total Price</h3>
                {service.type === "custom" && selectedRepeat && (
                  <p className="text-sm text-gray-600">
                    {selectedRepeat.number_of_sessions} sessions × $
                    {selectedPrice.price}/session
                  </p>
                )}
              </div>
              <div className="text-2xl font-bold text-green-600">
                ${totalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsUI;

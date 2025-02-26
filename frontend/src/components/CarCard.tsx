// frontend/src/components/CarCard.tsx
interface CarCardProps {
    brand: string;
    model: string;
    price: number;
    mileage: number;
    image: string;
    isPromoted?: boolean; 
  }
  
  const CarCard = ({ brand, model, price, mileage, image, isPromoted }: CarCardProps) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative">
    {/* Promoted Badge */}
    {isPromoted && (
      <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
        PROMOTED
      </div>
    )}
    {/* Image */}    
      <img src={image} alt={`${brand} ${model}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{brand} {model}</h3>
        <p className="text-gray-600 mt-2">${price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">{mileage.toLocaleString()} miles</p>
      </div>
    </div>
  );
  
  export default CarCard;
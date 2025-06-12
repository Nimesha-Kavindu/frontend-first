import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center">
      <h1 className="text-[120px] font-bold text-cyan-400 drop-shadow-lg animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-300 text-lg mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
}

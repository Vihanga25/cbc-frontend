export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center">
        <h1 className="text-9xl font-extrabold text-pink-500">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
          Go Home
        </a>
      </div>
    );
  }
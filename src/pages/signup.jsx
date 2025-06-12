export default function SignupPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
            <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="username">
                Username
                </label>
                <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
            >
                Sign Up
            </button>
            </form>
        </div>
        </div>
    );
}
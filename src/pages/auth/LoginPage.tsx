export function LoginPage() {
  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">Login</h1>
      <p className="mt-2 text-sm text-gray-600">
        This screen is ready for your login form when you start connecting the backend.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            disabled
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
          <input
            disabled
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm"
            placeholder="Your password"
          />
        </div>

        <button className="w-full rounded-lg bg-purple-700 px-4 py-3 font-semibold text-white">
          Login
        </button>
      </div>
    </section>
  );
}

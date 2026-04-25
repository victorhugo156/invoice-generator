export function SignUpPage() {
  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">Sign up</h1>
      <p className="mt-2 text-sm text-gray-400">
        This screen is ready for your registration form later.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800">Full name</label>
          <input
            disabled
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800">Email</label>
          <input
            disabled
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800">Password</label>
          <input
            disabled
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800"
            placeholder="Create a password"
          />
        </div>

        <button className="w-full rounded-lg bg-purple-700 px-4 py-3 font-semibold text-white">
          Create account
        </button>
      </div>
    </section>
  );
}

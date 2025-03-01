export default function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="bg-black/50 fixed top-0 right-0 left-0 z-50 h-full flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow p-5">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>

          <div className="text-center">
            <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
              Login to your account
            </p>
            <p className="mt-2 text-sm leading-4 text-slate-600">
              You must be logged in to perform this action.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            {[
              { src: "https://www.svgrepo.com/show/475656/google-color.svg", text: "Google" },
            ].map(({ src, text }) => (
              <button
                key={text}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black"
              >
                <img src={src} alt={text} className="h-[18px] w-[18px]" />
                Continue with {text}
              </button>
            ))}
          </div>

          <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          <form className="w-full">
            <input
              name="email"
              type="email"
              required
              className="block w-full rounded-lg border px-3 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              placeholder="Email Address"
            />
            <input
              name="password"
              type="password"
              required
              className="mt-2 block w-full rounded-lg border px-3 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              placeholder="Password"
            />
            <p className="mb-3 mt-2 text-sm text-gray-500">
              <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a>
            </p>
            <button
              type="submit"
              className="w-full rounded-lg bg-black p-2 py-3 text-sm font-medium text-white focus:ring-2 focus:ring-black"
            >
              Continue
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?
            <a href="/signup" className="font-medium text-[#4285f4]"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
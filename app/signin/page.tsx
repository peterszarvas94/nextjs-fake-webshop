// import { loginUser } from "@/server/firebase";
import { cookies, headers } from "next/headers";

export default function SigninPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      rawEmail: formData.get('email'),
      rawPassword: formData.get('password')
    }

    console.log(rawFormData);

    const email = rawFormData.rawEmail as string;
    const password = rawFormData.rawPassword as string;

    if (!email || !password) {
      console.error("Missing email or password");
      return;
    }

    const cookieStore = cookies();
    console.log("C ", cookieStore.getAll());

    const headerStore = headers();
    const entries = headerStore.entries();
    for (const entry in entries) {
      console.log("E ", entry);
    }

    try {
      // const user = await loginUser(email, password);
      // const accessToken = await user.getIdTokenResult();
      // const refreshToken = user.refreshToken;

      // console.log(user);
      // console.log(accessToken);
      // console.log(refreshToken);

    } catch (error) {
      console.error(error);
      return;
    }

    // redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
        <form action={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">Or sign in with Google</p>
          <button className="mt-2 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
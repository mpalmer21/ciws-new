import {
  getCsrfToken,
  getSession,
  signIn,
  getProviders,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn({ csrfToken, providers }) {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const signinUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
    }

    return Router.push("/");
  };

  const signupUser = async (e) => {
    setMessage(null);
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message == "Registered succesfully") {
      let options = { redirect: false, email, password };
      const res = await signIn("credentials", options);
      return Router.push("/");
    }
  };
  return (
    <>
      <form>
        <div className="flex items-center min-h-screen bg-gray-50">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2"></div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <div className="flex justify-center"></div>
                  <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                    Login to Your Account
                  </h1>
                  <div>
                    <label className="block text-sm">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block mt-4 text-sm">Password</label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder=""
                      type="password"
                    />
                  </div>
                  <p className="mt-4">
                    <a
                      className="text-sm text-blue-600 hover:underline"
                      href="./forgot-password.html"
                    >
                      Forgot your password?
                    </a>
                  </p>
                  <p>{message}</p>

                  <button
                    onClick={(e) => signinUser(e)}
                    type="submit"
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    href="#"
                  >
                    Log in
                  </button>

                  <button
                    type="submit"
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    href="#"
                    onClick={(e) => signupUser(e)}
                  >
                    Sign up
                  </button>

                  <hr className="my-8" />

                  <div className="flex items-center justify-center gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {Object.values(providers).map((provider) => {
        if (provider.name === "Email" || provider.name === "Credentials") {
          return;
        }
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    //singed in
    return {
      redirect: { destinations: "/" },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  return {
    props: {
      csrfToken,
      providers,
    },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/

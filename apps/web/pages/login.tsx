"use client"
import "../styles/globals.css";
import axios, { AxiosError } from "axios";
import { useState, FormEvent } from "react";
import Cookies from "js-cookie";

interface LoginResponse {
  token: string;
  refreshToken?: string;
}

interface TokenOptions {
  secure: boolean;
  sameSite: "strict" | "lax" | "none";
  httpOnly: boolean;
  expires: number;
  path: string;
}

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setTokenCookie = (
    name: string, 
    token: string, 
    options: TokenOptions
  ): void => {
    Cookies.set(name, token, options);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Input validation
      if (!email || !email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      // Send email to the backend API
      const response = await axios.post<LoginResponse>(
        "/api/login",
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      const { token, refreshToken } = response.data;

      // Validate token structure (basic check)
      if (!token || typeof token !== 'string' || token.split('.').length !== 3) {
        throw new Error("Invalid token received");
      }

      // Store tokens in httpOnly cookies
      const commonCookieOptions: TokenOptions = {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
        expires: 7, // 7 days
        path: '/'
      };

      setTokenCookie("authToken", token, commonCookieOptions);

      if (refreshToken) {
        setTokenCookie("refreshToken", refreshToken, {
          ...commonCookieOptions,
          expires: 30, // 30 days
          path: '/api/refresh' // Restrict to refresh endpoint
        });
      }

      setMessage("Login successful! Redirecting...");
      // Implement redirect after successful login
      // router.push('/dashboard');

    } catch (error) {
      console.error("Login failed:", error instanceof Error ? error.message : error);

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        switch (axiosError.response?.status) {
          case 401:
            setMessage("Invalid credentials. Please try again.");
            break;
          case 429:
            setMessage("Too many attempts. Please try again later.");
            break;
          default:
            setMessage("Login failed. Please try again later.");
        }
      } else if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 absolute top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="w-[249px] h-[72px] float-left">
            <img src="/assets/logo.png" alt="Logo" />
          </span>
        </div>
      </header>

      <main className="flex-1 flex">
        {/* Left Section with Image */}
        <div className="relative hidden lg:flex lg:w-4/5">
  <div
    className="absolute inset-0 bg-[length:1300_1250] bg-no-repeat bg-bottom"
    style={{ backgroundImage: "url('/assets/background.png')" }}
  >
    <div className="absolute inset-0 flex justify-center top-40 p-12">
      <div className="space-y-4">
        <h1 className="text-white text-5xl font-bold leading-tight max-w-[600px]">
          Workwear That Works as Hard as Your Team.
        </h1>
        <p className="text-white text-2xl leading-relaxed max-w-[700px]">
          Premium-quality industrial uniforms trusted by leading brands. Bulk orders made easy with customisation options and fast nationwide delivery.
        </p>
      </div>
    </div>
  </div>
</div>

        
        <div className="w-full lg:w-1/2 flex items-center gap-10 bg-[#FFFAFF]">
          <div className="p-10 w-full space-y-8">
            <div>
              <h2 className="text-5xl pb-5 font-bold text-gray-900">Login/SignUp</h2>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-md text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 w-full flex justify-center py-3 px-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#800020] hover:bg-[#3d000f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                >
                  {isLoading ? "Verifying..." : "Verify Email"}
                </button>
              </div>
            </form>

            {message && (
              <p className={`text-sm ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

export default function LoginForm() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-1">
            Please enter your details to sign in
          </p>
        </div>

        <form action="" className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm mt-2"
          >
            Login
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-slate-200 w-full"></div>
            <span className="bg-white px-3 text-xs font-medium text-slate-400 uppercase tracking-wider absolute">
              or
            </span>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 font-medium text-sm transition-all shadow-sm"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-slate-900 hover:bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium text-sm transition-all shadow-sm"
            >
              <FaApple className="text-xl" />
              <span>Continue with Apple</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

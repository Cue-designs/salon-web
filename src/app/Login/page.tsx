"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

export default function LoginForm() {
  return (
    <main className="login-page">
      <div className="login-orbit login-orbit-one" aria-hidden="true" />
      <div className="login-orbit login-orbit-two" aria-hidden="true" />

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-heading">
          <span className="login-wordmark">MORROW <i>✳</i> HAIR HOUSE</span>
          <h1 id="login-title">Welcome <em>back.</em></h1>
          <p>Please enter your details to sign in</p>
        </div>

        <form action="" className="login-form">
          <div className="login-field">
            <label htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-submit">
            Sign in <span aria-hidden="true">↗</span>
          </button>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <div className="login-social">
            <button type="button" className="login-social-button">
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>

            <button type="button" className="login-social-button">
              <FaApple className="text-xl" />
              <span>Apple</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

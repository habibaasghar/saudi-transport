"use client";
import { useActionState } from "react";
import { login, type LoginState } from "./actions";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, {});
  return (
    <form action={action} className="card">
      <label>Email<input name="email" type="email" autoComplete="username" required /></label>
      <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
      {state.error && <p className="err" role="alert">{state.error}</p>}
      <button className="btn" disabled={pending}>{pending ? "Signing in..." : "Sign in"}</button>
    </form>
  );
}

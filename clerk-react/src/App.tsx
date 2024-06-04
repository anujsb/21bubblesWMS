import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginOptions from "./components/LoginOptions";
import { ClerkProvider } from "@clerk/clerk-react";

export default function App() {
  const VITE_CLERK_PUBLISHABLE_KEY_MANAGER = import.meta.env
    .VITE_CLERK_PUBLISHABLE_KEY_MANAGER;

  if (!VITE_CLERK_PUBLISHABLE_KEY_MANAGER) {
    throw new Error("Missing Publishable Key");
  }
  const VITE_CLERK_PUBLISHABLE_KEY_EMPLOYEE = import.meta.env
    .VITE_CLERK_PUBLISHABLE_KEY_EMPLOYEE;

  if (!VITE_CLERK_PUBLISHABLE_KEY_EMPLOYEE) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginOptions />} />
        <Route
          path="/auth/manager"
          element={
            <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY_MANAGER}>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ClerkProvider>
          }
        />
        <Route
          path="/auth/employee"
          element={
            <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY_EMPLOYEE}>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ClerkProvider>
          }
        />
      </Routes>
    </Router>
  );
}

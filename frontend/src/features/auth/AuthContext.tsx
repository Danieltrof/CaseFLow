import { createContext, useContext, useState } from "react";

interface AuthUser {
  email: string;
  role: string;
}

interface AuthContextType {
  user: AuthUser | null;
  loginUser: (token: string, email: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const storedToken = localStorage.getItem("caseflow_token");
  const storedEmail = localStorage.getItem("caseflow_email");
  const storedRole = localStorage.getItem("caseflow_role");

  const [user, setUser] = useState<AuthUser | null>(
    storedToken && storedEmail && storedRole
      ? { email: storedEmail, role: storedRole }
      : null
  );

  const loginUser = (token: string, email: string, role: string) => {
    localStorage.setItem("caseflow_token", token);
    localStorage.setItem("caseflow_email", email);
    localStorage.setItem("caseflow_role", role);

    setUser({ email, role });
  };

  const logout = () => {
    localStorage.removeItem("caseflow_token");
    localStorage.removeItem("caseflow_email");
    localStorage.removeItem("caseflow_role");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logout,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
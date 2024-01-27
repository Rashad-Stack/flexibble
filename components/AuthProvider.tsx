"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

export default function AuthProvider() {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      console.log(res);

      setProviders(res as Providers | null);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider) => (
          <button onClick={() => signIn(provider.id)} key={provider.id}>
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    );
  }
}

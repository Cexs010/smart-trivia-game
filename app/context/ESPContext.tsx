import { createContext, useContext, useState } from "react";

const ESPContext = createContext<any>(null);

export function ESPProvider({ children }: { children: React.ReactNode }) {
  const [ip, setIp] = useState("");
  return <ESPContext.Provider value={{ ip, setIp }}>{children}</ESPContext.Provider>;
}

export function useESP() {
  return useContext(ESPContext);
}

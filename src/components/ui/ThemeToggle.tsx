"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"; // from ShadCN
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex justify-between items-center gap-3">
      <span className="text-lg text-muted-foregrouand">
        {theme === "dark" ? <FaMoon /> : <LuSun />}
      </span>
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="transition-ease duration-1000"
      />
    </div>
  );
}

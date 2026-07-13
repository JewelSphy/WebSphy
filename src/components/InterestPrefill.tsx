"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

/** Prefills service interest from ?interest= on /contact */
export function InterestPrefill() {
  const params = useSearchParams();
  const interest = params.get("interest");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!interest || done) return;
    const select = document.getElementById("service") as HTMLSelectElement | null;
    if (!select) return;

    const match = Array.from(select.options).find(
      (opt) =>
        opt.value.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(opt.value.toLowerCase().slice(0, 8)),
    );
    if (match) {
      select.value = match.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    setDone(true);
  }, [interest, done]);

  return null;
}

import { PayrollComponents } from "@payroo-group/payroll-components";
import { useState } from "react";

const sessionHandler = (accountId: string, userId: string) => {
  return async () => {
    const response = await fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: accountId,
        user: userId,
        userName: "Embedded User", // You can customize the user name as needed
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create Payroo session");
    }

    return await response.json();
  };
};

export function usePayrollComponent(accountId: string, userId: string) {
  const [core] = useState(
    new PayrollComponents({
      environment: "sandbox",
      onSessionCreate: sessionHandler(accountId, userId),
    }),
  );

  return core;
}

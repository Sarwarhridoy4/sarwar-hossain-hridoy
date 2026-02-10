"use server";
import { FieldValues } from "react-hook-form";
import { getBaseUrl } from "@/lib/baseUrl";

export const register = async (data: FormData | FieldValues) => {
  try {
    // Check if data is FormData (multipart) or regular object (JSON)
    const isFormData = data instanceof FormData;

    const res = await fetch(`${getBaseUrl()}/auth/signup`, {
      method: "POST",
      // Only set Content-Type for JSON, browser sets it automatically for FormData
      headers: isFormData
        ? {}
        : {
            "Content-Type": "application/json",
          },
      // Send FormData as-is, or stringify regular object
      body: isFormData ? data : JSON.stringify(data),
    });

    if (!res?.ok) {
      const errorText = await res.text();
      console.error("User Registration Failed", errorText);
      throw new Error(errorText || "Registration failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

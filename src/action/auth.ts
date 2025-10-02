"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FormData | FieldValues) => {
  try {
    // Check if data is FormData (multipart) or regular object (JSON)
    const isFormData = data instanceof FormData;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
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

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res?.ok) {
      const errorText = await res.text();
      console.error("Login Failed", errorText);
      throw new Error(errorText || "Login failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
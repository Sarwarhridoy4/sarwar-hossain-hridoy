"use client";
import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Rocket, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    try {
      // Call NextAuth credentials provider
      const res = await signIn("credentials", {
        redirect: false, // Prevent automatic redirect
        email: values.email,
        password: values.password,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      // Fetch session after successful login
      const session = await getSession();

      if (session?.user?.id) {
        toast.success("Login Successful");
        router.push("/dashboard");
      } else {
        toast.error("Failed to get session");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        toast.error(err.message);
      } else {
        console.error("An unknown error occurred");
        toast.error("Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md border-slate-200 dark:border-slate-800 shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg'>
        <CardHeader className='space-y-3 text-center'>
          <div className='flex justify-center items-center gap-2 group'>
            <div className='relative'>
              <Rocket className='h-10 w-10 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300' />
              <div className='absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-all duration-300 rounded-full'></div>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
              Sarwar Hossain
            </span>
          </div>

          <CardTitle className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Welcome Back
          </CardTitle>
          <CardDescription className='text-slate-600 dark:text-slate-400'>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className='space-y-5'>
              {/* Email */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-slate-700 dark:text-slate-300'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Mail className='absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500' />
                        <Input
                          type='email'
                          placeholder='Enter your email'
                          className='pl-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                          disabled={isLoading}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center justify-between'>
                      <FormLabel className='text-slate-700 dark:text-slate-300'>
                        Password
                      </FormLabel>
                      <Link
                        href='/forgot-password'
                        className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors'
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className='relative'>
                        <Lock className='absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500' />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder='Enter your password'
                          className='pl-10 pr-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                          disabled={isLoading}
                          {...field}
                        />
                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='absolute right-3 top-3 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff className='h-4 w-4' />
                          ) : (
                            <Eye className='h-4 w-4' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />

              {/* Remember Me */}
              <FormField
                control={form.control}
                name='rememberMe'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center space-x-2 space-y-0'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='border-slate-300 dark:border-slate-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500'
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormLabel className='text-sm font-normal text-slate-600 dark:text-slate-400 cursor-pointer py-4'>
                      Remember me for 30 days
                    </FormLabel>
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className='flex flex-col gap-4'>
              {/* Sign In Button */}
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              {/* Divider */}
              <div className='relative w-full'>
                <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t border-slate-300 dark:border-slate-700' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                  <span className='bg-white dark:bg-slate-950 px-2 text-slate-500 dark:text-slate-400'>
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className='grid grid-cols-2 gap-3'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() =>
                    signIn("google", { callbackUrl: "/dashboard" })
                  }
                  disabled={isLoading}
                  className='border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors'
                >
                  Google
                </Button>

                <Button
                  type='button'
                  variant='outline'
                  onClick={() =>
                    signIn("github", { callbackUrl: "/dashboard" })
                  }
                  disabled={isLoading}
                  className='border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors'
                >
                  GitHub
                </Button>
              </div>

              {/* Signup Link */}
              <p className='text-sm text-center text-slate-600 dark:text-slate-400'>
                Don&apos;t have an account?{" "}
                <Link
                  href='/signup'
                  className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline transition-colors'
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

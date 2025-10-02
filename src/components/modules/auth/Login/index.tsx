"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
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

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "@/action/auth";

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

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await login({
        email: values.email,
        password: values.password,
      });

      if (res?.id || res?.token) {
        toast.success("Login Successful");
        // Store token if returned
        if (res?.token) {
          localStorage.setItem("token", res.token);
        }
        router.push("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4'>
      <Card className='w-full max-w-md border-slate-200 dark:border-slate-800 shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg'>
        <CardHeader className='space-y-3 text-center'>
          {/* Logo */}
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
                    <FormLabel className='text-sm font-normal text-slate-600 dark:text-slate-400 cursor-pointer'>
                      Remember me for 30 days
                    </FormLabel>
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className='flex flex-col gap-4'>
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

              {/* Social Login Buttons */}
              <div className='grid grid-cols-2 gap-3'>
                <Button
                  type='button'
                  variant='outline'
                  className='border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors'
                  disabled={isLoading}
                >
                  <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    />
                    <path
                      fill='currentColor'
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    />
                    <path
                      fill='currentColor'
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    />
                    <path
                      fill='currentColor'
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    />
                  </svg>
                  Google
                </Button>

                <Button
                  type='button'
                  variant='outline'
                  className='border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors'
                  disabled={isLoading}
                >
                  <svg
                    className='mr-2 h-4 w-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  GitHub
                </Button>
              </div>

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

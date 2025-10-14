"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, User, Mail, Phone, Lock, Rocket } from "lucide-react";
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
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { register } from "@/action/auth";

export default function RegisterForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();

  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      profilePicture: null,
    },
  });

  // Handle file selection and preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size must be less than 2MB");
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreview(null);
    form.setValue("profilePicture", null);
  };

  const onSubmit = async (values: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);

      if (selectedFile) {
        formData.append("profilePicture", selectedFile);
      }

      const res = await register(formData);

      if (res?.data?.id) {
        toast.success("User Registered Successfully");
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4'>
      <Card className='w-full max-w-lg border-slate-200 dark:border-slate-800 shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg'>
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
            Create Account
          </CardTitle>
          <CardDescription className='text-slate-600 dark:text-slate-400'>
            Join us and start your journey today
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className='space-y-5'>
              {/* Profile Picture */}
              <FormField
                control={form.control}
                name='profilePicture'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-slate-700 dark:text-slate-300'>
                      Profile Picture{" "}
                      <span className='text-slate-400 dark:text-slate-500 text-sm'>
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <div className='flex items-center gap-4'>
                        {preview ? (
                          <div className='relative group'>
                            <Image
                              src={preview}
                              alt='Preview'
                              width={80}
                              height={80}
                              className='rounded-full object-cover border-2 border-blue-500 dark:border-blue-400 ring-4 ring-blue-500/20'
                            />
                            <button
                              type='button'
                              onClick={removeImage}
                              className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-all duration-200 shadow-lg hover:scale-110'
                            >
                              <X className='h-3 w-3' />
                            </button>
                          </div>
                        ) : (
                          <div className='h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 transition-colors'>
                            <Upload className='h-8 w-8 text-slate-400 dark:text-slate-500' />
                          </div>
                        )}

                        <div className='flex-1'>
                          <Input
                            id='profilePicture'
                            type='file'
                            accept='image/*'
                            className='hidden'
                            onChange={(e) => {
                              e.preventDefault(); // Prevent auto-submit
                              handleFileChange(e);
                              field.onChange(e.target.files?.[0] ?? null);
                            }}
                          />
                          <label
                            htmlFor='profilePicture'
                            className='flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400'
                          >
                            <Upload className='h-4 w-4' />
                            <span>Upload Photo</span>
                          </label>
                          <p className='text-xs text-slate-500 dark:text-slate-400 mt-1.5'>
                            JPG, PNG or GIF (Max 5MB)
                          </p>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-slate-700 dark:text-slate-300'>
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <User className='absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500' />
                        <Input
                          placeholder='Enter your name'
                          className='pl-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />

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
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-slate-700 dark:text-slate-300'>
                      Phone
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Phone className='absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500' />
                        <Input
                          placeholder='Enter your phone number'
                          className='pl-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
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
                    <FormLabel className='text-slate-700 dark:text-slate-300'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Lock className='absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500' />
                        <Input
                          type='password'
                          placeholder='Enter your password'
                          className='pl-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className='text-red-500 dark:text-red-400' />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className='flex flex-col gap-4 py-4'>
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'
              >
                Create Account
              </Button>

              <p className='text-sm text-center text-slate-600 dark:text-slate-400'>
                Already have an account?{" "}
                <Link
                  href='/login'
                  className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline transition-colors'
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

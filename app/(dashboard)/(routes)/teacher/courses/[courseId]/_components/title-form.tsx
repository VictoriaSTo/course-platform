"use client"
import React from 'react'

import * as z from "zod";
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required"
  })
})

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}
const TitleForm = ( {initialData, courseId } : 
  TitleFormProps
  ) => {
    const from = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: initialData
    });

    const { isSubmitting, isValid } = from.formState;
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log(values)
    }

  return (
    <div>
      Title form
    </div>
  )
}

export default TitleForm

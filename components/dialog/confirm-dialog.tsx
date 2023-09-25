"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Vibrate } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

const ConfirmDialog = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });


  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) {
    return null;
  }
  return (
    <>
      <Dialog open>
        <DialogContent>
          <Vibrate />
          <DialogHeader>
            <h1> What you want </h1>
            <DialogDescription>
              {" "}
              <span> something new is coming :) </span>{" "}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full space-y-9">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-black">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isLoading}
                          className="bg-green ring-1 ring-inherit focus-visible:ring-red-600 rounded-sm"
                          placeholder="Enter Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter className="mt-4">
                <Button type="submit"> Submit </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;

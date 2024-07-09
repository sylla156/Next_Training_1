"use client";

import WebConfig from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  url: z.string().url(),
  desc: z.string().optional(),
});

type formType = z.infer<typeof formSchema>;

const Contact = () => {
  const { register, handleSubmit } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: formType) => {};

  return (
    <div className="mb-60 flex justify-between items-stretch h-full">
      <section className="flex flex-col justify-start items-start max-w-[40%]">
        <h2 className="mb-8">{WebConfig.contact.title}</h2>
        <p className="mb-18">{WebConfig.contact.content}</p>
        <section>
          <p className="text-gray-500 mt-6">{WebConfig.contact.email.title}</p>
          <p className="text-gray-800 mb-10">{WebConfig.contact.email.link}</p>
        </section>
        <section>
          <p className="text-gray-900 mb-2">
            {WebConfig.contact.network.title}
          </p>
          <section className="flex gap-x-5">
            {WebConfig.contact.network.imgs.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={"Network" + (index + 1)}
                className="w-8 h-auto object-contain"
              />
            ))}
          </section>
        </section>
      </section>
      <div className="w-[40%] h-full flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between items-end h-full gap-y-7 w-full"
        >
          <input
            type="text"
            placeholder={WebConfig.contact.form.name}
            {...register("name")}
          />
          <input
            type="email"
            placeholder={WebConfig.contact.form.email}
            {...register("email")}
          />
          <input
            type="url"
            placeholder={WebConfig.contact.form.website}
            {...register("url")}
          />
          <textarea
            placeholder={WebConfig.contact.form.desc}
            className="textarea"
            {...register("desc")}
          />
          <button type="submit" className="button_secondary_sm">
            {WebConfig.contact.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

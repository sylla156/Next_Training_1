"use client";

import WebConfig from "@/config";
import { Content } from "@/context/ContentProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
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
  const { register, handleSubmit, reset } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });
  const [loading, setLoading] = React.useState(false);
  const [alertSucces, setAlertSucess] = React.useState(false);
  const [alertError, setAlertError] = React.useState(false);
  const { websiteContent: WebConfig, setWebsiteContent } =
    React.useContext(Content);

  const onSubmit = (data: formType) => {
    setLoading(true);
    fetch("/api", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true) setAlertSucess(true);
        else setAlertError(true);
      })
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setAlertError(false);
      setAlertSucess(false);
    }, 6000);
  }, [alertError, alertSucces]);

  return (
    <div
      className="mb-32 sm:mb-60 flex flex-col justify-center items-stretch  sm:flex-row sm:justify-between sm:items-stretch h-full"
      id={WebConfig.routePath
        .find((item) => item.path === "#contact")
        ?.name.toLowerCase()}
    >
      <div
        className={`fixed top-5 right-5 transition-all ${
          alertSucces ? "show" : "hide"
        } font-regular mb-4 block rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100`}
      >
        {`📬 Ooooh, c'est une nouvelle lettre dans ma boîte, Merci !`}
      </div>
      <div
        className={`font-regular fixed top-5 right-5 transition-all ${
          alertError ? "show" : "hide"
        } mb-4 block rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100`}
      >
        {`😱 Oops, mon code a décidé de prendre des vacances ! Réessaie après un
        petit rafraîchissement ! `}
      </div>
      <div className="flex flex-col justify-start items-start w-full sm:max-w-[40%]">
        <h2 className="mb-8">{WebConfig.contact.title}</h2>
        <p className="mb-18">{WebConfig.contact.content}</p>
        <section className="hidden sm:block">
          <p className="text-gray-500 mt-6">{WebConfig.contact.email.title}</p>
          <Link href={`mailto:${WebConfig.contact.email.link}`}>
            <p className="text-gray-800 mb-10 tag_1 presentation_content">
              {WebConfig.contact.email.link}
            </p>
          </Link>
        </section>
        <section className="hidden sm:block">
          <p className="text-gray-900 mb-2">
            {WebConfig.contact.network.title}
          </p>
          <section className="flex gap-x-5">
            {WebConfig.contact.network.imgs.map(({ img, link }) => (
              <Link href={link} key={link}>
                <Image
                  src={img}
                  alt={link}
                  className="w-8 h-auto object-contain"
                />
              </Link>
            ))}
          </section>
        </section>
      </div>
      <div className="w-full sm-w-[40%] h-full flex flex-col mt-10 sm:mt-0">
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
          <button
            type="submit"
            className="button_secondary_sm"
            disabled={loading}
          >
            {!loading ? (
              WebConfig.contact.form.submit
            ) : (
              <span>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Loading...
              </span>
            )}
          </button>
        </form>
        <div className="flex justify-between items-baseline mt-5 sm:hidden">
          <section>
            <p className="text-gray-500 mt-6">
              {WebConfig.contact.email.title}
            </p>
            <p className="text-gray-800 mb-10">
              {WebConfig.contact.email.link}
            </p>
          </section>
          <section>
            <p className="text-gray-900 mb-2">
              {WebConfig.contact.network.title}
            </p>
            <section className="flex gap-x-5">
              {WebConfig.contact.network.imgs.map(({ img, link }) => (
                <Link href={link} key={link} target="_blank">
                  <Image
                    src={img}
                    alt={link}
                    className="w-8 h-auto object-contain"
                  />
                </Link>
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

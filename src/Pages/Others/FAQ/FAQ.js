import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeProvider/ThemeProvider";

const FAQ = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="m-2">
      <section className={`pb-20 ${darkTheme ? 'bg-gray-700 text-gray-300' : 'bg-white'}`}>
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">Why An FAQ Resource?</h3>
              <p className="mt-1 text-gray-400">
                Firstly, FAQ pages can bring new visitors to your website via
                organic search and drive them quickly to related pages – most
                typically deeper blog pages and service pages closely related to
                the questions being resolved.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Why FAQ Pages Are A Priority</h3>
              <p className="mt-1 text-gray-400">
                FAQ pages continue to be a priority area for SEO and digital
                marketing professionals. An FAQ page is one of the simplest ways
                to improve your site and help site visitors and users. Your FAQ
                section should be seen as a constantly expanding source of value
                provided to your audience. It is a place where their ever-changing
                and growing requirements are not only met but anticipated and
                exceeded frequently.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How to change email address?</summary>
            <div className="px-4 pb-4">
              <p>Your email address on Invest In Knowledge is your Google Account email address (also known as your Google username). To change your email address on YouTube, follow the instructions to learn how to change your email address for your Google Account..</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How to delete account?</summary>
            <div className="px-4 pb-4">
              <p>You can choose to temporarily hide content on your account or permanently delete your account.
                Note that hiding or deleting an account will permanently delete your Community posts, comments and replies.?</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Fix a hacked account?</summary>
            <div className="px-4 pb-4 space-y-2">
              <p>If you notice any of the following, your Account may have been hacked, hijacked or compromised:
                Changes that you didn't make: Your profile picture, descriptions, email settings, AdSense association or sent messages are different.</p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

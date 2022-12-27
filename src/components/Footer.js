import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="p-4 bg-white md:p-8 lg:p-10  dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl text-center">
          <li class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            IDFMS
          </li>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Our solution simplifies the process of tracking and analyzing
            financial transactions and spending, giving organizations a clear
            picture of their financial health.
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li class="mr-4 hover:underline md:mr-6 ">
              <Link to="/">Home</Link>
            </li>
            <li class="mr-4 hover:underline md:mr-6">About</li>
            <li class="mr-4 hover:underline md:mr-6 ">Services</li>
            <li class="mr-4 hover:underline md:mr-6">Features</li>
            <li class="mr-4 hover:underline md:mr-6">Blog</li>
            <li class="mr-4 hover:underline md:mr-6">FAQs</li>
            <li class="mr-4 hover:underline md:mr-6">
            <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <div href="#" class="hover:underline">
              IDFMS™ | All Rights Reserved | www.wematech.co.ke
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="w-full py-4 text-center text-base-content mt-auto dark:bg-slate-900 dark:text-white">
        <hr />
      {/* Top links */}
      <div className="flex justify-center gap-10 mb-10">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-10 mb-10">
        {/* Twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="fill-current cursor-pointer"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775
          1.017-.609 1.798-1.574 2.165-2.724
          -.951.564-2.005.974-3.127 1.195
          -.897-.957-2.178-1.555-3.594-1.555
          -3.179 0-5.515 2.966-4.797 6.045
          -4.091-.205-7.719-2.165-10.148-5.144
          -1.29 2.213-.669 5.108 1.523 6.574
          -.806-.026-1.566-.247-2.229-.616
          -.054 2.281 1.581 4.415 3.949 4.89
          -.693.188-1.452.232-2.224.084
          .626 1.956 2.444 3.379 4.6 3.419
          -2.07 1.623-4.678 2.348-7.29 2.04
          2.179 1.397 4.768 2.212 7.548 2.212
          9.142 0 14.307-7.721 13.995-14.646
          .962-.695 1.797-1.562 2.457-2.549z" />
        </svg>

        {/* YouTube */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="fill-current cursor-pointer"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0
          -3.897.266-4.356 2.62-4.385 8.816
          .029 6.185.484 8.549 4.385 8.816
          3.6.245 11.626.246 15.23 0
          3.897-.266 4.356-2.62 4.385-8.816
          -.029-6.185-.484-8.549-4.385-8.816zM9
          15.568v-7.136l6 3.568-6 3.568z" />
        </svg>

        {/* Facebook */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="fill-current cursor-pointer"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667
          c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.692
          c-3.242 0-4.308 1.417-4.308 4.308v2.692z" />
        </svg>
      </div>

      {/* Copyright */}
      <p className="text-sm opacity-70">
        Copyright © {new Date().getFullYear()} – All right reserved by ACME Industries Ltd
      </p>

    </footer>
  );
}

export default Footer;
import { usePage } from '@inertiajs/react';
import React from 'react';

const MyTopSection = () => {
  const { application_info } = usePage().props;
  return (
    <div className="bg-[#0B2A5B] text-white/80 w-full text-sm py-4 overflow-hidden hidden xl:block">
      <div className="max-w-screen-2xl px-6 xl:px-16 mx-auto flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 lg:gap-6">
          <div className="flex items-center space-x-2">
            <img src="assets/demo-images/icons8-call-80.png" className="w-5" />
            <span>{application_info?.phone}</span>
          </div>
          <div className="flex items-center space-x-2 max-w-xs sm:max-w-md lg:max-w-full">
            <img src="assets/demo-images/icons8-location-80.png" className="w-5" />
            <span>
             {application_info?.address}
            </span>
          </div>
           <div className="flex items-center space-x-2">
            <img src="assets/demo-images/icons8-mail-80.png" className="w-5" />
            <span>{application_info?.email}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
         
          <div className="flex items-center space-x-2">
            <img src="assets/demo-images/icons8-login-80.png" className="w-5" />
            <a href="/login" className="hover:text-white">Login/Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTopSection;

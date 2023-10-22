/**
 * Yooldo Logo
 */
import React, { ComponentPropsWithRef } from "react";

const YooldoLogo: React.FC<ComponentPropsWithRef<"svg">> = ({ ...props }) => {
  return (
    <svg
      role="img"
      width="52"
      height="49"
      viewBox="0 0 52 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7448 6.04736C7.58007 6.04736 6.39814 8.52699 7.78735 10.1575L16.4199 20.2899C17.4381 21.485 19.3092 21.4874 20.3305 20.2949L22.033 18.3072C22.8383 17.367 22.8299 15.9923 22.0131 15.0617L14.8641 6.91712C14.3794 6.36487 13.6736 6.04736 12.9309 6.04736H9.7448ZM6.74077 11.0155C4.6101 8.51465 6.42175 4.70947 9.7448 4.70947H12.9309C14.0708 4.70947 15.154 5.19682 15.8977 6.04419L23.0467 14.1888C24.2998 15.6165 24.3128 17.7253 23.0773 19.1678L21.3748 21.1555C19.8075 22.9855 16.9358 22.9817 15.3733 21.1479L6.74077 11.0155Z"
        className="fill-black dark:fill-white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.4134 6.04736C38.6369 6.04736 37.9027 6.39432 37.4185 6.99014L37.4185 6.99016L11.8014 38.5154L11.2681 38.0985L11.8014 38.5155C10.4986 40.1187 11.6044 42.4942 13.6913 42.5786L17.9251 42.7497C18.7576 42.7833 19.5544 42.416 20.0595 41.7656L44.6733 10.0691C45.9536 8.42053 44.7551 6.04736 42.644 6.04736H39.4134ZM36.3519 6.15627C37.0948 5.24203 38.2216 4.70947 39.4134 4.70947H42.644C45.8847 4.70947 47.7219 8.35133 45.7583 10.8798L21.1445 42.5763C20.3695 43.5742 19.1467 44.1381 17.869 44.0864L13.6351 43.9153C10.4317 43.7859 8.73661 40.1406 10.7348 37.6815L36.3519 6.15627Z"
        className="fill-black dark:fill-white"
      ></path>
      <path
        d="M36.7782 43.454C40.2009 43.454 42.9756 40.7312 42.9756 37.3725C42.9756 34.0138 40.2009 31.291 36.7782 31.291C33.3554 31.291 30.5807 34.0138 30.5807 37.3725C30.5807 40.7312 33.3554 43.454 36.7782 43.454Z"
        className="fill-black dark:fill-white"
      ></path>
    </svg>
  );
};

export default YooldoLogo;

import React from "react";

const Home = () => {
  return (
    <>
      <div class="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex items-center justify-between py-4">
        <div class="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
          <button
            type="button"
            aria-disabled="false"
            class="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 p-0 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-6 min-w-[24px] gap-1.5 rounded-md text-xs lg:hidden"
            aria-label="Menu"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="stroke-inherit"
              >
                <path d="M4 6H20"></path>
                <path d="M4 12H20"></path>
                <path d="M4 18H20"></path>
              </svg>
            </div>
          </button>
          <svg
            width="149"
            height="42"
            viewBox="0 0 149 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_3302_6976)">
              <path
                d="M6.02873 16.4468C4.90829 12.2653 7.3898 7.96719 11.5713 6.84676L29.5532 2.02852C33.7348 0.908086 38.0328 3.38959 39.1533 7.57112L43.9715 25.553C45.092 29.7345 42.6104 34.0326 38.4289 35.1531L20.447 39.9713C16.2655 41.0917 11.9674 38.6102 10.847 34.4287L6.02873 16.4468Z"
                fill="url(#linear-gradient-id-7196)"
              ></path>
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.2295 4.5523L12.2476 9.37053C9.45988 10.1175 7.80555 12.9829 8.55251 15.7706L13.3707 33.7525C14.1177 36.5402 16.9831 38.1945 19.7708 37.4475L37.7527 32.6293C40.5404 31.8823 42.1947 29.0169 41.4477 26.2293L36.6295 8.24736C35.8825 5.45968 33.0172 3.80534 30.2295 4.5523ZM11.5713 6.84676C7.3898 7.96719 4.90829 12.2653 6.02873 16.4468L10.847 34.4287C11.9674 38.6102 16.2655 41.0917 20.447 39.9713L38.4289 35.1531C42.6104 34.0326 45.092 29.7345 43.9715 25.553L39.1533 7.57112C38.0328 3.38959 33.7348 0.908085 29.5532 2.02852L11.5713 6.84676Z"
              fill="white"
            ></path>
            <g filter="url(#filter1_dd_3302_6976)">
              <path
                d="M28.7698 11.1306L29.9856 15.668L24.5131 17.1344L29.9968 21.4011L25.0716 22.7208L26.8173 29.2361L22.4393 30.4092L20.6936 23.8939L25.0716 22.7208L19.2596 18.5421L18.0438 14.0046L28.7698 11.1306Z"
                fill="white"
              ></path>
            </g>
            <path
              d="M64.5602 12V14.64H60.7802V26H58.0202V14.64H54.2602V12H64.5602ZM71.7646 16H74.3446V26H71.7646V24.82C70.9913 25.7933 69.9046 26.28 68.5046 26.28C67.1713 26.28 66.0246 25.7733 65.0646 24.76C64.118 23.7333 63.6446 22.48 63.6446 21C63.6446 19.52 64.118 18.2733 65.0646 17.26C66.0246 16.2333 67.1713 15.72 68.5046 15.72C69.9046 15.72 70.9913 16.2067 71.7646 17.18V16ZM67.0046 23.04C67.5246 23.56 68.1846 23.82 68.9846 23.82C69.7846 23.82 70.4446 23.56 70.9646 23.04C71.498 22.5067 71.7646 21.8267 71.7646 21C71.7646 20.1733 71.498 19.5 70.9646 18.98C70.4446 18.4467 69.7846 18.18 68.9846 18.18C68.1846 18.18 67.5246 18.4467 67.0046 18.98C66.4846 19.5 66.2246 20.1733 66.2246 21C66.2246 21.8267 66.4846 22.5067 67.0046 23.04ZM77.9642 14.8C77.5375 14.8 77.1642 14.6467 76.8442 14.34C76.5375 14.02 76.3842 13.6467 76.3842 13.22C76.3842 12.7933 76.5375 12.42 76.8442 12.1C77.1642 11.78 77.5375 11.62 77.9642 11.62C78.4042 11.62 78.7775 11.78 79.0842 12.1C79.4042 12.42 79.5642 12.7933 79.5642 13.22C79.5642 13.6467 79.4042 14.02 79.0842 14.34C78.7775 14.6467 78.4042 14.8 77.9642 14.8ZM76.6842 26V16H79.2642V26H76.6842ZM81.6256 26V11.4H84.2056V26H81.6256ZM91.947 14.2C90.5336 14.0933 89.827 14.66 89.827 15.9V16H91.947V18.48H89.827V26H87.247V18.48H85.807V16H87.247V15.9C87.247 14.4867 87.6403 13.4133 88.427 12.68C89.2136 11.9467 90.387 11.6267 91.947 11.72V14.2ZM95.7095 17.72C95.9495 17.08 96.3428 16.6 96.8895 16.28C97.4495 15.96 98.0695 15.8 98.7495 15.8V18.68C97.9628 18.5867 97.2561 18.7467 96.6295 19.16C96.0161 19.5733 95.7095 20.26 95.7095 21.22V26H93.1295V16H95.7095V17.72ZM107.487 16H110.067V26H107.487V24.82C106.714 25.7933 105.627 26.28 104.227 26.28C102.894 26.28 101.747 25.7733 100.787 24.76C99.8406 23.7333 99.3673 22.48 99.3673 21C99.3673 19.52 99.8406 18.2733 100.787 17.26C101.747 16.2333 102.894 15.72 104.227 15.72C105.627 15.72 106.714 16.2067 107.487 17.18V16ZM102.727 23.04C103.247 23.56 103.907 23.82 104.707 23.82C105.507 23.82 106.167 23.56 106.687 23.04C107.221 22.5067 107.487 21.8267 107.487 21C107.487 20.1733 107.221 19.5 106.687 18.98C106.167 18.4467 105.507 18.18 104.707 18.18C103.907 18.18 103.247 18.4467 102.727 18.98C102.207 19.5 101.947 20.1733 101.947 21C101.947 21.8267 102.207 22.5067 102.727 23.04ZM123.467 15.72C124.613 15.72 125.527 16.0933 126.207 16.84C126.9 17.5867 127.247 18.5867 127.247 19.84V26H124.667V20.02C124.667 19.42 124.52 18.9533 124.227 18.62C123.933 18.2867 123.52 18.12 122.987 18.12C122.4 18.12 121.94 18.3133 121.607 18.7C121.287 19.0867 121.127 19.6467 121.127 20.38V26H118.547V20.02C118.547 19.42 118.4 18.9533 118.107 18.62C117.813 18.2867 117.4 18.12 116.867 18.12C116.293 18.12 115.833 18.3133 115.487 18.7C115.153 19.0867 114.987 19.6467 114.987 20.38V26H112.407V16H114.987V17.06C115.587 16.1667 116.513 15.72 117.767 15.72C118.993 15.72 119.9 16.2 120.487 17.16C121.153 16.2 122.147 15.72 123.467 15.72ZM131.618 22.06C131.965 23.3133 132.905 23.94 134.438 23.94C135.425 23.94 136.171 23.6067 136.678 22.94L138.758 24.14C137.771 25.5667 136.318 26.28 134.398 26.28C132.745 26.28 131.418 25.78 130.418 24.78C129.418 23.78 128.918 22.52 128.918 21C128.918 19.4933 129.411 18.24 130.398 17.24C131.385 16.2267 132.651 15.72 134.198 15.72C135.665 15.72 136.871 16.2267 137.818 17.24C138.778 18.2533 139.258 19.5067 139.258 21C139.258 21.3333 139.225 21.6867 139.158 22.06H131.618ZM131.578 20.06H136.678C136.531 19.38 136.225 18.8733 135.758 18.54C135.305 18.2067 134.785 18.04 134.198 18.04C133.505 18.04 132.931 18.22 132.478 18.58C132.025 18.9267 131.725 19.42 131.578 20.06ZM143.049 18.84C143.049 19.1067 143.222 19.3267 143.569 19.5C143.929 19.66 144.362 19.8067 144.869 19.94C145.375 20.06 145.882 20.22 146.389 20.42C146.895 20.6067 147.322 20.9267 147.669 21.38C148.029 21.8333 148.209 22.4 148.209 23.08C148.209 24.1067 147.822 24.9 147.049 25.46C146.289 26.0067 145.335 26.28 144.189 26.28C142.135 26.28 140.735 25.4867 139.989 23.9L142.229 22.64C142.522 23.5067 143.175 23.94 144.189 23.94C145.109 23.94 145.569 23.6533 145.569 23.08C145.569 22.8133 145.389 22.6 145.029 22.44C144.682 22.2667 144.255 22.1133 143.749 21.98C143.242 21.8467 142.735 21.68 142.229 21.48C141.722 21.28 141.289 20.9667 140.929 20.54C140.582 20.1 140.409 19.5533 140.409 18.9C140.409 17.9133 140.769 17.14 141.489 16.58C142.222 16.0067 143.129 15.72 144.209 15.72C145.022 15.72 145.762 15.9067 146.429 16.28C147.095 16.64 147.622 17.16 148.009 17.84L145.809 19.04C145.489 18.36 144.955 18.02 144.209 18.02C143.875 18.02 143.595 18.0933 143.369 18.24C143.155 18.3867 143.049 18.5867 143.049 18.84Z"
              fill="black"
            ></path>
            <defs>
              <filter
                id="filter0_dd_3302_6976"
                x="0.759705"
                y="0.759521"
                width="48.4808"
                height="48.4807"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_3302_6976"
                ></feMorphology>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3302_6976"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_3302_6976"
                ></feMorphology>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_3302_6976"
                  result="effect2_dropShadow_3302_6976"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_3302_6976"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_dd_3302_6976"
                x="13.0438"
                y="10.1306"
                width="21.953"
                height="29.2786"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_3302_6976"
                ></feMorphology>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3302_6976"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_3302_6976"
                ></feMorphology>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_3302_6976"
                  result="effect2_dropShadow_3302_6976"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_3302_6976"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="linear-gradient-id-7196"
                x1="35.517"
                y1="32.8232"
                x2="27.6785"
                y2="4.89887"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2050D9"></stop>
                <stop offset="1" stopColor="#6FA1F3"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="hidden gap-10 md:flex">
          <div class="hidden gap-8 lg:flex">
            <a
              type="button"
              href="/feature"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-slate-500 px-2 text-black h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80"
            >
              <div>Feature</div>
            </a>
            <a
              type="button"
              href="/about"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-slate-500 px-2 text-black h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80"
            >
              <div>About</div>
            </a>
            <a
              type="button"
              href="/pricing"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-slate-500 px-2 text-black h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80"
            >
              <div>Pricing</div>
            </a>
            <a
              type="button"
              href="/contact"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-slate-500 px-2 text-black h-[38px] min-w-[38px] gap-2 cursor-pointer disabled:stroke-slate-400 disabled:text-slate-400 hover:opacity-80"
            >
              <div>Contact</div>
            </a>
          </div>
          <button
            type="button"
            aria-disabled="false"
            class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white text-white hover:bg-blue-950 h-[38px] min-w-[38px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100 px-4"
          >
            <div>Get a Template</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              stroke-width="1.5"
              class="size-6 stroke-white"
            >
              <path d="M16.1004 18.1352C14.8713 19.3392 13.2394 20 11.5 20C9.76056 20 8.1287 19.3392 6.89965 18.1352C5.67518 16.9335 5 15.3403 5 13.6453C5 12.6608 5.2243 11.7171 5.66602 10.839C6.0963 9.98133 6.73715 9.21415 7.51532 8.62348C8.0116 8.24825 8.46173 7.81683 8.85651 7.33805C9.4287 6.64781 9.87729 5.87836 10.1886 5.05233C10.3162 4.7116 10.409 4.35905 10.4655 4C11.0171 4.5024 11.4794 5.10891 11.8662 5.81952C12.6306 7.23621 12.9831 8.49675 12.9144 9.56945C12.898 9.82209 12.9398 10.0751 13.0365 10.3095C13.1332 10.5439 13.2824 10.7536 13.4729 10.9228C13.6379 11.0702 13.831 11.1837 14.0408 11.2568C14.2506 11.3298 14.473 11.3609 14.6951 11.3482C15.146 11.3256 15.5602 11.1287 15.8623 10.796C16.1667 10.4588 16.4299 10.1149 16.6496 9.76407C16.9701 10.1692 17.2379 10.6105 17.4507 11.0857C17.8146 11.8959 18 12.7581 18 13.6453C18 15.3403 17.3248 16.9358 16.1004 18.1352Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <section class="flex w-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div class="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32">
          <svg
            width="128"
            height="132"
            viewBox="0 0 128 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="size-32"
          >
            <g filter="url(#filter0_dd_3487_18637)">
              <path
                d="M6.21166 50.2316C2.78106 37.4284 10.379 24.2683 23.1822 20.8377L77.7682 6.21139C90.5714 2.78079 103.731 10.3788 107.162 23.1819L121.788 77.7679C125.219 90.5711 117.621 103.731 104.818 107.162L50.2318 121.788C37.4286 125.219 24.2685 117.621 20.8379 104.818L6.21166 50.2316Z"
                fill="url(#paint0_linear_3487_18637)"
              ></path>
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M79.3211 12.0069L24.7351 26.6332C15.1327 29.2062 9.43426 39.0762 12.0072 48.6786L26.6335 103.265C29.2064 112.867 39.0765 118.565 48.6789 115.993L103.265 101.366C112.867 98.7933 118.566 88.9232 115.993 79.3208L101.367 24.7349C98.7936 15.1325 88.9235 9.43399 79.3211 12.0069ZM23.1822 20.8377C10.379 24.2683 2.78106 37.4284 6.21166 50.2316L20.8379 104.818C24.2685 117.621 37.4286 125.219 50.2318 121.788L104.818 107.162C117.621 103.731 125.219 90.5711 121.788 77.7679L107.162 23.1819C103.731 10.3788 90.5714 2.78079 77.7682 6.21139L23.1822 20.8377Z"
              fill="white"
            ></path>
            <g filter="url(#filter1_dd_3487_18637)">
              <path
                d="M75.4895 33.922L79.1948 47.7503L62.5168 52.2191L79.2288 65.2224L64.2187 69.2444L69.5391 89.1003L56.1968 92.6754L50.8764 72.8194L64.2187 69.2444L46.5061 56.5092L42.8008 42.6809L75.4895 33.922Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_dd_3487_18637"
                x="0.387939"
                y="4.3877"
                width="127.224"
                height="127.224"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_3487_18637"
                ></feMorphology>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3487_18637"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_3487_18637"
                ></feMorphology>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_3487_18637"
                  result="effect2_dropShadow_3487_18637"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_3487_18637"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_dd_3487_18637"
                x="37.8008"
                y="32.922"
                width="46.428"
                height="68.7534"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_3487_18637"
                ></feMorphology>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3487_18637"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_3487_18637"
                ></feMorphology>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_3487_18637"
                  result="effect2_dropShadow_3487_18637"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_3487_18637"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_3487_18637"
                x1="96.0511"
                y1="100.032"
                x2="72.1628"
                y2="14.9302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2050D9"></stop>
                <stop offset="1" stop-color="#6FA1F3"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div class="flex flex-1 flex-col items-center gap-6 text-center">
            <span class="inline-flex rounded-[64px] border text-center font-semibold transition-all duration-300 ease-in-out h-7 px-3 py-1 text-sm border-blue-300 bg-blue-50 text-blue-600">
              Tailframes v1.0
            </span>
            <div class="flex max-w-lg flex-col gap-6">
              <h3 class="text-4xl font-semibold text-slate-950 md:text-6xl">
                Here is your new Tailwind UI kit!
              </h3>
              <h4 class="text-lg font-normal leading-7 text-slate-500">
                We've done it carefully and simply. The elements work well
                together to create stunning landings.
              </h4>
            </div>
          </div>
          <div class="flex gap-4">
            <button
              type="button"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100"
            >
              <div>Get a Template</div>
            </button>
            <button
              type="button"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 px-2 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950"
            >
              <div>See More</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D4ED8"
                stroke-width="1.5"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 stroke-inherit"
              >
                <path
                  d="M11 16L15 12L11 8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-6 py-12 text-center md:py-14 md:text-start lg:flex-row lg:gap-16 xl:gap-32 2xl:py-20 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        <div class="flex w-full min-w-full max-w-lg flex-1 items-center justify-center rounded-2xl bg-slate-50 py-32 lg:min-w-[370px]">
          <img
            src="https://www.tailframes.com/images/illustration.webp"
            alt=""
            width="183"
            height="345"
            sizes="100vw"
            class="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
          />
        </div>
        <div class="flex flex-col gap-6 lg:gap-12">
          <div class="flex max-w-lg flex-col gap-4">
            <h3 class="text-4xl font-semibold tracking-tight">
              Here is your new
              <br />
              wireframe kit, welcome!
            </h3>
            <h4 class="text-lg font-normal tracking-tight text-slate-500">
              We've done it carefully and simply.
              <br />
              Combined with the ingredients makes for beautiful landings.
            </h4>
          </div>
          <div class="grid w-full grid-flow-row justify-items-start gap-12 md:grid-cols-2 xl:gap-x-32">
            <div class="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.5"
                class="size-8"
              >
                <path
                  d="M22 17.3333C22.3682 17.3333 22.6667 17.0349 22.6667 16.6667C22.6667 16.2985 22.3682 16 22 16C21.6318 16 21.3333 16.2985 21.3333 16.6667C21.3333 17.0349 21.6318 17.3333 22 17.3333Z"
                  stroke="#1D4ED8"
                ></path>
                <path
                  d="M18.5924 8.56204C19.4812 8.78427 20.3499 9.33364 21.0165 10.0003C21.9055 9.33364 24.3167 7.99999 26 10.0003L22 13.6836"
                  stroke="#1D4ED8"
                ></path>
                <path
                  d="M10.7219 8.66699C1.12185 13.4669 4.12778 19.5556 7.01667 22L9.01667 26.6667H11.6833V24L12.6424 24.2143C13.9756 24.5123 15.358 24.5139 16.692 24.2191L17.6833 24V26.6667H20.35L22.35 22.6667L27.6833 20V17.3333C27.2389 17.3333 26.2167 17.0667 25.6833 16C25.6833 14.8889 25.1749 12.2756 24.1083 11.7422"
                  stroke="#1D4ED8"
                ></path>
                <path
                  d="M18.6667 9.33334C18.6667 11.5425 16.8759 13.3333 14.6667 13.3333C12.4575 13.3333 10.6667 11.5425 10.6667 9.33334C10.6667 7.12421 12.4575 5.33334 14.6667 5.33334C16.8759 5.33334 18.6667 7.12421 18.6667 9.33334Z"
                  stroke="#93C5FD"
                ></path>
              </svg>
              <div class="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
                <p class="text-xl font-semibold tracking-tight">Headline</p>
                <p class="text-slate-500">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for beautiful landings.
                </p>
              </div>
            </div>
            <div class="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
                stroke-width="1.5"
                class="size-8 stroke-blue-700 [&amp;>g>circle]:stroke-blue-300"
              >
                <g clip-path="url(#clip0_3526_27521)">
                  <circle cx="11.8286" cy="11.6814" r="3"></circle>
                  <ellipse
                    cx="5.40957"
                    cy="11.2139"
                    rx="5.40957"
                    ry="11.2139"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 7.65082 0)"
                  ></ellipse>
                  <ellipse
                    cx="11.7545"
                    cy="11.7546"
                    rx="5.40957"
                    ry="11.2139"
                    transform="rotate(45 11.7545 11.7546)"
                  ></ellipse>
                </g>
                <defs>
                  <clipPath id="clip0_3526_27521">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div class="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
                <p class="text-xl font-semibold tracking-tight">Headline</p>
                <p class="text-slate-500">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for&nbsp;beautiful landings.
                </p>
              </div>
            </div>
            <div class="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
                stroke-width="1.5"
                class="size-8 stroke-blue-700"
              >
                <path d="M10.6226 18.7563C11.052 18.9139 11.516 18.9999 12.0001 18.9999C12.4842 18.9999 12.9482 18.9139 13.3776 18.7563L12.0001 20.9999L10.6226 18.7563Z"></path>
                <path d="M21.7777 17.9973C21.9233 17.3549 22.0001 16.6864 22.0001 16C22.0001 11.714 19.0041 8.12768 14.9921 7.22119C14.9498 7.8009 14.7429 8.3349 14.4177 8.77658C14.0722 9.24605 13.5932 9.61121 13.0366 9.81612C13.0793 10.2912 13.159 10.7557 13.2726 11.2067C13.4005 11.7141 13.5715 12.2043 13.7814 12.6734C14.139 13.4722 14.6096 14.2093 15.173 14.8645C15.4142 15.1451 15.6724 15.4106 15.946 15.6595C17.4936 17.0672 19.5339 17.9429 21.7777 17.9973Z"></path>
                <path d="M2.22241 17.9973C2.07685 17.3549 2 16.6864 2 16C2 11.714 4.99602 8.12768 9.00803 7.22119C9.09519 8.41709 9.88338 9.41844 10.9635 9.81612C10.9208 10.2912 10.8412 10.7557 10.7275 11.2067C10.5996 11.7141 10.4286 12.2043 10.2187 12.6734C9.86109 13.4722 9.39048 14.2093 8.82716 14.8645C8.58594 15.1451 8.32773 15.4106 8.05411 15.6595C6.5065 17.0672 4.46623 17.9429 2.22241 17.9973Z"></path>
                <path d="M12 16C13.2046 16 14.3096 15.574 15.1728 14.8645C14.6095 14.2093 14.1389 13.4722 13.7813 12.6733C13.228 12.8844 12.6275 13 12 13C11.3725 13 10.772 12.8844 10.2187 12.6733C9.86108 13.4722 9.39046 14.2093 8.82715 14.8645C9.69033 15.574 10.7954 16 12 16Z"></path>
                <path d="M15.1728 14.8645C15.4141 15.1451 15.6723 15.4106 15.9459 15.6595C15.7082 17.0925 14.7087 18.2682 13.3775 18.7565C12.9481 18.914 12.4841 19 12 19C11.5159 19 11.0519 18.914 10.6225 18.7565C9.2913 18.2682 8.29184 17.0925 8.05411 15.6595C8.32772 15.4106 8.58594 15.1451 8.82716 14.8645"></path>
                <path d="M13.7813 12.6734C13.5714 12.2044 13.4004 11.7141 13.2725 11.2067C13.1588 10.7558 13.0792 10.2913 13.0365 9.81616C12.7135 9.9351 12.3643 10 12 10C11.6357 10 11.2865 9.9351 10.9635 9.81616C10.9208 10.2913 10.8411 10.7558 10.7275 11.2067C10.5996 11.7141 10.4286 12.2044 10.2187 12.6734"></path>
                <path d="M15 7C15 7.0744 14.9973 7.14816 14.992 7.2212C14.9497 7.80091 14.7427 8.33491 14.4176 8.77658C14.0721 9.24605 13.593 9.61122 13.0365 9.81612C12.7135 9.93506 12.3643 10 12 10C11.6357 10 11.2865 9.93506 10.9635 9.81612C9.88338 9.41844 9.09519 8.4171 9.00803 7.2212C9.00271 7.14816 9 7.0744 9 7C9 5.34315 10.3431 4 12 4C12.6753 4 13.2985 4.22314 13.7999 4.59972C14.5286 5.14704 15 6.01847 15 7Z"></path>
                <path
                  d="M10.2001 4.59972C9.4703 3.62832 8.30853 3 7 3"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M17 3C15.6915 3 14.5297 3.62832 13.7999 4.59972"
                  stroke-linecap="round"
                ></path>
              </svg>
              <div class="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
                <p class="text-xl font-semibold tracking-tight">Headline</p>
                <p class="text-slate-500">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for&nbsp;beautiful landings.
                </p>
              </div>
            </div>
            <div class="flex w-full flex-col items-center gap-6 md:max-w-[280px] md:items-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
                stroke-width="1.5"
                class="size-8 stroke-blue-700"
              >
                <path
                  d="M3 14.2572C3 16.3865 4.73074 18.1037 6.8714 18.1037C8.01005 18.1037 9.26256 17.7488 9.77495 16.6727H9.86604C9.92297 17.8404 8.5566 18.8249 8.10114 19.3172C7.44072 20.0269 7.85064 21 8.69323 21H14.3068C15.1494 21 15.5593 20.0269 14.8989 19.3172C14.4434 18.8249 13.077 17.8404 13.134 16.6727H13.2251C13.7374 17.7488 14.9786 18.1037 16.1286 18.1037C18.2579 18.1037 20 16.3865 20 14.2572C20 12.0707 18.3831 10.2162 16.2197 10.2162C15.3771 10.2162 14.5345 10.4909 13.8741 11.0175C14.9672 10.136 15.3885 8.99125 15.3885 7.9037C15.3885 5.74007 13.6463 4 11.4943 4C9.35365 4 7.61152 5.74007 7.61152 7.9037C7.61152 8.99125 8.03282 10.136 9.11453 11.0175C8.45412 10.4909 7.62291 10.2162 6.78031 10.2162C4.61688 10.2162 3 12.0707 3 14.2572Z"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div class="flex max-w-[280px] flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-start">
                <p class="text-xl font-semibold tracking-tight">Headline</p>
                <p class="text-slate-500">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for&nbsp;beautiful landings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col items-center gap-12 py-12 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        <div class="flex flex-col gap-3 text-center">
          <h2 class="text-4xl font-semibold text-slate-950">
            Choose your plan
          </h2>
          <p class="text-sm text-slate-600">
            Unlimited combinations for you to build better products faster.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="flex min-h-[520px] max-w-md flex-col items-start justify-between gap-12 overflow-hidden rounded-2xl border p-6 border-slate-200 bg-white">
            <div class="inline-flex flex-col items-start justify-start gap-6">
              <div class="flex flex-col items-start justify-start gap-4">
                <p class="text-lg font-semibold">Basic</p>
                <p class="inline-flex items-end justify-start gap-2">
                  <span class="text-center text-5xl font-medium">$0</span>
                  <span class="text-sm leading-tight text-slate-600">
                    /month
                  </span>
                </p>
              </div>
              <div class="flex flex-col gap-6 text-slate-600">
                <p class="text-sm leading-tight">
                  For businesses that are small to medium-sized and have a
                  narrower target market.
                </p>
                <div class="flex flex-col items-start justify-start gap-4">
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">5 products</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Up to 1,000 subscribers</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Basic analytics</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">48-hour support response time</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 w-full disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100"
            >
              <div>Buy Now</div>
            </button>
          </div>

          <div class="flex min-h-[520px] max-w-md flex-col items-start justify-between gap-12 overflow-hidden rounded-2xl border p-6 border-transparent bg-slate-950 text-white">
            <div class="inline-flex flex-col items-start justify-start gap-6">
              <div class="flex flex-col items-start justify-start gap-4">
                <p class="text-lg font-semibold">Professional</p>
                <p class="inline-flex items-end justify-start gap-2">
                  <span class="text-center text-5xl font-medium">$99</span>
                  <span class="text-sm leading-tight text-white">/month</span>
                </p>
              </div>
              <div class="flex flex-col gap-6 text-white">
                <p class="text-sm leading-tight">
                  For bigger, more vibrant companies with over 100,000 active
                  users.
                </p>
                <div class="flex flex-col items-start justify-start gap-4">
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">10 products</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Up to 10,000 subscribers</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Advanced analytics</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">24-hour support response time</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 w-full disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100"
            >
              <div>Buy Now</div>
            </button>
          </div>

          <div class="flex min-h-[520px] max-w-md flex-col items-start justify-between gap-12 overflow-hidden rounded-2xl border p-6 border-slate-200 bg-white">
            <div class="inline-flex flex-col items-start justify-start gap-6">
              <div class="flex flex-col items-start justify-start gap-4">
                <p class="text-lg font-semibold">Enterprise</p>
                <p class="inline-flex items-end justify-start gap-2">
                  <span class="text-center text-5xl font-medium">$199</span>
                  <span class="text-sm leading-tight text-slate-600">
                    /month
                  </span>
                </p>
              </div>
              <div class="flex flex-col gap-6 text-slate-600">
                <p class="text-sm leading-tight">
                  For significant organizations with millions of monthly
                  transactions.
                </p>
                <div class="flex flex-col items-start justify-start gap-4">
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Unlimited products</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Unlimited subscribers</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Advanced analytics</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">12-hour support response time</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Custom integrations</p>
                  </div>
                  <div class="inline-flex items-center justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-blue-600"
                    >
                      <path d="M7.40274 9.33332L9.73734 11.6667L17.5 3.75M16.9975 8.2176C17.4019 9.90307 17.2206 11.6793 16.4848 13.2438C15.7489 14.8083 14.5039 16.0641 12.9619 16.7974C11.4199 17.5306 9.67622 17.696 8.02809 17.2651C6.37996 16.8343 4.9293 15.834 3.92329 14.4346C2.91727 13.0352 2.41815 11.3235 2.51095 9.59091C2.60376 7.85832 3.28276 6.21216 4.43225 4.9329C5.58175 3.65365 7.13063 2.82044 8.81497 2.57527C10.4993 2.33008 12.2149 2.6881 13.6694 3.5883"></path>
                    </svg>
                    <p class="text-sm">Custom API development</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 w-full disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100"
            >
              <div>Buy Now</div>
            </button>
          </div>
        </div>
      </section>
      <section class="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
        <div class="flex justify-between">
          <h3 class="text-4xl font-semibold text-slate-950">Blog</h3>
          <button
            type="button"
            aria-disabled="false"
            class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100"
          >
            <div>See More</div>
          </button>
        </div>
        <div class="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          <div class="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
            <div class="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center">
              <img
                src="https://www.tailframes.com/images/illustration-2.webp"
                alt=""
                class="h-[134px] w-[235px] -translate-x-1/4"
              />
            </div>
            <div class="flex flex-col items-start gap-3">
              <p class="inline-flex items-center justify-start gap-2">
                <span class="text-xs leading-none text-slate-400">
                  Categories
                </span>
                <span class="size-1.5 rounded-full bg-blue-700"></span>
                <span class="text-xs leading-none text-slate-400">
                  4 min. read
                </span>
              </p>
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-semibold">Blog Post Heading</h3>
                <h4 class="max-w-[90%] text-sm leading-tight text-slate-400">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for beautiful landings.
                </h4>
              </div>
              <button
                type="button"
                aria-disabled="false"
                class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 p-0"
              >
                <div>Read More</div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  stroke-width="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 stroke-inherit"
                >
                  <path
                    d="M11 16L15 12L11 8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
            <div class="flex h-[280px] w-full justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] items-end">
              <img
                src="https://www.tailframes.com/images/illustration.webp"
                alt=""
                class="h-[220px] w-[116px]"
              />
            </div>
            <div class="flex flex-col items-start gap-3">
              <p class="inline-flex items-center justify-start gap-2">
                <span class="text-xs leading-none text-slate-400">
                  Categories
                </span>
                <span class="size-1.5 rounded-full bg-blue-700"></span>
                <span class="text-xs leading-none text-slate-400">
                  4 min. read
                </span>
              </p>
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-semibold">Blog Post Heading</h3>
                <h4 class="max-w-[90%] text-sm leading-tight text-slate-400">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for beautiful landings.
                </h4>
              </div>
              <button
                type="button"
                aria-disabled="false"
                class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 p-0"
              >
                <div>Read More</div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  stroke-width="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 stroke-inherit"
                >
                  <path
                    d="M11 16L15 12L11 8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
            <div class="flex h-[280px] w-full justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] items-end">
              <img
                src="https://www.tailframes.com/images/illustration-3.webp"
                alt=""
                class="h-[217px] w-[111px]"
              />
            </div>
            <div class="flex flex-col items-start gap-3">
              <p class="inline-flex items-center justify-start gap-2">
                <span class="text-xs leading-none text-slate-400">
                  Categories
                </span>
                <span class="size-1.5 rounded-full bg-blue-700"></span>
                <span class="text-xs leading-none text-slate-400">
                  4 min. read
                </span>
              </p>
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-semibold">Blog Post Heading</h3>
                <h4 class="max-w-[90%] text-sm leading-tight text-slate-400">
                  We've done it carefully and simply. Combined with the
                  ingredients makes for beautiful landings.
                </h4>
              </div>
              <button
                type="button"
                aria-disabled="false"
                class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 p-0"
              >
                <div>Read More</div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  stroke-width="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 stroke-inherit"
                >
                  <path
                    d="M11 16L15 12L11 8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="flex flex-col gap-2 py-6 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        <div class="mb-6 flex w-full flex-col-reverse gap-12 lg:mb-24 lg:flex-row lg:gap-24">
          <div class="grid grow grid-cols-1 gap-12 text-center md:grid-cols-2 md:justify-items-center lg:grid-cols-3 lg:text-start 2xl:gap-24 min-[1800px]:grid-cols-4">
            <div class="flex flex-col">
              <p class="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Column
              </p>
              <div class="flex flex-col gap-4">
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Column
              </p>
              <div class="flex flex-col gap-4">
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Column
              </p>
              <div class="flex flex-col gap-4">
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
                <a href="/" class="text-sm leading-tight text-slate-500">
                  Footer Link
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <p class="font-semibold leading-normal text-black">
              Receive latest news
            </p>
            <form class="flex w-full flex-col items-start gap-2 min-[432px]:w-auto min-[432px]:min-w-[400px] min-[432px]:flex-row">
              <div class="inline-flex w-full flex-col items-start gap-1.5 stroke-black transition-colors duration-300 ease-in-out focus-within:stroke-blue-700">
                <div class="relative w-full">
                  <input
                    class="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2.5"
                    aria-disabled="false"
                    id="email"
                    placeholder="Enter your e-mail address*"
                    required=""
                    type="email"
                  />
                </div>
              </div>
              <button
                type="submit"
                aria-disabled="false"
                class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white text-white hover:bg-blue-950 h-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100 px-4 w-full min-w-fit min-[432px]:w-auto"
              >
                <div>Get Started</div>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  stroke="#1D4ED8"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-inherit"
                >
                  <g clip-path="url(#clip0_4036_225)">
                    <path
                      d="M13 8.3335L9.66667 11.6668L14.6667 16.6668L18 3.3335L3 9.16683L6.33333 10.8335L8 15.8335L10.5 12.5002"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4036_225">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
            <p class="max-w-xs text-sm leading-tight text-slate-500">
              *by entering your e-mail address you confirming that you're agree
              to subscribe to our newsletter.
            </p>
          </div>
        </div>
        <div
          role="separator"
          class="bg-slate-200 my-4 w-full h-px hidden lg:block"
        ></div>
        <div class="flex w-full flex-col-reverse items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-0 lg:text-left">
          <div class="m-auto lg:w-full">
            <svg
              width="149"
              height="42"
              viewBox="0 0 149 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_3302_6976)">
                <path
                  d="M6.02873 16.4468C4.90829 12.2653 7.3898 7.96719 11.5713 6.84676L29.5532 2.02852C33.7348 0.908086 38.0328 3.38959 39.1533 7.57112L43.9715 25.553C45.092 29.7345 42.6104 34.0326 38.4289 35.1531L20.447 39.9713C16.2655 41.0917 11.9674 38.6102 10.847 34.4287L6.02873 16.4468Z"
                  fill="url(#linear-gradient-id-3528)"
                ></path>
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.2295 4.5523L12.2476 9.37053C9.45988 10.1175 7.80555 12.9829 8.55251 15.7706L13.3707 33.7525C14.1177 36.5402 16.9831 38.1945 19.7708 37.4475L37.7527 32.6293C40.5404 31.8823 42.1947 29.0169 41.4477 26.2293L36.6295 8.24736C35.8825 5.45968 33.0172 3.80534 30.2295 4.5523ZM11.5713 6.84676C7.3898 7.96719 4.90829 12.2653 6.02873 16.4468L10.847 34.4287C11.9674 38.6102 16.2655 41.0917 20.447 39.9713L38.4289 35.1531C42.6104 34.0326 45.092 29.7345 43.9715 25.553L39.1533 7.57112C38.0328 3.38959 33.7348 0.908085 29.5532 2.02852L11.5713 6.84676Z"
                fill="white"
              ></path>
              <g filter="url(#filter1_dd_3302_6976)">
                <path
                  d="M28.7698 11.1306L29.9856 15.668L24.5131 17.1344L29.9968 21.4011L25.0716 22.7208L26.8173 29.2361L22.4393 30.4092L20.6936 23.8939L25.0716 22.7208L19.2596 18.5421L18.0438 14.0046L28.7698 11.1306Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M64.5602 12V14.64H60.7802V26H58.0202V14.64H54.2602V12H64.5602ZM71.7646 16H74.3446V26H71.7646V24.82C70.9913 25.7933 69.9046 26.28 68.5046 26.28C67.1713 26.28 66.0246 25.7733 65.0646 24.76C64.118 23.7333 63.6446 22.48 63.6446 21C63.6446 19.52 64.118 18.2733 65.0646 17.26C66.0246 16.2333 67.1713 15.72 68.5046 15.72C69.9046 15.72 70.9913 16.2067 71.7646 17.18V16ZM67.0046 23.04C67.5246 23.56 68.1846 23.82 68.9846 23.82C69.7846 23.82 70.4446 23.56 70.9646 23.04C71.498 22.5067 71.7646 21.8267 71.7646 21C71.7646 20.1733 71.498 19.5 70.9646 18.98C70.4446 18.4467 69.7846 18.18 68.9846 18.18C68.1846 18.18 67.5246 18.4467 67.0046 18.98C66.4846 19.5 66.2246 20.1733 66.2246 21C66.2246 21.8267 66.4846 22.5067 67.0046 23.04ZM77.9642 14.8C77.5375 14.8 77.1642 14.6467 76.8442 14.34C76.5375 14.02 76.3842 13.6467 76.3842 13.22C76.3842 12.7933 76.5375 12.42 76.8442 12.1C77.1642 11.78 77.5375 11.62 77.9642 11.62C78.4042 11.62 78.7775 11.78 79.0842 12.1C79.4042 12.42 79.5642 12.7933 79.5642 13.22C79.5642 13.6467 79.4042 14.02 79.0842 14.34C78.7775 14.6467 78.4042 14.8 77.9642 14.8ZM76.6842 26V16H79.2642V26H76.6842ZM81.6256 26V11.4H84.2056V26H81.6256ZM91.947 14.2C90.5336 14.0933 89.827 14.66 89.827 15.9V16H91.947V18.48H89.827V26H87.247V18.48H85.807V16H87.247V15.9C87.247 14.4867 87.6403 13.4133 88.427 12.68C89.2136 11.9467 90.387 11.6267 91.947 11.72V14.2ZM95.7095 17.72C95.9495 17.08 96.3428 16.6 96.8895 16.28C97.4495 15.96 98.0695 15.8 98.7495 15.8V18.68C97.9628 18.5867 97.2561 18.7467 96.6295 19.16C96.0161 19.5733 95.7095 20.26 95.7095 21.22V26H93.1295V16H95.7095V17.72ZM107.487 16H110.067V26H107.487V24.82C106.714 25.7933 105.627 26.28 104.227 26.28C102.894 26.28 101.747 25.7733 100.787 24.76C99.8406 23.7333 99.3673 22.48 99.3673 21C99.3673 19.52 99.8406 18.2733 100.787 17.26C101.747 16.2333 102.894 15.72 104.227 15.72C105.627 15.72 106.714 16.2067 107.487 17.18V16ZM102.727 23.04C103.247 23.56 103.907 23.82 104.707 23.82C105.507 23.82 106.167 23.56 106.687 23.04C107.221 22.5067 107.487 21.8267 107.487 21C107.487 20.1733 107.221 19.5 106.687 18.98C106.167 18.4467 105.507 18.18 104.707 18.18C103.907 18.18 103.247 18.4467 102.727 18.98C102.207 19.5 101.947 20.1733 101.947 21C101.947 21.8267 102.207 22.5067 102.727 23.04ZM123.467 15.72C124.613 15.72 125.527 16.0933 126.207 16.84C126.9 17.5867 127.247 18.5867 127.247 19.84V26H124.667V20.02C124.667 19.42 124.52 18.9533 124.227 18.62C123.933 18.2867 123.52 18.12 122.987 18.12C122.4 18.12 121.94 18.3133 121.607 18.7C121.287 19.0867 121.127 19.6467 121.127 20.38V26H118.547V20.02C118.547 19.42 118.4 18.9533 118.107 18.62C117.813 18.2867 117.4 18.12 116.867 18.12C116.293 18.12 115.833 18.3133 115.487 18.7C115.153 19.0867 114.987 19.6467 114.987 20.38V26H112.407V16H114.987V17.06C115.587 16.1667 116.513 15.72 117.767 15.72C118.993 15.72 119.9 16.2 120.487 17.16C121.153 16.2 122.147 15.72 123.467 15.72ZM131.618 22.06C131.965 23.3133 132.905 23.94 134.438 23.94C135.425 23.94 136.171 23.6067 136.678 22.94L138.758 24.14C137.771 25.5667 136.318 26.28 134.398 26.28C132.745 26.28 131.418 25.78 130.418 24.78C129.418 23.78 128.918 22.52 128.918 21C128.918 19.4933 129.411 18.24 130.398 17.24C131.385 16.2267 132.651 15.72 134.198 15.72C135.665 15.72 136.871 16.2267 137.818 17.24C138.778 18.2533 139.258 19.5067 139.258 21C139.258 21.3333 139.225 21.6867 139.158 22.06H131.618ZM131.578 20.06H136.678C136.531 19.38 136.225 18.8733 135.758 18.54C135.305 18.2067 134.785 18.04 134.198 18.04C133.505 18.04 132.931 18.22 132.478 18.58C132.025 18.9267 131.725 19.42 131.578 20.06ZM143.049 18.84C143.049 19.1067 143.222 19.3267 143.569 19.5C143.929 19.66 144.362 19.8067 144.869 19.94C145.375 20.06 145.882 20.22 146.389 20.42C146.895 20.6067 147.322 20.9267 147.669 21.38C148.029 21.8333 148.209 22.4 148.209 23.08C148.209 24.1067 147.822 24.9 147.049 25.46C146.289 26.0067 145.335 26.28 144.189 26.28C142.135 26.28 140.735 25.4867 139.989 23.9L142.229 22.64C142.522 23.5067 143.175 23.94 144.189 23.94C145.109 23.94 145.569 23.6533 145.569 23.08C145.569 22.8133 145.389 22.6 145.029 22.44C144.682 22.2667 144.255 22.1133 143.749 21.98C143.242 21.8467 142.735 21.68 142.229 21.48C141.722 21.28 141.289 20.9667 140.929 20.54C140.582 20.1 140.409 19.5533 140.409 18.9C140.409 17.9133 140.769 17.14 141.489 16.58C142.222 16.0067 143.129 15.72 144.209 15.72C145.022 15.72 145.762 15.9067 146.429 16.28C147.095 16.64 147.622 17.16 148.009 17.84L145.809 19.04C145.489 18.36 144.955 18.02 144.209 18.02C143.875 18.02 143.595 18.0933 143.369 18.24C143.155 18.3867 143.049 18.5867 143.049 18.84Z"
                fill="black"
              ></path>
              <defs>
                <filter
                  id="filter0_dd_3302_6976"
                  x="0.759705"
                  y="0.759521"
                  width="48.4808"
                  height="48.4807"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feMorphology
                    radius="1"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_3302_6976"
                  ></feMorphology>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="multiply"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3302_6976"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feMorphology
                    radius="2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect2_dropShadow_3302_6976"
                  ></feMorphology>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_3302_6976"
                    result="effect2_dropShadow_3302_6976"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_3302_6976"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_dd_3302_6976"
                  x="13.0438"
                  y="10.1306"
                  width="21.953"
                  height="29.2786"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feMorphology
                    radius="1"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_3302_6976"
                  ></feMorphology>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="multiply"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3302_6976"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feMorphology
                    radius="2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect2_dropShadow_3302_6976"
                  ></feMorphology>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_3302_6976"
                    result="effect2_dropShadow_3302_6976"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_3302_6976"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="linear-gradient-id-3528"
                  x1="35.517"
                  y1="32.8232"
                  x2="27.6785"
                  y2="4.89887"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2050D9"></stop>
                  <stop offset="1" stop-color="#6FA1F3"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            role="separator"
            class="bg-slate-200 w-full h-px my-2 lg:hidden"
          ></div>
          <div class="flex gap-8">
            <a
              type="button"
              href="https://www.facebook.com"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 cursor-pointer p-0 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="facebook"
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4519_3773)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.99999 1.66666C5.39761 1.66666 1.66666 5.42041 1.66666 10.0509C1.66666 14.2357 4.71404 17.7043 8.69791 18.3333V12.4745H6.58202V10.0509H8.69791V8.20376C8.69791 6.10246 9.94199 4.94176 11.8455 4.94176C12.7572 4.94176 13.7109 5.10551 13.7109 5.10551V7.16883H12.6601C11.6249 7.16883 11.3021 7.81512 11.3021 8.47816V10.0509H13.6132L13.2438 12.4745H11.3021V18.3333C15.2859 17.7043 18.3333 14.2357 18.3333 10.0509C18.3333 5.42041 14.6024 1.66666 9.99999 1.66666Z"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4519_3773">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a
              type="button"
              href="https://www.instagram.com"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 cursor-pointer p-0 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="instagram"
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4519_3774)">
                    <path
                      d="M13.125 1.66666H6.87499C3.99851 1.66666 1.66666 3.99851 1.66666 6.87499V13.125C1.66666 16.0015 3.99851 18.3333 6.87499 18.3333H13.125C16.0015 18.3333 18.3333 16.0015 18.3333 13.125V6.87499C18.3333 3.99851 16.0015 1.66666 13.125 1.66666Z"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M9.99999 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 9.99999C13.3333 8.15904 11.8409 6.66666 9.99999 6.66666C8.15904 6.66666 6.66666 8.15904 6.66666 9.99999C6.66666 11.8409 8.15904 13.3333 9.99999 13.3333Z"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M14.5833 6.66666C15.2737 6.66666 15.8333 6.10701 15.8333 5.41666C15.8333 4.7263 15.2737 4.16666 14.5833 4.16666C13.893 4.16666 13.3333 4.7263 13.3333 5.41666C13.3333 6.10701 13.893 6.66666 14.5833 6.66666Z"
                      fill="#1D4ED8"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4519_3774">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a
              type="button"
              href="https://www.dribbble.com"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 cursor-pointer p-0 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="dribble"
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4519_3775)">
                    <path
                      d="M1.66666 9.99999C1.66666 14.6023 5.39761 18.3333 9.99999 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99999C18.3333 5.39761 14.6023 1.66666 9.99999 1.66666C5.39761 1.66666 1.66666 5.39761 1.66666 9.99999Z"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.8938 17.3696C12.9167 11.6667 10.4167 6.6667 7.08334 2.19138"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.72211 9.03382C5.00003 9.16666 12.7357 8.74999 15.9512 4.16666"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18.3064 10.675C12.7865 9.03391 6.25 11.6667 4.35953 16.1344"
                      stroke="#1D4ED8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4519_3775">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a
              type="button"
              href="https://www.github.com"
              aria-disabled="false"
              class="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-700 cursor-pointer p-0 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="dribble"
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#1D4ED8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4519_3776)">
                    <path
                      d="M7.64959 15.8365C3.37609 17.0849 3.37609 13.7559 1.66669 13.3397M13.6325 18.3333V15.1125C13.6646 14.7156 13.6095 14.3166 13.471 13.9421C13.3324 13.5676 13.1136 13.226 12.8291 12.9402C15.5128 12.6489 18.3334 11.6585 18.3334 7.11432C18.3331 5.95233 17.8741 4.8349 17.0513 3.99331C17.441 2.9767 17.4134 1.853 16.9744 0.855643C16.9744 0.855643 15.9658 0.564348 13.6325 2.08741C11.6735 1.57041 9.60857 1.57041 7.64959 2.08741C5.31626 0.564348 4.30771 0.855643 4.30771 0.855643C3.86872 1.853 3.84117 2.9767 4.23079 3.99331C3.40184 4.84114 2.94235 5.96867 2.94874 7.13929C2.94874 11.6502 5.76925 12.6406 8.45301 12.9652C8.17182 13.2482 7.95494 13.5856 7.81652 13.9555C7.6781 14.3255 7.62123 14.7197 7.64959 15.1125V18.3333"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4519_3776">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

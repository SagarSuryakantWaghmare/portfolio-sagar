"use client";

import { BentoCard } from "./BentoCard";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

export function ConnectionsBento({
  linkTo,
}: {
  linkTo?: string;
}): React.ReactNode {
  const controls = useAnimation();

  return (
    <BentoCard height="h-[300px]" linkTo={linkTo}>
      <div
        className="flex h-full flex-col"
        onMouseEnter={() => controls.start("active")}
        onMouseLeave={() => controls.start("idle")}
      >
        <div className="group-hover:from-bg-white absolute inset-y-0 left-0 z-20 w-1/3 bg-gradient-to-r from-bg-primary to-transparent"></div>
        <div className="group-hover:from-bg-white absolute inset-y-0 right-0 z-20 w-1/3 bg-gradient-to-l from-bg-primary to-transparent"></div>
        <div>
          <BackgroundPattern />
          <span className="absolute left-1/2 top-2.5 -translate-x-1/2">
            <div className="relative mt-9">
              <svg
                className="mx-auto"
                width="148"
                height="148"
                viewBox="0 0 148 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_0_1)">
                  <rect
                    x="16"
                    y="16"
                    width="116"
                    height="116"
                    rx="58"
                    fill="#F7F7F8"
                  />
                  <rect
                    className="stroke-[#D6DADE] transition-colors delay-200 duration-500 group-hover:stroke-orange-primary"
                    x="16.75"
                    y="16.75"
                    width="114.5"
                    height="114.5"
                    rx="57.25"
                    stroke="#D6DADE"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_0_1"
                    x="16"
                    y="14"
                    width="116"
                    height="118"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_0_1"
                    />
                  </filter>
                </defs>
              </svg>
              <img
                className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                src="/images/Sagar/photo1.jpg"
                alt="Profile"
              />
            </div>
          </span>

          <span className="hidden md:block">
            {/* Connection 1 */}
            <AnimatedConnectionCircle
              src="/images/Sagar/photo2.jpg"
              top="55%"
              left="23%"
              delay={0.1}
              sizeClass="w-12 h-12"
              controls={controls}
            />

            {/* Connection 2 */}
            <AnimatedConnectionCircle
              src="/images/Sagar/photo3.jpg"
              top="53%"
              left="67%"
              delay={0.3}
              controls={controls}
            />

            {/* Connection 3 */}
            <AnimatedConnectionCircle
              src="/images/Sagar/photo4.jpg"
              top="4%"
              left="32%"
              delay={0.2}
              sizeClass="w-14 h-14"
              controls={controls}
            />

            {/* Connection 4 */}
            <AnimatedConnectionCircle
              src="/images/Sagar/photo5.jpg"
              top="15%"
              left="78%"
              delay={0.4}
              sizeClass="w-10 h-10"
              controls={controls}
            />

            {/* Connection 5 */}
            <AnimatedConnectionCircle
              src="/images/Sagar/photo2.jpg"
              top="5%"
              left="7%"
              delay={0.5}
              sizeClass="w-9 h-9"
              controls={controls}
            />
          </span>

          {/* mobile & tablet circle */}
          <span className="lg:hidden">
            <ConnectionCircle
              sizeClass="w-10 h-10"
              className="absolute left-4 top-6 md:left-24"
            >
              <img
                className="rounded-full"
                src="/images/Sagar/photo2.jpg"
                alt="Connection"
              />
            </ConnectionCircle>
            <ConnectionCircle
              sizeClass="w-12 h-12"
              className="absolute bottom-20 left-14 md:left-52"
            >
              <img
                className="rounded-full"
                src="/images/Sagar/photo3.jpg"
                alt="Connection"
              />
            </ConnectionCircle>
            <ConnectionCircle
              sizeClass="w-14 h-14"
              className="absolute right-16 top-4 md:right-52"
            >
              <img
                className="rounded-full"
                src="/images/Sagar/photo4.jpg"
                alt="Connection"
              />
            </ConnectionCircle>
            <ConnectionCircle
              sizeClass="w-11 h-11"
              className="absolute bottom-20 right-4 md:right-12"
            >
              <img
                className="rounded-full"
                src="/images/Sagar/photo5.jpg"
                alt="Connection"
              />
            </ConnectionCircle>
          </span>
        </div>
        <div className="z-20 mt-auto w-full text-balance text-center">
          <h2 className="text-base font-medium">Connections</h2>
          <p className="mt-1 text-text-secondary">
            Building meaningful relationships and growing my network.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}

function BackgroundPattern() {
  return (
    <svg
      className="absolute left-1/2 top-0 -translate-x-1/2"
      width="704"
      height="250"
      viewBox="0 0 637 250"
    >
      <g clipPath="url(#clip0_170_308)">
        <g filter="url(#filter0_i_170_308)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z"
            fill="#D6DADE"
            fillOpacity="0.24"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_170_308"
          x="-91"
          y="33.8782"
          width="818"
          height="173.744"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="0.75" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_170_308"
          />
        </filter>
        <clipPath id="clip0_170_308">
          <rect
            width="704"
            height="250"
            fill="white"
            transform="translate(-34)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ConnectionCircle({
  children,
  sizeClass = "w-16 h-16",
  paddingClass = "p-1",
  className,
}: {
  children: React.ReactNode;
  sizeClass?: string;
  paddingClass?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "border-bg-secondary rounded-full border bg-[#EDEEF0]",
        sizeClass,
        paddingClass,
        className,
      )}
    >
      {children}
    </div>
  );
}

function AnimatedConnectionCircle({
  src,
  sizeClass = "w-16 h-16",
  paddingClass = "p-1",
  top,
  left,
  delay,
  controls,
}: {
  src: string;
  sizeClass?: string;
  paddingClass?: string;
  top: string;
  left: string;
  delay: number;
  controls: ReturnType<typeof useAnimation>;
}) {
  return (
    <motion.div
      initial="idle"
      animate={controls}
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      style={{ top, left }}
      className={`absolute ${sizeClass} ${paddingClass} z-10`}
    >
      <ConnectionCircle sizeClass={sizeClass} paddingClass={paddingClass}>
        <img className="rounded-full" src={src} alt="Connection" />
      </ConnectionCircle>
    </motion.div>
  );
}

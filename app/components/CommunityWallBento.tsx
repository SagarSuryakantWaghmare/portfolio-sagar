"use client";
import { BentoCard } from "./BentoCard";
import { motion, type Variants } from "framer-motion";

const lineVariants: Variants = {
  initial: {
    opacity: 0.5,
  },
  hover: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const card1Variants: Variants = {
  initial: {
    rotate: -8,
    y: -15,
  },
  hover: {
    rotate: 0,
    y: 0,
  },
};

const card2Variants: Variants = {
  initial: {
    rotate: 8,
    y: -5,
  },
  hover: {
    rotate: 0,
    y: 0,
  },
};

export function CommunityWallBento() {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <BentoCard linkTo="/community" height="h-[276px]">
        {/* Dots */}
        <div className="absolute top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Card 1 */}
        <motion.svg
          className="absolute top-0 w-48 md:w-40"
          viewBox="0 0 171 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={card1Variants}
        >
          <g clipPath="url(#clip0_1_2784)">
            <g filter="url(#filter0_d_1_2784)">
              <g filter="url(#filter1_i_1_2784)">
                <rect
                  x="-0.170898"
                  y="-17.4697"
                  width="130"
                  height="160"
                  rx="12"
                  transform="rotate(-8 -0.170898 -17.4697)"
                  fill="white"
                />
              </g>
              <rect
                x="-0.670898"
                y="-17.9697"
                width="129"
                height="159"
                rx="11.5"
                transform="rotate(-8 -0.670898 -17.9697)"
                stroke="#DFE3E6"
              />
            </g>
            <motion.line
              x1="32.1396"
              y1="23.7507"
              x2="94.9622"
              y2="32.4795"
              stroke="#DFE3E6"
              strokeLinecap="round"
              variants={lineVariants}
            />
            <motion.line
              x1="31.2578"
              y1="30.0932"
              x2="72.5578"
              y2="35.3096"
              stroke="#DFE3E6"
              strokeLinecap="round"
              variants={lineVariants}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_2784"
              x="-39.5566"
              y="-42.1885"
              width="208.572"
              height="233.866"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2784"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2784"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_2784"
              x="-0.170898"
              y="-17.4697"
              width="130"
              height="160"
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
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2784" />
            </filter>
            <clipPath id="clip0_1_2784">
              <rect width="171" height="152" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        {/* Card 2 */}
        <motion.svg
          className="absolute right-0 top-[50px] w-48 md:w-40"
          viewBox="0 0 171 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={card2Variants}
        >
          <g clipPath="url(#clip0_1_2787)">
            <g filter="url(#filter0_d_1_2787)">
              <g filter="url(#filter1_i_1_2787)">
                <rect
                  x="158.883"
                  y="-8.95361"
                  width="130"
                  height="160"
                  rx="12"
                  transform="rotate(8 158.883 -8.95361)"
                  fill="white"
                />
              </g>
              <rect
                x="158.383"
                y="-9.45361"
                width="129"
                height="159"
                rx="11.5"
                transform="rotate(8 158.383 -9.45361)"
                stroke="#DFE3E6"
              />
            </g>
            <motion.line
              x1="127.274"
              y1="32.9883"
              x2="64.4514"
              y2="24.2595"
              stroke="#DFE3E6"
              strokeLinecap="round"
              variants={lineVariants}
            />
            <motion.line
              x1="128.156"
              y1="39.3308"
              x2="86.856"
              y2="34.1144"
              stroke="#DFE3E6"
              strokeLinecap="round"
              variants={lineVariants}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_2787"
              x="1.31348"
              y="-33.6724"
              width="208.572"
              height="233.866"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2787"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2787"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_2787"
              x="158.883"
              y="-8.95361"
              width="130"
              height="160"
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
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2787" />
            </filter>
            <clipPath id="clip0_1_2787">
              <rect width="171" height="152" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        {/* Content */}
        <div className="z-10 grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
          <div className="col-1 row-start-2">
            <h2 className="mb-2 font-medium">Community</h2>
            <p className="text-text-secondary">Connect and collaborate</p>
          </div>
        </div>
      </BentoCard>
    </motion.div>
  );
}

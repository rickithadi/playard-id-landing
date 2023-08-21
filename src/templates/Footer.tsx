import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";

const Footer = () => (
  <Background color="bg-[#2A2A2A]">
    <Section top>
      <CenteredFooter
        logo={
          <img
            src="/lightIcon.png"
            alt="logo"
            className="w-[120px] order-first md:order-last mx-auto md:col-span-4 "
          />
        }
        iconList={
          <>
            <a
              href="https://www.linkedin.com/company/playard-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="mx-3" size="2rem" />
            </a>

            <a
              href="https://www.instagram.com/playard.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="mx-3" size="2rem" />
            </a>
          </>
        }
      >
        {/* <li className="px-10 text-white">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-10  text-white">
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className="px-10  text-white">
          <Link href="/">
            <a>Product</a>
          </Link>
        </li> */}
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

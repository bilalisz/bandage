import React from "react";
import Link from "next/link";
import { FooterLinkType } from "@/types";
import TypographyHeadingH3 from "../custome-typography/typography-heading-h3";
import TypographyBody2 from "../custome-typography/typography-body2";

type PropsType = {
  heading: string;
  linkCollection: FooterLinkType[] | undefined;
};

const FooterLinks: React.FC<PropsType> = ({ heading, linkCollection }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-6">
      <TypographyHeadingH3 className="tw-text-xl tw-font-semibold">
        {heading}
      </TypographyHeadingH3>
      <ul className="tw-flex tw-flex-col tw-gap-4">
        {linkCollection?.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>
              <TypographyBody2 className="tw-text-xs sm:!tw-text-sm  tw-font-semibold tw-text-app-gray-700">
                {link.label}
              </TypographyBody2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

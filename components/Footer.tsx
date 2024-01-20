import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

function FooterColumn({ title, links }: ColumnProps) {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link key={link} href={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flexStart footer">
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
            priority={true}
          />

          <p className="mx-w-xs mt-5 text-start text-sm font-normal">
            Flexibble is a platform for designers and developers to share their
            work and collaborate with others.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />

            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />

            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ {new Date().getFullYear()} Flexibble. All rights reserved.</p>

        <p className="text-gray-500">
          <span className="font-semibold text-black">10,240</span> projects
          submitted
        </p>
      </div>
    </footer>
  );
}

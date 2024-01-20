import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

export default function Navbar() {
  const session = null;
  return (
    <header>
      <nav className="flexBetween navbar">
        <div className="flexStart flex-1 gap-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={115}
              height={43}
              alt="Flexibble"
              priority={true}
            />
          </Link>

          <ul className="text-small hidden gap-7 xl:flex">
            {NavLinks.map((link) => {
              return (
                <li key={link.key}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flexCenter gap-4">
          {session ? (
            <>
              user photo <Link href="/">Share work</Link>
            </>
          ) : (
            <AuthProvider />
          )}
        </div>
      </nav>
    </header>
  );
}

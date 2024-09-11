import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <Image
      src="/images/logos/seemas.svg"
      alt="Seemas Logo"
      width={112}
      height={56}
    />
  </Link>
);

import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image src="/logo1.png" alt="Ameza logo" width={156} height={32} className={className ?? "h-8 w-auto"} priority />
  );
}

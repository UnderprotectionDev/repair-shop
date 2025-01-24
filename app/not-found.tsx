import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 min-h-screen">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          className="m-0 rounded-xl"
          src="/images/not-found-1024x1024.png"
          width={300}
          height={300}
          sizes="300px"
          alt="Page Not Found"
          priority={true}
          title="Page Not Found"
        />
        <Link
          href="/home"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

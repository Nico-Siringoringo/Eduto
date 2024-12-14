import React from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function CourseViewLayout({children}) {
  return (
    <div>
      <div className="p-5 shadow-md flex justify-between">
        <Link href={'/dashboard'}>
          <div className="flex gap-2  items-center">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            <h2 className="font-bold text-2xl mt-1">Eduto</h2>
          </div>
        </Link>
        <UserButton />
      </div>
      <div className="mx-10 md:mx-36 lg:px-60 mt-10">{children}</div>
    </div>
  );
}

export default CourseViewLayout
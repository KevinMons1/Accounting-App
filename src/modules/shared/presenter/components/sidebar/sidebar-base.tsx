import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

const SidebarBase = () => {
  return (
    <aside className='h-screen bg-gray-100 p-4'>
      <p className='mb-10 text-2xl font-bold'>Dashboard</p>
      <nav>
        <ul>
          <li>
            <Link href='/' className='flex items-center gap-2'>
              <FileText />
              My invoices
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarBase;

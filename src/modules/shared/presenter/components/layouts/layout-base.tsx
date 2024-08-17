import React from 'react';
import SidebarBase from '../sidebar/sidebar-base';

const LayoutBase = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex'>
      <div className='w-[280px]'>
        <SidebarBase />
      </div>
      <main className='flex-grow py-4'>{children}</main>
    </div>
  );
};

export default LayoutBase;

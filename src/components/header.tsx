import { Popover, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import {
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';

// ヘッダー
const Header: NextPage = () => {
  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex justify-between items-center py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:flex-1 lg:w-0">
            <Link href="/">
              <img src="icon/manebi-log.png" alt="まねび学園ロゴ" className="w-40 cursor-pointer" />
            </Link>
          </div>

          {/* ハンバーガーメニュー(SP時のみ表示) */}
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex flex-col justify-center items-center p-2 text-black hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
              <span className="text-xs">メニュー</span>
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/about">
              <span className="font-mono text-base font-medium text-[#010A23] hover:text-[#003692] cursor-pointer">
                まねび学園について
              </span>
            </Link>
            <Link href="/classroom">
              <span className="font-mono text-base font-medium text-[#010A23] hover:text-[#003692] cursor-pointer">
                英語教室
              </span>
            </Link>
            <Link href="/products">
              <span className="font-mono text-base font-medium text-[#010A23] hover:text-[#003692] cursor-pointer">
                SST教材販売
              </span>
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 bg-white transition origin-top-right md:hidden">
          <div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black/5 shadow-lg">
            <div className="px-5 pt-5 pb-6">
              <div className="flex justify-between items-center">
                <img src="icon/manebi-log.png" alt="まねび学園ロゴ" className="w-auto h-8" />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex flex-col justify-center items-center p-2 text-black hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                    <span className="text-xs">閉じる</span>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-14">
                <nav className="grid gap-y-8">
                  <Link href="/">
                    <div className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                      <HomeIcon className="shrink-0 w-6 h-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">トップページ</span>
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                      <InformationCircleIcon className="shrink-0 w-6 h-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">まねび学園について</span>
                    </div>
                  </Link>
                  <Link href="/classroom">
                    <div className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                      <BookOpenIcon className="shrink-0 w-6 h-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">英語教室</span>
                    </div>
                  </Link>
                  <Link href="/products">
                    <div className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                      <ShoppingCartIcon className="shrink-0 w-6 h-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">SST教材販売</span>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;

import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { HiDocument, HiDocumentDuplicate, HiHome, HiOutlineArrowNarrowLeft, HiPhone } from 'react-icons/hi'
import { FiActivity, FiAward, FiCalendar } from 'react-icons/fi'

const Menus = [{ id: 1, title: 'Головна', path: '/home', src: <HiHome /> },
  { id: 2, title: 'Акти порушень', path: '/acts', src: <HiDocumentDuplicate /> },
  { id: 3, title: 'Преміювання', path: '/awards', src: <FiAward /> },
  { id: 4, title: 'Протерміновані акти', path: '/deniedActs', src: <FiCalendar /> },
  { id: 5, title: 'Звітність', path: '/reporting', src: <FiActivity /> },
  { id: 6, title: 'Внутрішні документи', path: '/internalDocuments', src: <HiDocument /> },
  { id: 7, title: 'Технічна підтримка', path: '/support', src: <HiPhone /> }]
export const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return (
    <div className='flex sm:flex-row'>
      <div
        className={`${open ? 'w-60' : 'w-fit'} sm:block h-screen duration-300 bg-gray-600 p-5 `}
      >
        <HiOutlineArrowNarrowLeft
          className={`${!open && 'rotate-180'} absolute mx-4 text-white cursor-pointer  `}
          onClick={() => setOpen(!open)}
        />
        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link key={index} to={menu.path}>
              <li
                className={`flex items-center gap-x-6 text-white rounded-lg cursor-pointer p-4 hover:text-white 
                      ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path && 'bg-cyan-500'
                }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${!open && 'hidden'} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <main className='flex-1 bg-indigo-100'>
        <div className='flex flex-col h-screen overflow-y-auto'>
          {children}
        </div>
      </main>
    </div>
  )
}
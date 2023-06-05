export function Footer({user}) {
  return (
    <div className='fixed bottom-0 w-full p-5 flex items-center justify-center  bg-gray-600 border-2 border-black'>
      <span className='text-sm text-gray-50 text-center dark:text-gray-400'>
        ©{new Date().getFullYear()} React &amp; TailwindCSS. All Rights Reserved.
        {user && user.roles && (
          <span> user roles: {user.roles.map((role) => role).join(', ')}</span>
        )}
      </span>
    </div>
  )
}

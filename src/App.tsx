import avatarImage from './assets/avatar-jessica.jpeg'

function App() {
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' }
  ]

  return (

    <main className="flex min-h-screen items-center justify-center">
     <div className="bg-gray-800 w-3/5 sm:w-[400px] md:w-[500px] shadow-sm rounded-xl"> 
      <div className="flex flex-col items-center justify-center h-full gap-5">
          <img 
            src={avatarImage} 
            alt="Jessica Randall" 
            className="w-[88px] h-[88px] rounded-full mt-6"
          />
          <h1 className="text-white font-bold text-xl">Jessica Randall</h1>
          <h2 className="text-green">London, United Kingdom</h2>
          
          <p className="text-white text-[14px]">
            "Font-end developer and avid reader"
          </p>
          <div className="flex flex-col gap-5 items-center justify-center w-full mb-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              className="info-button"
              >{link.name}</a>
          ))}
          </div>
        </div>
      </div>
    </main>

  )
}

export default App

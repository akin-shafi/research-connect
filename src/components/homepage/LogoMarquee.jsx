export function LogoMarquee() {
  const logos = [
    { src: '/src/assets/images/logo1.png', alt: 'Logo 1' },
    { src: '/src/assets/images/logo2.png', alt: 'Logo 2' },
    { src: '/src/assets/images/logo3.png', alt: 'Logo 3' },
    { src: '/src/assets/images/logo4.png', alt: 'Logo 4' },
    { src: '/src/assets/images/logo5.png', alt: 'Logo 5' },
    { src: '/src/assets/images/logo6.png', alt: 'Logo 6' },
  ]

  return (
    <div className="w-full overflow-hidden bg-muted py-12">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10"></div>
        <div className="flex animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img src={logo.src} alt={logo.alt} className="w-[120px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export function LogoMarquee() {
  const logos = [
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 1' },
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 2' },
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 3' },
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 4' },
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 5' },
    { src: '/assets/images/research-connect-logo.png', alt: 'Company 6' },
  ]

  return (
    <div className="w-full overflow-hidden bg-muted py-12">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10"></div>
        <div className="flex animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img src={logo.src} alt={logo.alt} className="w-[180px] h-[80px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
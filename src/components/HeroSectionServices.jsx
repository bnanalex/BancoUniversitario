import Hero from '../assets/images/services/Services Hero Section.png';

const HeroSectionServices = () => {
  return (
    <section className="bg-gray-50 box-border pt-[60px] pb-[25px] px-0 
      md:pt-[40px]
      sm:pt-[30px]
      xs:pt-[20px]">
      
      <div className="flex flex-col items-center max-w-[1200px] mx-auto">
        <picture className="flex flex-col items-center w-full">
          <img
            src={Hero}
            alt="imagen"
            className="w-full h-auto max-w-full object-contain object-top"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Franja inferior */}
      <div className="h-2 w-full" style={{ backgroundColor: '#085F63' }}></div>
    </section>
  );
};

export default HeroSectionServices;

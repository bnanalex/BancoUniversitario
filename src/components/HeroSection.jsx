import Hero from '../assets/images/home/foto home proyecto lab II (1).png';
 
 const HeroSection = () => {
   return (
     <section className="bg-gray-50 box-border py-[25px] px-[0%] [@media(max-width:1200px)]:py-[20px] [@media(max-width:1200px)]:px-[0%] [@media(max-width:768px)]:py-[15px] [@media(max-width:768px)]:px-[0px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[0px]">
       <div className="flex flex-col items-center max-w-[1200px] mx-auto">
         <picture className="flex flex-col items-center w-full">
           <source srcSet={Hero} type="image/png" />
           <img
             src={Hero}
             alt="imagen"
             className="w-full h-auto max-w-[4616px] object-contain [@media(max-width:768px)]:max-w-full"
             loading="lazy"
             decoding="async"
           />
         </picture>
       </div>
     </section>
   );
 };
 
 export default HeroSection;
import { Typography } from '@material-tailwind/react';
import React from 'react';
import TranslatedText from '../../utils/Translation';
import SPHLogo from '../../assets/images/SPH Logo.webp';
import ProductCarousel from '../../components/Carousel/productsCarousel';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Animations Config
const Animations = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 0.5,
  },
  hiddenLeft: {
    opacity: 0,
    y: 0,
    x: -200,
    scale: 0.5,
  },
  hiddenRight: {
    opacity: 0,
    y: 0,
    x: 200,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Presentation = () => {
  const LightModeState = useSelector((state) => state.lightMode);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <React.Fragment>
      <div
        className={`Presentation flex flex-wrap  items-center justify-center `}
      >
        <div className=" flex flex-col flex-wrap  justify-center items-center">
          <div className="col-span-12">
            <div className="flex items-center justify-center h-full mt-4">
              <motion.hr 
               initial={"hiddenLeft"}
               variants={Animations}
               animate={inView ? 'visible' : 'hiddenLeft'}
               ref={ref} 
              className="border-red-600 rounded-lg w-[30%] h-[0.35rem] bg-red-600 m-4" />
              
              <motion.img 
                ref={ref}
                initial={"hidden"}
                variants={Animations}
                animate={inView ? 'visible' : 'hidden'}
                loading="lazy"
                src={SPHLogo}
                alt="image 3"
                className="block  object-fit: cover w-1/5 h-1/1 relative "
              />
              <motion.hr
               initial={"hiddenRight"}
               variants={Animations}
               animate={inView ? 'visible' : 'hiddenRight'}
               ref={ref}
               className="border-red-600 rounded-lg w-[30%] h-[0.35rem] bg-red-600 m-4" />
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex items-center justify-center h-full">
              <div className="block container mx-auto relative">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <div className="flex items-center justify-center">
                      <Typography
                        variant="h1"
                        
                        className={` text-center m-4 `}
                      >
                        <TranslatedText TranslationPath="Home.Services.Service_SubTitle" />
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="flex items-center justify-center h-full">
              <Typography variant="paragraph"  className={`m-4 `}>
                <TranslatedText TranslationPath="Home.Presentation" />{' '}
              </Typography>
            </div>
          </div>
        </div>

        <div className=" w-full col-span-12">
          <ProductCarousel />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Presentation;

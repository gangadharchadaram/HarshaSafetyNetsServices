import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (HD, full screen) */}
      <img
        src="https://www.jiomart.com/images/product/original/rv2sjkxs1t/raisco-nylon-green-anti-bird-net-for-balcony-5x10-feet-product-images-orv2sjkxs1t-p603248008-4-202307261725.jpg?im=Resize=(420,420)" // ✅ Place this in your public/ folder
        alt="Safety netting background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay behind text only */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#003B70]/50 to-transparent z-10" />

      {/* Text Content Overlay */}
      <div className="relative z-20 h-full w-full flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        <motion.div
          className="text-white space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            Harsha <br /> Professional Safety <br /> Netting Services
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl">
            Protecting your family and property with 
            <br />premium quality safety nets and expert<br />
            anti-bird control services
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-bg hover:bg-[#FBC02D] text-black font-semibold"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;

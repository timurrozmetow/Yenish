import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const links = [
    { name: 'Главная', path: '/' },
    { name: 'О Yenish', path: '/about' },
    { name: 'История', path: '/timeline' },
    { name: 'Армия', path: '/army' },
  ];

  return (
    <nav className="navbar">
      <div className="glitch-wrapper">
        <h1 className="glitch" data-text="YENISH">YENISH</h1>
      </div>
      
          <motion.div 
            key={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <h1>YENISH</h1>

          </motion.div>
        
      
    </nav>
  );
};
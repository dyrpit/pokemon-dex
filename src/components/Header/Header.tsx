import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import MenuToggle from '../MenuToggle/MenuToggle';

import { StyledHeader, StyledHeaderTitle } from './Header.styles';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const menuVariants = {
	open: {
		transition: { staggerChildren: 0.2, delayChildren: 0.4 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const navVariant = {
	open: {
		x: 0,
		y: 90,
		transition: { duration: 0.2 },
	},
	closed: {
		x: -200,
		y: 90,
		transition: {
			delay: 0.5,
		},
	},
};

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<StyledHeader>
			<MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
			<StyledHeaderTitle>Pokédex</StyledHeaderTitle>
			<motion.nav
				initial={false}
				variants={navVariant}
				animate={isOpen ? 'open' : 'closed'}
				style={{
					position: 'absolute',
					top: '0',
					left: 0,
					width: '200px',
					backgroundColor: 'white',
					height: 'calc(100vh - 90px)',
					transition: '0.3s',
					zIndex: 1,
				}}
			>
				<motion.ul variants={menuVariants}>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						jeden
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						dwa
					</motion.li>
					<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
						trzy
					</motion.li>
				</motion.ul>
			</motion.nav>
			<div
				style={{
					position: 'absolute',
					top: '90px',
					left: 0,
					backgroundColor: 'rgba(0,0,0,.3)',
					height: '100vh',
					width: '100vw',
					opacity: isOpen ? '1' : '0',
					transition: '0.3s',
				}}
			></div>
		</StyledHeader>
	);
};

export default Header;

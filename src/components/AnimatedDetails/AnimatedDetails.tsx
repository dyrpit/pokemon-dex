import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer/SectionConatiner';

interface IProps {
	isActive: boolean;
}

const AnimatedDetails: FC<IProps> = ({ children, isActive }) => {
	return (
		<>
			{isActive && (
				<motion.div
					initial={{ x: '50%' }}
					exit={{ x: '-100%' }}
					animate={{ x: '0%' }}
					// drag='x'
					// dragConstraints={{ left: 0, right: 0 }}
				>
					<SectionContainer>{children}</SectionContainer>
				</motion.div>
			)}
		</>
	);
};

export default AnimatedDetails;

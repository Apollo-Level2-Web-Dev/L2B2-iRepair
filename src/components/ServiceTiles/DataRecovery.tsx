import useScrollGrow from '@/hooks/ScrollGrowHook';
import { motion } from 'framer-motion';

const DataRecovery = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-7"
    ></motion.div>
  );
};

export default DataRecovery;

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import moment from 'moment';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes, useState } from 'react';

import { useEntries } from '@/entities/entry';
import { useHabits } from '@/entities/habit';
import { CreateHabitsForm } from '@/features/create-habits-form';
import { UpgradeHabitsForm } from '@/features/upgrade-habits-form';
import { mapCurrentWeekdays } from '@/shared/mappers';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const variants = {
  initial: { y: -10, opacity: 0, filter: 'blur(.5rem)' },
  animate: { y: 0, opacity: 1, filter: 'blur(0)' }
};

const Habits: FC<Props> = props => {
  const { habits } = useHabits();
  const { entries } = useEntries( { from: moment().startOf( 'week' ).format( 'YYYYMMDD' ), to: moment().endOf( 'week' ).format( 'YYYYMMDD' ) } );
  const [ scope, animate ] = useAnimate();
  const [ selectedIndex, setSelectedIndex ] = useState( Number( moment().format( 'd' ) ) );

  const handleFormFocus = () => {
    animate( 'form', { width: '100%' }, { duration: 0.6, ease: 'circInOut' } );
    animate( 'div.tablist', { width: '0%' }, { duration: 0.6, ease: 'circInOut' } );
  };

  const handleFormBlur = () => {
    animate( 'form', { width: '8rem' }, { duration: 0.6, ease: 'circInOut' } );
    animate( 'div.tablist', { width: '100%' }, { duration: 0.6, ease: 'circInOut' } );
  };

  const data = mapCurrentWeekdays( habits.data?.data || [], entries.data?.data || [] );

  return (
    <section {...props}>
      <h2 className="sm:ml-5 mb-6 sm:mb-8 text-3xl font-bold">{data[selectedIndex].humanDate}</h2>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div ref={scope} className="w-full mb-10 inline-flex gap-5">
          <CreateHabitsForm onFocus={handleFormFocus} onBlur={handleFormBlur} className="w-[8rem] shrink-0 relative" />
          <TabList className="tablist flex justify-end rounded-2xl bg-zinc-100 overflow-hidden">
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">S</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">M</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">T</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">W</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">T</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">F</Tab>
            <Tab className="w-[3.813rem] p-5 text-zinc-400/50 aspect-square cursor-pointer outline-0 focus:text-black hover:text-black data-[selected]:text-black">S</Tab>
          </TabList>
        </div>
        <AnimatePresence>
          <TabPanels className="sm:ml-5">
            <TabPanel key="0">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[0].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="1">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[1].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="2">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[2].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="3">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[3].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="4">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[4].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="5">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[5].data} />
              </motion.div>
            </TabPanel>
            <TabPanel key="6">
              <motion.div variants={variants} initial="initial" animate="animate">
                <UpgradeHabitsForm habits={data[6].data} />
              </motion.div>
            </TabPanel>
          </TabPanels>
        </AnimatePresence>
      </TabGroup>
    </section>
  );
};

export default Habits;
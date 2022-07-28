import { AnimatePresence, motion } from 'framer-motion';

import Layout from '../components/layout';

import '../styles/globals.scss';

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.4, type: 'easeInOut' }}
                    key={router.route}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;

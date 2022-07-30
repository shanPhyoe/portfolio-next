import Navbar from '../navbar';
import Head from 'next/head';
import Footer from '../Footer';
import ToggleTheme from '../ToggleTheme';
import MenuBox from '../MenuBox';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Portfolio | shanPhyoe</title>
            </Head>
            <Navbar />
            <MenuBox />
            <ToggleTheme />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

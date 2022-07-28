import Project from '../components/Project';

import styles from '../styles/Work.module.scss';

const Work = () => {
    return (
        <div className={styles.work}>
            <Project
                title="Hotel Alucia"
                imagePath="/images/hotel alucia work.png"
                description="A landing page for a luxury hotel in Bali. It showcases several sections of available services ilke restaurants and bars, rooms and suites and other minor facilities, pools, spa, etc."
                stack="HTML, CSS, Javascript"
                websiteLink="https://hotel-alucia.netlify.app"
                gitRepoLink="https://github.com/shanPhyoe/alucia-hotel"
            />
            <Project
                title={`Ryu\'s Greeneries Shop`}
                imagePath="/images/ryus greeneries work.png"
                description="Ryu’s greeneries is an e-commerce website where plenty of houseplants under different categories are sold. It features shopping cart, plants search, payment and user registration, etc. It is also backed by a server for secure payment process."
                stack="React, Redux, Firebase, Node.js, Stripe"
                websiteLink="https://ryus-greeneries.netlify.app"
                gitRepoLink="https://github.com/shanPhyoe/ryu-s-greeneries"
            />
            <Project
                title="Fx-Tetra"
                imagePath="/images/fx-tetra.png"
                description="At Fx-Tetra, one can easily search forex currency pair by currency base, quote or symbol. Also, it features in a way that you can quickly visualize your tailored data within 15 years with candlestick charts in few seconds."
                stack="Next, LightweightCharts.js, TraderMade API, TwelveData API"
                websiteLink="https://fx-tetra.vercel.app/"
                gitRepoLink="https://github.com/shanPhyoe/fxTetra"
            />
            <Project
                title="GOLDFLOW"
                imagePath="/images/goldflow.png"
                description="An expense tracker app that will records and calculate all the statistics for incomes, expenses and investments data by monthly, yearly and lifetime. A full stack app that user must create an account, which is quite simple and easy, to secure all user data."
                stack="React, Redux, Chart.js, Node.js, Express, JWT"
                websiteLink="https://goldflow.herokuapp.com"
                gitRepoLink="https://github.com/shanPhyoe/goldflow"
            />
        </div>
    );
};

export default Work;

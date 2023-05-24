import React from "react";
import ScrollTop from "../components/buttons/JumpToTopBtn";
import useIsVisible from "../components/hooks/useIsVisible";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import CounterSection from "../components/sections/Counter";
import Features from "../components/sections/Features";
import HeroSection from "../components/sections/HeroSection";
import Letstalk from "../components/sections/Letstalk";
import Services from "../components/sections/Services";
import ServiceSection from "../components/sections/ServiceSection";
import Testimonials from "../components/sections/Testimonials";
import ThirdSection from "../components/sections/ThirdSection";

function IndexPage() {
    const modal = useIsVisible();
    return (
        <Layout>
            <SEO title="Home" />
            <HeroSection modal={modal} />
            <Features />
            <About />
            <CounterSection />
            <Services />
            <Testimonials />
            <Contact />
            <ScrollTop />
        </Layout>
    );
}

export default IndexPage;

import { Box } from "@mui/material";
import SectionHeading from "./components/headings/section-heading";
import HeroSection from "./components/hero-section";
import ProductsSection from "./components/products-section";
import Service from "./components/best-services.tsx";
import Blogs from "./components/blog";
import Testimonial from "./components/testimonial";
import HomeBanner from "./components/banners/home-banner";
import PageLayout from "./components/page-layout";

export default function Home() {
  return (
    <>
      <PageLayout>
        <section className="tw-mb-10">
          <HeroSection />
        </section>
        <section className="tw-my-16">
          <Box
            component="div"
            className="tw-flex tw-justify-center tw-flex-col"
          >
            <SectionHeading
              tag="Featured Products"
              title="BESTSELLER PRODUCTS"
              description="Problems trying to resolved the confilict between"
            />
            <ProductsSection moreButton={true} />
          </Box>
        </section>
        <section className="tw-my-24">
          <Service />
        </section>
        <section className="tw-my-16">
          <Blogs />
        </section>
        <section className="tw-my-16">
          <Testimonial />
        </section>
      </PageLayout>
      <section>
        <HomeBanner />
      </section>
    </>
  );
}

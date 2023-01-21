import Header from "../components/header/Header";
import Vehicles from "../components/products/vehicles/Vehicles";
import Industrial from "../components/products/industrial/Industiral";
import Footer from "../components/footer/Footer";
import WhatWeImport from "../components/whatweimport/WhatWeImport";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import HeroSectionOther from "../components/hero-section/HeroSectionOther";
import PageLoader from "../components/page-loader/PageLoader";
import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../components/section-layout/SectionLayout";
import { Row } from "../components/whatweimport/CardLayout";
import List, { Item } from "../components/whatweimport/List";
import { Item as Bordered } from "../components/mui/tabs/tab-panel/List";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import YoungLivingVideo from "../components/young-living/YoungLivingVideo";

export default function YoungLiving() {
  return (
    <div className="text-light-sky">
      <PageLoader></PageLoader>
      <Header></Header>
      <div className="py-8"></div>
      <SLayout>
        <SHeader>
          <STitle>Experience Young Livings Essential Oil</STitle>
          <SDes>Here in practice or at your home!</SDes>
        </SHeader>
        <SMain>
          <img
            src="/images/young-living/everyday-oils.png"
            alt="product"
            className="w-full"
          />
        </SMain>
        <YoungLivingVideo></YoungLivingVideo>
      </SLayout>
      <Evenings></Evenings>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}

export function Evenings() {
  return (
    <div className="bg-white">
      <SLayout>
        <SHeader>
          <STitle>Information evenings Young Living</STitle>
          <SDes>
            In this information evening you will learn, among other things, why
            Young Living is so unique
          </SDes>
        </SHeader>
        <SMain>
          <div>
            <div className="py-4 px-3">
              <STitle className="mb-4 text-lg lg:text-xl">
                What can Young Living oil do for you?
              </STitle>
              <List>
                <Bordered>
                  You will experience in this evening how influential this fine
                  mist of Truly Healing plant extracts is. Via the respiratory
                  tract, the skin and even in food or drink. The applications
                  are very diverse.
                </Bordered>
                <Bordered>
                  From the seed to the seal on the bottle. All processes are
                  supervised by Young Living. No other company in the world can
                  guarantee this. Young Living created the new standard for
                  quality. And You Notice!
                </Bordered>
              </List>
            </div>
            <div className="py-4 px-3">
              <STitle className="mb-4 text-lg lg:text-xl">
                At the end of this information evening you will know:
              </STitle>
              <List>
                <Item>Which oils are suitable for internal use.</Item>
                <Item>What not to do with essential oil.</Item>
                <Item>Uses for essential oil in your daily life.</Item>
                <Item>
                  How to help family members and loved ones with ailments.
                </Item>
                <Item>Where and How to best use the oil.</Item>
                <Item>Ionizing, enriching and purifying the indoor air.</Item>
                <Item>
                  Possibilities for detoxification, stabilization of hormone
                  fluctuations.
                </Item>
                <Item>
                  Stimulation or relaxation of your digestive system, better
                  sleep.
                </Item>
                <Item>Relaxation of muscles and mental peace or focus.</Item>
              </List>
            </div>
            <div className="py-4 px-3">
              <List>
                <Bordered>
                  Every Saturday evening from 7:00 PM to 10:00 PM, an extensive
                  information evening about Young Living. The door is open from
                  6:30 pm.
                </Bordered>
                <Bordered>
                  While enjoying a cup of tea and oil atomizers you will become
                  acquainted with many different oils and how they work.
                  Something different, and for many a profound experience with
                  the power of pure nature.
                </Bordered>
                <Bordered>
                  Because I like to keep it clear and informal, there is a
                  maximum of 6 participants and a minimum of 2. You can register
                  by providing your details and the desired date via the contact
                  form.
                </Bordered>
                <Bordered>
                  Location is Mahlerstraat 72, 3131SH Vlaardingen. Entrance is €
                  10, please pay appropriately on arrival. You can park for free
                  in front of the door.
                </Bordered>
                <Bordered>
                  When you arrive there are 2 green carport doors with metal
                  plating to the left of the porch entrance. Feel free and come
                  in. The information evening takes place in the practice in the
                  back of the garden.
                </Bordered>
              </List>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}

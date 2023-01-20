import Header from "../components/header/Header";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../components/section-layout/SectionLayout";
import Footer from "../components/footer/Footer";
import Appointment from "../components/mui/apppointment/Appointment";

export default function BookOnline() {
  return (
    <div>
      <Header></Header>
      <div className="pt-16">
        <SLayout>
          <div className="bg-white py-8">
            <SHeader>
              <STitle>appointments</STitle>
            </SHeader>
            <SMain>
              <Appointment></Appointment>
            </SMain>
          </div>
        </SLayout>
      </div>
      <Footer></Footer>
    </div>
  );
}

import ProductViewer, {
  Desc,
  Image,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function PVChair() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Stoel Massage</Title>
        <Desc>
          Stoelmassage - ook wel zitmassage genoemd - is een vorm van massage
          dat vindt plaats op een traditionele massagestoel, ontworpen om de
          ontlast de wervelkolom en geeft gemakkelijk toegang tot het hoofd, de
          nek, de rug, schouders en armen. De massage wordt meestal over de
          kleding gedaan en vereist geen oliën of crèmes.
        </Desc>
      </TitleDescBox>
      <Image src="/images/massages/card/chair.png" />
    </ProductViewer>
  );
}

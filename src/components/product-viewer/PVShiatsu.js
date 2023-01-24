import ProductViewer, {
  Desc,
  Image,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function MassageChair() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Shiatsu Massage</Title>
        <Desc>
          Shiatsu is an ancient form of massage based on Chinese acupuncture
          theory that often includes the use of breathing and stretching.
          Shiatsu can be done through the clothes or on bare skin and uses
          static pressure, which can vary from light holding to deep physical
          pressure applied with the palm of the hand or thumb.
        </Desc>
      </TitleDescBox>
      <Image src="/images/massages/card/shiatsu.png" />
    </ProductViewer>
  );
}

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
        <Title>Chair Massage</Title>
        <Desc>
          Chair massage - also known as seated massage - is a type of massage
          that takes place on an traditional massage chair, designed to take the
          weight off the spine and give easy access to the head, neck, back,
          shoulders and arms. The massage is most commonly done over the clothes
          and does not require oils or creams.
        </Desc>
      </TitleDescBox>
      <Image src="/images/massages/card/chair.png" />
    </ProductViewer>
  );
}

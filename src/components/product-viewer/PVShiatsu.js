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
          Shiatsu is een oude vorm van massage gebaseerd op de Chinese
          acupunctuurtheorie die vaak het gebruik van ademhaling en stretching
          omvat. Shiatsu kan door de kleding heen of op de blote huid worden
          gedaan en maakt gebruik van statische druk, die kan variëren van licht
          vasthouden tot diepe fysieke druk uitgeoefend met de handpalm of duim.
        </Desc>
      </TitleDescBox>
      <Image src="/images/massages/card/shiatsu.jpg" />
    </ProductViewer>
  );
}

import ProductViewer, {
  Desc,
  Image,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function PVSports() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Sports Massage</Title>
        <Desc>
          Sports massage is proven to release and reduce tension in muscles,
          improve circulation and encourage the removal of waste products such
          as lactic acid during high intensity activity and can help to relax
          the body. All of this helps promote recovery and reduces the chance of
          muscle injury.
        </Desc>
      </TitleDescBox>
      <Image src="/images/massages/card/sport.jpg" />
    </ProductViewer>
  );
}

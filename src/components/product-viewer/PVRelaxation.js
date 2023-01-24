import ProductViewer, {
  Desc,
  Image,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function PVRelaxation() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Relaxation Massage</Title>
        <Desc>
          Relaxation massage consists of gentle to medium pressure to the body,
          manipulating soft tissues to promote relaxation. The relaxation
          response is the state of the heart and breathing rates going down.
          When the body begins to relax stress hormones decrease and muscles
          relax.
        </Desc>
      </TitleDescBox>
      <Image></Image>
    </ProductViewer>
  );
}

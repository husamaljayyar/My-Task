import { Cards, ImageCard, InnerCard, TitleCard, Paragraph } from "./Styles";
import Image from "../../Assets/Image.jpg";

const Card = (props) => {
  return (
    <Cards>
      <ImageCard src={Image} alt="img" />
      <InnerCard>
        <TitleCard>Image Title</TitleCard>
        <Paragraph>
          The object is the main focus. The action describes what’s happening,
          usually what the object is doing. The context describes the
          surrounding environment.
        </Paragraph>
      </InnerCard>
    </Cards>
  );
};
export default Card;

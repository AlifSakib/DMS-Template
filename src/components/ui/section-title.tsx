import { FC } from 'react';
import { Title } from 'rizzui';

type TitleTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleWeights = "bold" | "normal" | "medium" | "semibold" | "extraBold";

interface SectionTitleProps {
  title: string;
  tag?: TitleTags;
  weight?: TitleWeights;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, tag = "h2", weight = "bold" }) => {
  return (
    <div className="my-4">
      <Title as={tag} fontWeight={weight} className="text-start">
        {title}
      </Title>
      <hr className="border-t-2 border-gray-300 my-2" />
    </div>
  );
};

export default SectionTitle;

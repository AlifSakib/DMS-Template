import { FC, ReactNode } from 'react';
import { Title } from 'rizzui';

type TitleTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleWeights = "bold" | "normal" | "medium" | "semibold" | "extraBold";

interface CardProps {
  title?: string;
  tag?: TitleTags;
  weight?: TitleWeights;
  children: ReactNode;
  className?: string;

}

const Container: FC<CardProps> = ({ title, tag = "h3", weight = "semibold", children, className }) => {
  return (
    <div className={`bg-white rounded border p-6 w-[1000px]  ${className}`}>
      {title && (
        <div className="mb-4">
          <Title as={tag} fontWeight={weight} className="text-gray-800">
            {title}
          </Title>
          <hr className="border-t-2 border-gray-300 my-2" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Container;

import {
    DescriptionImageContainer,
    DescriptionTextContainer,
    DescriptionImage,
    DescriptionContainer,
} from "./Description.styled";

const Description: React.FC<{
    title: string;
    content: string;
    hasImage: boolean;
    imagePath: string;
}> = ({ title, content, hasImage, imagePath }) => {
    return (
        <DescriptionContainer>
            <DescriptionTextContainer>
                <h2>{title}</h2>
                <p>{content}</p>
            </DescriptionTextContainer>
            <DescriptionImageContainer>
                {hasImage && (
                    <DescriptionImage
                        className="description--img"
                        src={imagePath}
                        alt={title + "-image"}
                    />
                )}
            </DescriptionImageContainer>
        </DescriptionContainer>
    );
};

export default Description;

import "./Description.css";

const Description: React.FC<{
    title: string;
    content: string;
    hasImage: boolean;
    imagePath: string;
}> = ({ title, content, hasImage, imagePath }) => {
    return (
        <div className="description--container">
            <div className="description--text-container mt-4">
                <h2>{title}</h2>
                <p>{content} </p>
            </div>
            <div className="description--image-container mt-4">
                {hasImage && (
                    <img
                        className="description--img"
                        src={imagePath}
                        alt={title + "-image"}
                    ></img>
                )}
            </div>
        </div>
    );
};

export default Description;

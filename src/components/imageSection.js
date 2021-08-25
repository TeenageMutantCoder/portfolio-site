import React from "react";
import "./imageSection.scss";

const ImageSection = (props) => {
    const { data } = props;
    return (
        <section className="ImageSection">
            {data.title && <h2>{data.title}</h2>}
            <div className="images">
                {data.images &&
                    data.images.map((image, index) => (
                        <div className="image" key={index}>
                            {image.title && <h3>{image.title}</h3>}
                            {image.image}
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default ImageSection;

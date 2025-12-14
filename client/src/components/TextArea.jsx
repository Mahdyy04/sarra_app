/* eslint-disable react/prop-types */
import "../assets/styles/textArea.css"

export default function TextArea({ title, text, image, imageInRight }) {
  return (
    <div className="text-card">
      {imageInRight ? (
        <>
          <div className="text">
            {title ? <h1 className="title">{title}</h1> : ""}
            <br />
            <p>{text}</p>
          </div>
          {image && (
            <div className="img-container">
              <img src={image} alt="armoire de puissance" />
            </div>
          )}
        </>
      ) : (
        <>
          {image && (
            <div className="img-container">
              <img src={image} alt="armoire de puissance" />
            </div>
          )}
          <div className="text">
            {title ? <h1 className="title">{title}</h1> : ""}
            <br />
            <p>{text}</p>
          </div>
        </>
      )}
    </div>
  );
}

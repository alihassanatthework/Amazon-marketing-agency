import Image from "next/image";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card group">
      <div className="service-card-top">
        <h3 className="service-card-title">
          {title}
        </h3>

        <p className="service-card-text">
          {description}
        </p>
      </div>

      {image && (
        <div className="service-card-image-wrap">
          <div className="service-card-image-bg" />
          <div className="service-card-image-box">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
}
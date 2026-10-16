import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function AboutVisual({ photo, photoAlt }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  useEffect(() => setPhotoFailed(false), [photo]);

  return (
    <figure className="about-visual">
      <div className="about-visual__frame">
        {photo && !photoFailed ? (
          <img
            className="about-visual__photo"
            src={photo}
            alt={photoAlt}
            width={640}
            height={720}
            loading="lazy"
            decoding="async"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="about-visual__art" aria-hidden="true">
            <span className="about-visual__ring" />
            <span className="about-visual__circle" />
            <span className="about-visual__initials">LEH<span>.</span></span>
            <span className="about-visual__line" />
          </div>
        )}
      </div>
      <figcaption className="about-visual__caption">
        <strong>{profile.name}</strong>
        <span><MapPin size={15} aria-hidden="true" />{profile.location} · Yvelines</span>
      </figcaption>
    </figure>
  );
}

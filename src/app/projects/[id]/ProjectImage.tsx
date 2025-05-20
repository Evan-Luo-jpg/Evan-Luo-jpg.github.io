'use client';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = '' }: ProjectImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.src = '/images/project-placeholder.jpg';
      }}
    />
  );
} 
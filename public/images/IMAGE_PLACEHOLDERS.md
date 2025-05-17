# Image Placeholders

The image files in this directory are placeholders. In a production environment, you should replace these with actual images for your school or institution.

## Recommended Image Specifications

- **hero-students.jpg**: 1920x1080px, high-quality image of students in a learning environment
- **school-building.jpg**: 1200x1200px, high-quality image of your school building or campus
- **testimonials/*.jpg**: 300x300px, square profile photos

## Image Sources

For a production site, you should use:
- Your own professional photography
- Licensed stock images
- Images where you have appropriate usage rights

## Image Optimization

Next.js includes built-in image optimization via the Image component, which:
- Automatically serves images in modern formats (WebP, AVIF)
- Automatically resizes images for different device sizes
- Lazy loads images by default
- Prevents layout shift with proper sizing

Always use the Next.js Image component (`import Image from 'next/image'`) when displaying images for best performance. 
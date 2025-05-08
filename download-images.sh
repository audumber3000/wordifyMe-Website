#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920&q=80"
curl -o public/images/mobile-learning.jpg "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
curl -o public/images/web-platform.jpg "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
curl -o public/images/gamified-learning.jpg "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&q=80"
curl -o public/images/assessment.jpg "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
curl -o public/images/features-illustration.jpg "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
curl -o public/images/cta-bg.jpg "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80" 
#!/bin/bash

# Create portfolio directory
mkdir -p public/images/portfolio

# Download portfolio images
curl -o public/images/portfolio/educonnect.jpg "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
curl -o public/images/portfolio/mathwiz.jpg "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
curl -o public/images/portfolio/sciencelab.jpg "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
curl -o public/images/portfolio/languagepro.jpg "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80"
curl -o public/images/portfolio/studybuddy.jpg "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
curl -o public/images/portfolio/quizmaster.jpg "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"

# Download placeholder image
curl -o public/images/placeholder.jpg "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" 
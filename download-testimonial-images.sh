#!/bin/bash

# Create testimonials directory if it doesn't exist
mkdir -p public/images/testimonials

# Download testimonial profile images
curl -o public/images/testimonials/dps.jpg "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80"
curl -o public/images/testimonials/lsr.jpg "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80"
curl -o public/images/testimonials/xaviers.jpg "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
curl -o public/images/testimonials/amity.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"

# Download institution logos
curl -o public/images/testimonials/dps-logo.png "https://dpsrkp.net/images/dps-logo.png"
curl -o public/images/testimonials/lsr-logo.png "https://lsr.edu.in/wp-content/uploads/2020/01/LSR-Logo.png"
curl -o public/images/testimonials/xaviers-logo.png "https://www.xaviers.edu/main/images/logo.png"
curl -o public/images/testimonials/amity-logo.png "https://www.amity.edu/images/logo.png" 
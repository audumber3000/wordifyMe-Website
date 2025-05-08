#!/bin/bash

# Create about directory if it doesn't exist
mkdir -p public/images/about

# Download team image
curl -o public/images/about/team.jpg "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"

# Download founder image
curl -o public/images/about/founder.jpg "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
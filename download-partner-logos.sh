#!/bin/bash

# Create partners directory
mkdir -p public/images/partners

# Download partner logos
curl -o public/images/partners/microsoft.png "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.png"
curl -o public/images/partners/mongodb.png "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
curl -o public/images/partners/railway.png "https://railway.app/brand/logo-dark.png"
curl -o public/images/partners/startup-india.png "https://www.startupindia.gov.in/content/dam/invest-india/Templates/public/startupindia-logo.png"
curl -o public/images/partners/fast2sms.png "https://www.fast2sms.com/dev/img/fast2sms-logo.png" 
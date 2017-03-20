#!/bin/sh

# Step 1: Sync S3 bucket with build

S3_BUCKET=$1

if [ "$S3_BUCKET" = "" ]; then
    echo "Enter bucket name to deploy to:"
    echo "(You can provide it as the first argument too, in future)"

    read S3_BUCKET
fi

aws s3 sync ../build s3://$S3_BUCKET --delete

# Step 2: Invalidate required files on CloudFront.
# Only those files that are not versioned with each build need to be
# invalidated.

CLOUDFRONT_DIST_ID=$2

if [ "$CLOUDFRONT_DIST_ID" = "" ]; then
    echo "Optionally enter CloudFront distribution id to invalidate:"
    echo "(You can provide it as the second argument too, in future."
    echo " Press Enter without typing anything to skip this step)"

    read CLOUDFRONT_DIST_ID
fi

if [ "$CLOUDFRONT_DIST_ID" != "" ]; then
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DIST_ID \
        --paths /asset-manifest.json /favicon.ico /index.html /manifest.json \
        /service-worker.js /error.html
fi

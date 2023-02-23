#!/bin/sh

gsutil cp -r ./metadata/cnd-asset gs://clonecraft-asset/nft-metadata
gsutil -m setmeta -r -h "Content-Type:application/json" gs://clonecraft-asset/nft-metadata/cnd-asset
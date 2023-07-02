#!/bin/bash
docker buildx build \
  --build-context common-api=../../common/api \
  --build-context pdf-service=../pdf-service \
  --build-context tpl-service=../tpl-service \
  --build-context auth-service=../auth-service \
  --build-context web-designer=../../web/designer \
  --build-context web-print=../../web/print \
  -t leya:local \
  .
#!/bin/bash
if [ ! $LB_WORKSPACE_ROOT ]; then
    source $(dirname $0)/env.sh
fi

cd $LB_WORKSPACE_ROOT/web/print
npm ci
npm run prebuild
npm run build

#!/bin/bash
if [ -a secrets.json ]
then
  grunt setupGruntconfig
  grunt setup
else
  cp secrets-template.json secrets.json
  read -p 'Paste your ACF Pro Key here: ' answer
  if [[ -z "$answer" ]];
  then
    echo 'As you do not have an ACF Pro Key we will change the dependency to use the basic ACF version found in the WordPress plugin registry.'
    sed -i '.bak' 's,"advanced-custom-fields/advanced-custom-fields-pro":,"wpackagist-plugin/advanced-custom-fields":,g' composer.json
    rm composer.json.bak
  else
    echo 'Writing the ACF Key to your secrets.json. Please do not put this key in a public repo.'
    sed -i ".bak" "s/@@acfProKey/${answer}/g" secrets.json
    rm secrets.json.bak
  fi
  grunt setupGruntconfig
  grunt setup
fi

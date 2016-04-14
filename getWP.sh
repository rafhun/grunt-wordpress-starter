#!/bin/bash
if wp core download --locale=de_CH ; then
  echo "Installed through WP CLI"
else
  if [[ $(type -t wget) ]]; then wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz

  elif [[ $(type -t curl) ]]; then curl -O https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz

  else
    error "Could not find wget or curl, please install one of them"
    return 1
  fi

  if [ -d $1 ]
  then
    cp -R wordpress/. $1
    rm -r wordpress
  else
    mv wordpress $1
  fi

  rm latest.tar.gz
fi

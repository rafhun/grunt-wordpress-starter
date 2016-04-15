#!/bin/bash
if wp core download --version=$2 --locale=$3 ; then
  echo "Installed version $2 through WP CLI with language $3"
elif wp core download --version=$2 ; then
  echo "Installed version $2 through WP CLI."
elif wp core download ; then
  echo "Installed latest version through WP CLI. Please update your Gruntconfig with the necessary values (version and language code)."
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

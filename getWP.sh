#!/bin/bash
wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz

if [ -d wwwroot ]
then
  cp -R wordpress/. wwwroot/
  rm -r wordpress
else
  mv wordpress wwwroot
fi

rm latest.tar.gz

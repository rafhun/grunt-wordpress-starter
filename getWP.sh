#!/bin/bash
wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz

if [ -d $1 ]
then
  cp -R wordpress/. $1
  rm -r wordpress
else
  mv wordpress $1
fi

rm latest.tar.gz

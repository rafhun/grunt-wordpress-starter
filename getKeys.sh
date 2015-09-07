#!/bin/bash
if [ ! -f $1 ]; then
  touch $1
fi

curl https://api.wordpress.org/secret-key/1.1/salt/ > $1

#!/bin/bash
if [[ $(type -t wget) ]]; then wget -O $1 "https://api.wordpress.org/secret-key/1.1/salt/"

elif [[ $(type -t curl) ]]; then curl -o $1 https://api.wordpress.org/secret-key/1.1/salt/
else
  error "Could not find wget or curl, please install one of them"
  return 1
fi

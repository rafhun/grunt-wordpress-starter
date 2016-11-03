#!/bin/bash
if grep -q "'$1'" "$2"; then
  echo "Versions match"
else
  echo "Versions do not match. You should be using version $1, currently the following is installed:\n"
  grep wp_version "$2"
  echo "Trying to update automatically (works with WP CLI)..."
  if docker exec -i $4_php_1 wp core update --version=$1 --locale=$3 --force --allow-root ; then
    echo "Updated to $1"
    exit 0
  elif docker exec -i $4_php_1 wp core update --version=$1 --force --allow-root ; then
    echo "Updated to $1"
    exit 0
  elif docker exec -i $4_php_1 wp core update --version=$1 --locale=en_US --force --allow-root ; then
    echo "Updated to $1"
    exit 0
  fi
  exit 1
fi

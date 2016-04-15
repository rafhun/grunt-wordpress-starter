#!/bin/bash
if grep -q "'$1'" "$2"; then
  echo "Versions match"
else
  echo "Versions do not match. You should be using version $1, currently the following is installed:\n"
  grep wp_version "$2"
  echo "Trying to update automatically (works with WP CLI)..."
  if wp core update --version=$1 --locale=$3 --force ; then
    echo "Updated to $1"
    exit 0
  elif wp core update --version=$1 --force ; then
    echo "Updated to $1"
    exit 0
  fi
  exit 1
fi

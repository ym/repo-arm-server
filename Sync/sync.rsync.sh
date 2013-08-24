#!/bin/bash
REPOS=(testing core extra community-testing community multilib-testing multilib)
ARCHS=(i686 x86_64)
DESTARCHS=(i686 x86_64 any)
UPSTREAM=rsync://mirror.us.leaseweb.net/archlinux
PKGDEST=/var/www/repo-arm
DBBACKUP=/var/www/repo-arm-db

for _r in ${REPOS[@]}; do
  for _a in ${DESTARCHS[@]}; do
    mkdir -p "$PKGDEST"/$_r/os/$_a
  done
done

DATEROOT="$DBBACKUP"/$(date +%Y/%m/%d)

rsync -avhkPSH "$UPSTREAM"/pool "$PKGDEST"/

for _r in ${REPOS[@]}; do
  rsync -avhkPSH "$UPSTREAM"/$_r "$PKGDEST"/

  for _a in ${ARCHS[@]}; do
    if [[ -n "$DBBACKUP" ]]; then
      mkdir -p "$DATEROOT"/$_r/os/$_a
      cp "$PKGDEST"/$_r/os/$_a/${_r}.{db*,files*} "$DATEROOT"/$_r/os/$_a/
    fi
  done
done



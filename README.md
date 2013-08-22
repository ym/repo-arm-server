## A.R.M - Arch Rollback Machine
Arch Linux Chinese Community A.R.M server app & configurations.

### Configuration

#### Rsync

config file:

Synchronize packages and make daily copies of package database file.
Packages are synchronized under `/var/www/repo-arm`

#### archrepo2

config file: archrepo2-0.3/archrepo.ini

Will read packages in [testing], [core], [extra-testing], [extra], [multilib-testing], [multilib], [community-testing] and [community].
pkginfo file is stored under `/var/www/repo-arm`

#### repo-arm-server

config file: config.js

HTTP API Search pattern:

`/search?arch=$pkgarch&pkgname=$pkgname`

Will return result:

`pkgrepo|pkgname|pkgarch|pkgver|downloadurl`

#### Nginx

A.R.M server url: repo-arm.archlinuxcn.org
Reverse proxy to 127.0.0.1:3000 (repo-arm-server)

A.R.M download url: repo-arm-download.archlinuxcn.org
web root: /var/www/repo-arm/

**TODO** Implement daily-repo functionality.




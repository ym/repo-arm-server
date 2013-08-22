## A.R.M - Arch Rollback Machine
Arch Linux Chinese Community A.R.M server app & configurations.

### Configuration

Server requirements:

* Linux OS
* Bash & Rsync
* Python 3.3, Tornado, [winterpy](https://github.com/lilydjwg/winterpy)
* Node.js 0.10.13+ with NPM

#### Rsync

config file: Sync/.

Synchronize packages and make daily copies of package database file.
Packages are synchronized under `/var/www/repo-arm`

#### archrepo2

config file: archrepo2-0.3/archrepo.ini

Will read packages in [testing], [core], [extra-testing], [extra], [multilib-testing], [multilib], [community-testing] and [community].

pkginfo file path: `/var/www/repo-arm/pkginfo.db`

#### repo-arm-server

config file: repo-arm-server/config.js

HTTP API Search pattern:

`/search?arch=$pkgarch&pkgname=$pkgname`

Will return result:

`pkgrepo|pkgname|pkgarch|pkgver|downloadurl`

#### Nginx

config file: NGINX/*.conf

A.R.M server url: `repo-arm.archlinuxcn.org` reverse proxy to 127.0.0.1:3000 (repo-arm-server)

A.R.M download url: `repo-arm-download.archlinuxcn.org`, webroot: /var/www/repo-arm/

**TODO** Implement daily-repo functionality.




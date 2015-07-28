module.exports = {
    pkginfopath: process.env.PKGINFO_PATH  || '/spool/data/archlinuxcn/arm/data/repo-arm', // pkginfo.db file path, without the last slash "/".
    downloadurl: process.env.DOWNLOAD_URL  || 'http://repo-arm-download.archlinuxcn.org/',  // package download url, for returning package download links.
    
    // archive db path
    archivepath: process.env.ARCHIVE_PATH  || '/spool/data/archlinuxcn/arm/data/repo-arm-db',
    // packages path
    pkgpath:     process.env.PACKAGES_PATH || '/spool/data/archlinuxcn/arm/data/repo-arm/',

    // server config
    // bind ip address
    bindAddress: process.env.REPO_ARM_SERVER_BIND_ADDRESS || '127.0.0.1',
    // bind port
    bindPort:    process.env.REPO_ARM_SERVER_BIND_PORT    || '3000'
}

module.exports = {
    pkginfopath: "/spool/data/archlinuxcn/arm/data/repo-arm", // pkginfo.db file path, without the last slash "/".
    downloadurl: "http://repo-arm-download.archlinuxcn.org/",  // package download url, for returning package download links.
    
    // archive db path
    archivepath: '/spool/data/archlinuxcn/arm/data/repo-arm-db',
    // packages path
    pkgpath: '/spool/data/archlinuxcn/arm/data/repo-arm/',

    // server config
    // bind ip address
    bindAddress: '127.0.0.1',
    // bind port
    bindPort: '3000'
}

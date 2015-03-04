- Samba : Interoperability tool.  https://www.samba.org/

####Active Directory combines 3 services
- LDAP : Directory Service
- Kerberos : Authentication
- DNS : Name resolution

- S MB :- "SAMBA" based on reverse engineering the SMB Protocol.

- nmbd : NetBIOS name resolution and network browsing
- smbd : File sharing, printer sharing and authentication using SMB
- winbindd : used purely on the linux side to bridge AD to Linux
- LDAP, Kerberos and DNS services provided by Daemon used in SMP4 to assume AD services role

smbclient : ftp tool
smbpasswd : manages local store of user accts
testparm : checks syntax of SMB config file
webinfo : diagnostic tool
smbmount : mounts smb file system
smbstatus : diagnostic
net : resembles windows net.

/etc/samba/smb.conf (main config file)

SWAT : Samba web admin tool

 - Ensure all packages are up to date:  yum update -y

 ###Remote access

 - Telnet and RSH are not secure
 - After challenge response a session key is used because Asymettric encryption is much slower than symeetric encryption.
 - system-config-firewall (firewall UI checking tool)
- Passwordless login:  Append your RSA key to the keyfile:  cat id_rsa.pub >> .ssh/authorized_keys
  - If errors out with "Authorization refused: bad ownership or modes for file" then chmod 600 the ~name/.ssh/authorized_keys file
  - RDP Options:  X11, VNC, LogMeIn, TeamViewer ...
   - In XServer the server is local and its the clients that potentially are remote.
     - Xserver for windows:  MobaXTerm, XMinG, Cygwin has one too.
 ###Questions
 - What are run levels?
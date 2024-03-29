# Linux príkazy

## Basic commands

pwd - print working directory  
man - show manual pages  
who - display who is logged in  
date - display current date  
cal - show calendar  
clear - clear screen  
file - determine file type  
cd - change directory  
mkdir - make directory  
find - search files  
grep - print files matching patterns  
ls - list files  
mv - move file  
rm - delete file  
ps - list processes  
kill - kill a process  
touch - create file  
cat - display contents of file  
df - available disk space  
du - disk usage  
free - memory usage  
uname - system information  
tar - work with tarballs  
zip - work with ZIP files  
ping - check connection  
top - show used system resources  
ssh - remotely log to other linux machine  
tail - display last n of lines  
head - display first n of lines  
wc - count words, bytes  

## OS & basic system info

```
# uname -a
# lsb_release -a
# cat /etc/debian_version

# cat /proc/cpuinfo
# cat /proc/meminfo
```

## Secure copy

```
scp cool_stuff.txt user17@example.com:/this/path/right/here
scp user17@example.com:cool_stuff.txt /this/path/right/here
```

List open ports  


`$ sudo netstat -tunlp`

list services

`# service --status-all`

# Create new user

Add and delete user

$ sudo adduser user3
$ sudo userdel user3

Sudoer

# usermod -aG sudo username

`ssh -6 root@2001:19f0:5001:1b75:5400:01ff:fe9a:5724`

ifconfig - find out IP address 

# Install LEMP stack

```
$ sudo apt update
apt-get update && apt-get upgrade
$ sudo apt install nginx
$ sudo apt install php-fpm php-mysql
$ sudo nano /etc/nginx/sites-available/example.com
$ sudo nano /var/www/html/info.php
```


## Find command

finds all html files with link /gui/tkinter (-h option supresses filename prefix)  

`find . -name "*.html" -type f -print0 | xargs -0  grep -h "href=\"/gui/tkinter"`

replaces on output /gui/tkinter with /tkinter; shows only replaced lines on outout  

`find . -name "*.html" -type f -print0 | xargs -0 sed -n 's/href=\"\/gui\/tkinter/href=\"\/tkinter/p'`

real in-place replacing  

`find . -name "*.html" -type f -print0 | xargs -0 sed -i 's/href=\"\/gui\/tkinter/href=\"\/tkinter/'`

## Links

https://www.debian.org/doc/manuals/refcard/refcard
http://cb.vu/unixtoolbox.xhtml
https://files.fosswire.com/2007/08/fwunixref.pdf





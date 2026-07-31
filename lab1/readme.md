#EventLoop
JS is synchronous and single threaded bydefault
## there can be async behaviour
- with browser API -
setTimeout, setInterval,setImmediate,nextTick
- with promises
- with event handles
function not executed immediately but it must be executed after a while 
it has some status during the execution
at final it may resolve 
call back function => that passes as argument or the parameter to another function
modern javascript is divided  into two catogaries :
1. commonJS (.cjs) -> support oops-> require
-priority (nextTick,Promise,setImmediate/setTimeout)
2. moduleJS (.mjs) -> follow modular approach -> import
-priority (Promise,nextTick,setImmediate/setTimeout)
directly communicate with operating system rather then browser the common operation on a file or folders are :
1. file ->wright file,read file,append file
2. folder -> Mkdir/md
rmdir/rm
readdir
3. file metadat
-> stat
-> lstat
-> rstat
4. watch -> watch,unwatch
5. stream -> readstream(),writestream()
all function are promise so it must be call with await keywords
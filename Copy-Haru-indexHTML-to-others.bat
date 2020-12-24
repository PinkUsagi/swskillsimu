@echo off
cd /d %~dp0

copy /y "docs\Haru\index.html" "docs\Erwin\index.html"
copy /y "docs\Haru\index.html" "docs\Lily\index.html"
copy /y "docs\Haru\index.html" "docs\Stella\index.html"
copy /y "docs\Haru\index.html" "docs\Jin\index.html"
copy /y "docs\Haru\index.html" "docs\Iris\index.html"
copy /y "docs\Haru\index.html" "docs\Chii\index.html"
copy /y "docs\Haru\index.html" "docs\Ephnel\index.html"
copy /y "docs\Haru\index.html" "docs\Nabi\index.html"

echo. "Finished"
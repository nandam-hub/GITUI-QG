@echo off
set TIMESTAMP=%DATE%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%
echo "GT Required Software versions. This info is collected on : " %TIMESTAMP% > GTRequiredSoftwareVersions.log 2>&1
echo "Operating System:"  >> GTRequiredSoftwareVersions.log 2>&1 && systeminfo | find "OS Name" >> GTRequiredSoftwareVersions.log 2>&1

echo "JDK version:" >> GTRequiredSoftwareVersions.log 2>&1 && java -version >> GTRequiredSoftwareVersions.log 2>&1

:: Check if Python is installed
where python >nul 2>nul
IF %ERRORLEVEL% EQU 0 (
    echo "Python version:"  >> GTRequiredSoftwareVersions.log 2>&1 && python --version >> GTRequiredSoftwareVersions.log 2>&1
) ELSE (
    echo "Python3 version:"  >> GTRequiredSoftwareVersions.log 2>&1 && python3 --version >> GTRequiredSoftwareVersions.log 2>&1
)

echo "Node.js version:" >> GTRequiredSoftwareVersions.log 2>&1 && node -v >> GTRequiredSoftwareVersions.log 2>&1

echo "NPM version:"  >> GTRequiredSoftwareVersions.log 2>&1 && npm -v >> GTRequiredSoftwareVersions.log 2>&1

echo "windows-build-tools version:" >> GTRequiredSoftwareVersions.log 2>&1 && npm list -g grunt >> GTRequiredSoftwareVersions.log 2>&1
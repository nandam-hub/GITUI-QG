#!/bin/bash

# Get the current date and time
TIMESTAMP=$(date +"%Y-%m-%d %T")

LOG_FILE="GTRequiredSoftwareVersions.log"

# Add timestamp to the log file
echo "GT Required Software versions. This info is collected on : $TIMESTAMP" > "$LOG_FILE"

echo >> "$LOG_FILE"
echo "Hardware info:" >> "$LOG_FILE"
# Mac OS version
echo -en "\tMacOS version : " >> "$LOG_FILE" && sw_vers -productVersion >> "$LOG_FILE"
echo -en "\tMachine Type : " >> "$LOG_FILE" && uname -m >> "$LOG_FILE"
echo -en "\tProcessor Information : " >> "$LOG_FILE" && sysctl -n machdep.cpu.brand_string >> "$LOG_FILE"

# Check Java version
echo >> "$LOG_FILE"
echo -n "Java version : " >> "$LOG_FILE" && java -version >> "$LOG_FILE" 2>&1

# Check Python version
echo >> "$LOG_FILE"
# Check if Python 3 is installed
if command -v python3 &> /dev/null
then
    echo -en "Python version: $(python3 --version)" >> "$LOG_FILE"
else
    echo -en "Python version: $(python --version)" >> "$LOG_FILE"
fi

# Check Node.js and npm versions
echo >> "$LOG_FILE"
echo >> "$LOG_FILE"
echo -en "Node.js version : " >> "$LOG_FILE" && node -v >> "$LOG_FILE"

echo >> "$LOG_FILE"
echo -en "NPM version : " >> "$LOG_FILE" && npm -v >> "$LOG_FILE"

echo "Versions saved to $LOG_FILE"
set -x
apt-get update
apt-get install -y software-properties-common
apt-get install -y google-chrome-stable=$CHROME_VERSION
#apt-get install -y chromium=$CHROMIUM_VERSION

apt update
apt install -y software-properties-common
apt install -y chromium-browser
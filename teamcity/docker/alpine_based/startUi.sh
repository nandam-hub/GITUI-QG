#!/bin/sh
XVFB_SCREEN_WIDTH=${SCREEN_WIDTH-1280}
XVFB_SCREEN_HEIGHT=${SCREEN_HEIGHT-720}

dbus-daemon --session --fork
Xvfb ${DISPLAY} -screen 0 "${XVFB_SCREEN_WIDTH}x${XVFB_SCREEN_HEIGHT}x24" >/dev/null 2>&1 &
fluxbox >/dev/null 2>&1 &
echo "UI Started"
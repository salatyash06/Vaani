import os
import eel
from enginee.features import *
eel.init('www')
play_audio()
os.system('start chrome.exe --app="http://127.0.0.1:3000/www/index.html"')
eel.start('index.html',mode=None,host='localhost',block=true)
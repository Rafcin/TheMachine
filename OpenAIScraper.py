#Created by Raf on 8/1/2019 11:59pm
import os
import glob
import fnmatch
import shutil

print('Import finished')

targdir = "/home/nvidia/Desktop/OpenAI-Data/google-authenticator"
finaldir = "/home/nvidia/Desktop/OpenAI-Data/data/gauth"
filename = "gauthcode"

extensions = ('.java')

count = 0

for subdir, dirs, files in os.walk(targdir):
    for file in files:
        ext = os.path.splitext(file)[-1].lower()
        if ext in extensions:
            if file.endswith('.java'):
                #print(file)
                count += 1
                os.rename(os.path.join(subdir,file),os.path.join(finaldir,str(filename)+str(count)+'.txt'))
                print('Rename Done')
            
print('Finished Script')
            







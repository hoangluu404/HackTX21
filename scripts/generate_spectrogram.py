import numpy as np
import matplotlib.pyplot as plt
import scipy.io.wavfile as wavfile

import librosa
import librosa.display

def graph_spectrogram(input_file, output_file):
    sample, sample_rate = librosa.load(input_file, sr=None)
    fig = plt.figure(figsize=[1,1])       #setting spectrogram size of 1 by 1 inch
    ax = fig.add_subplot(111)             #one single grid generated everytime the function is called 
    ax.axes.get_xaxis().set_visible(False)
    ax.axes.get_yaxis().set_visible(False)
    ax.set_frame_on(False)
    spectrogramImage = librosa.feature.melspectrogram(y=sample, sr=44100, n_fft=2048, hop_length=512, n_mels=128)
    librosa.display.specshow(librosa.power_to_db(spectrogramImage, ref=np.max))
    
    plt.savefig(output_file, dpi=400, bbox_inches='tight',pad_inches=0)
    plt.close()    
    fig.clf()
    plt.close(fig)

import os

def generate_spectrogram(type_f):
    if type_f == "train":
      in_dir = '../data/trainingData/'
      out_dir = '../ktrain/'
    elif type_f == "test":
      in_dir = '../data/testingData/'
      out_dir = '../ktest/'

    entries = os.listdir(in_dir)
    for e in entries:
      input_file = in_dir+e
      output_file = out_dir+e.split('.')[0]+".jpg"
      graph_spectrogram(input_file,output_file)

generate_spectrogram("test")
print("Done with test")
generate_spectrogram("train")
print("Done with planning")
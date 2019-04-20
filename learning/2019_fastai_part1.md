# Fast.ai, Practical Deep Learning For Coders, Part 1 (v3.2019)

## Lesson 1: Image classification

[Course site](http://course.fast.ai/),
[this lesson](https://course.fast.ai/videos/?lesson=1),
[youtube](https://www.youtube.com/watch?v=XfoYk_Z5AkI),
[notebook](https://colab.research.google.com/drive/1FUlv0jkxSiVwmU73kFHY5bSNgSc2Nr3I).

```python
# Before you start using your notebook, you need to install the necessary packages. 
# You can do this by creating a code cell, and running:
!curl -s https://course.fast.ai/setup/colab | bash

# If your notebook has these cells in the top you should delete them before you start working.
# %reload_ext autoreload
# %autoreload 2
# %matplotlib inline

# We are going to work with the fastai V1 library which sits on top of Pytorch 1.0. 
from fastai.vision import *
from fastai.metrics import error_rate

# Set the batch size.
bs = 64

# Download and extract the data.
path = untar_data(URLs.PETS)
path_anno = path/'annotations'
path_img = path/'images'

# We must know Regular expressions.
# https://docs.python.org/3.6/library/re.html
fnames = get_image_files(path_img)
np.random.seed(2)
pat = r'/([^/]+)_\d+.jpg$'
data = ImageDataBunch.from_name_re(path_img, fnames, pat, ds_tfms=get_transforms(), size=224, bs=bs).normalize(imagenet_stats)

# Training resnet34
learn = cnn_learner(data, models.resnet34, metrics=error_rate)
learn.model

#  Train for 4 epochs (4 cycles through all our data).
learn.lr_find()
learn.recorder.plot()
learn.fit_one_cycle(4)
learn.unfreeze()
learn.fit_one_cycle(2, max_lr=slice(1e-6,1e-4))

# Confusion matrix.
interp = ClassificationInterpretation.from_learner(learn)
interp.most_confused(min_val=2)

# Attention.
# losses,idxs = interp.top_losses()
# len(data.valid_ds)==len(losses)==len(idxs)
# interp.plot_top_losses(9, figsize=(15,11))
# interp.plot_confusion_matrix(figsize=(12,12), dpi=60)

# Other data formats
# See https://docs.fast.ai/vision.data.html#ImageDataBunch

data = ImageDataBunch.from_folder(path, ds_tfms=tfms, size=26)
data = ImageDataBunch.from_csv(path, ds_tfms=tfms, size=28)
data = ImageDataBunch.from_df(path, df, ds_tfms=tfms, size=24)
data = ImageDataBunch.from_name_re(path, fn_paths, pat=pat, ds_tfms=tfms, size=24)
data = ImageDataBunch.from_name_func(path, fn_paths, ds_tfms=tfms, size=24,
        label_func = lambda x: '3' if '/3/' in str(x) else '7')
data = ImageDataBunch.from_lists(path, fn_paths, labels=labels, ds_tfms=tfms, size=24)
data.classes
```

## Lesson 2

https://www.youtube.com/watch?v=ccMHJeQU4Qw

## Lesson 3

https://www.youtube.com/watch?v=MpZxV6DVsmM

## Lesson 4

https://www.youtube.com/watch?v=qqt3aMPB81c

## Lesson 5

https://www.youtube.com/watch?v=CJKnDu2dxOE

## Lesson 6

https://www.youtube.com/watch?v=hkBa9pU-H48

## Lesson 7

https://www.youtube.com/watch?v=9spwoDYwW_I
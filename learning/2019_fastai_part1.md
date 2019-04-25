# Fast.ai, Practical Deep Learning For Coders, Part 1 (v3.2019)

Links

- [Course site](http://course-v3.fast.ai/)
- [FAQ, resources, and official course updates white_check_mark](https://forums.fast.ai/t/faq-resources-and-official-course-updates/27934)
- [Set Up Colab](https://course.fast.ai/start_colab.html)

Pour charger un notebook du repo github de fastai dans colab, suivre les étapes suivantes:

- Ouvrir https://colab.research.google.com/
- Cliquer sur l'onglet GITHUB
- Rechercher "fastai"
- Sélectionner "fastai/course-v3"
- Dans "Fichier", "Enregistrer une copie dans Drive...".
- Déplacer dans le bon répertoire dans Drive.
- Renommer le notebook.
- Modifier le type d'exécution pour GPU.

## Lesson 1: Image classification

[This lesson](https://course.fast.ai/videos/?lesson=1),
[youtube](https://www.youtube.com/watch?v=XfoYk_Z5AkI),
[lesson1-pets.ipynb](https://colab.research.google.com/drive/1FUlv0jkxSiVwmU73kFHY5bSNgSc2Nr3I)

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

# Most confused and confusion matrix.
interp = ClassificationInterpretation.from_learner(learn)
interp.most_confused(min_val=2)
interp.plot_confusion_matrix()
# interp.plot_confusion_matrix(figsize=(12,12), dpi=60)

# Attention.
losses,idxs = interp.top_losses()
len(data.valid_ds)==len(losses)==len(idxs)
interp.plot_top_losses(9, figsize=(15,11))

# Other data formats
# See https://docs.fast.ai/vision.data.html#ImageDataBunch
data = ImageDataBunch.from_folder(path, ds_tfms=tfms, size=26)
data = ImageDataBunch.from_csv(path, ds_tfms=tfms, size=28)
data = ImageDataBunch.from_df(path, df, ds_tfms=tfms, size=24)
data = ImageDataBunch.from_name_re(path, fn_paths, pat=pat, ds_tfms=tfms, size=24)
data = ImageDataBunch.from_name_func(path, fn_paths, ds_tfms=tfms, size=24,
        label_func = lambda x: '3' if '/3/' in str(x) else '7')
data = ImageDataBunch.from_lists(path, fn_paths, labels=labels, ds_tfms=tfms, size=24)
```

## Lesson 2: Data cleaning and production; SGD from scratch

[This lesson](https://course.fast.ai/videos/?lesson=2),
[youtube](https://www.youtube.com/watch?v=ccMHJeQU4Qw),
[lesson2-download.ipynb](https://colab.research.google.com/drive/1JRpOLtsmuFoK_2zPvBQNZcoN8vCm-h4a),
[lasson2-sgd.ipynb](https://colab.research.google.com/drive/1yiF_lAwdHleFvw_r1zsjywz-h9F3iBWf).

Links:

- [Audacity](https://www.audacityteam.org/)
- [Deep Convolutional Neural Networks and Data Augmentation for Environmental Sound Classification](https://arxiv.org/abs/1608.04363)
- [The Mystery of the Origin — Cancer Type Classification using Fast.AI Library](https://towardsdatascience.com/the-mystery-of-the-origin-cancer-type-classification-using-fast-ai-libray-212eaf8d3f4e)
- [How to create a deep learning dataset using Google Images](https://www.pyimagesearch.com/2017/12/04/how-to-create-a-deep-learning-dataset-using-google-images/)

Gather URLs of each class of images:

- Find some pictures on https://images.google.com/ 
- Just scroll to end of images and preview 1000-2000 images before hitting image button. It will download all of em.
- Open console
- Paste this code.

```javascript
urls = Array.from(document.querySelectorAll('.rg_di .rg_meta')).map(el=>JSON.parse(el.textContent).ou);
window.open('data:text/csv;charset=utf-8,' + escape(urls.join('\n')));
```

Install wget on macOS:

- Install Homebrew (https://brew.sh/).
- Install wget `$ brew install wget`.

Links:

- [iNaturalist API](https://www.inaturalist.org/pages/api+reference) and [here](https://api.inaturalist.org/v1/docs/).

Deux façons d'afficher une méthode: `accuracy??` for source code and ```doc(accuracy)``` for documentation.

## Lesson 3: Data blocks; Multi-label classification; Segmentation

[This lesson](https://course.fast.ai/videos/?lesson=3),
[youtube](https://www.youtube.com/watch?v=MpZxV6DVsmM).
[lesson3-planet.ipynb](https://colab.research.google.com/drive/11ERE5MQNwRcq1To6A5XCymDKwuyG7w7w),
[lesson3-camvid.ipynb](https://colab.research.google.com/drive/1E98tTVJ1oS_PTnXhFtiOgiGrWsBE4oZX),
[lesson3-head-pose.ipynb](https://colab.research.google.com/drive/1nc139IVpLeYt_nOBcqKg_p5MoaHw-ICR),
[lesson3-imdb.ipynb](https://colab.research.google.com/drive/1fqsitMKyV2L90ecqSVa6lvZC6Ge6qVPL).

Links:

- Kaggle competition, [Planet: Understanding the Amazon from Space](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space).
- [Data block API](https://docs.fast.ai/data_block.html)
- [data_block.ipynb](https://github.com/fastai/fastai/blob/master/docs_src/data_block.ipynb)
- [fast.ai Datasets](https://course.fast.ai/datasets)
- [U-Net: Convolutional Networks for Biomedical Image Segmentation](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)
- [Setting the learning rate of your neural network](https://www.jeremyjordan.me/nn-learning-rate/)
- [Simon Jégou, Michal Drozdzal, David Vazquez, Adriana Romero, Yoshua Bengio, The One Hundred Layers Tiramisu: Fully Convolutional DenseNets for Semantic Segmentation](https://arxiv.org/abs/1611.09326)
- [RTX 2060 Vs GTX 1080Ti Deep Learning Benchmarks: Cheapest RTX card Vs Most Expensive GTX card](https://towardsdatascience.com/rtx-2060-vs-gtx-1080ti-in-deep-learning-gpu-benchmarks-cheapest-rtx-vs-most-expensive-gtx-card-cd47cd9931d2)
- [Sagar Sharma, Activation Functions in Neural Networks](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)
- [Introduction to Kaggle API in Google Colab (Part-I)](https://mmiakashs.github.io/blog/2018-09-20-kaggle-api-google-colab/)

## Lesson 4: NLP; Tabular data; Collaborative filtering; Embeddings

[This lesson](https://course.fast.ai/videos/?lesson=4),
[youtube](https://www.youtube.com/watch?v=qqt3aMPB81c),
[lesson4-tabular.ipynb](https://colab.research.google.com/drive/17536GGJ-U9I3qOIiholYGuY4JndBqrNH),
[lesson4-collab.ipynb](https://colab.research.google.com/drive/16YvRgrSor_7acGZ5_B-b_kbyF-CVCR9m).

Links:

- [Universal Language Model Fine-tuning for Text Classification](https://arxiv.org/abs/1801.06146), ULMFiT
- [MovieLens](https://grouplens.org/datasets/movielens/)
- [An Exploration of Word Embedding Initialization in Deep-Learning Tasks](https://arxiv.org/abs/1711.09160)

## Lesson 5

[This lesson](https://course.fast.ai/videos/?lesson=5),
[youtube](https://www.youtube.com/watch?v=CJKnDu2dxOE),
[notebook](https://colab.research.google.com/drive/1FUlv0jkxSiVwmU73kFHY5bSNgSc2Nr3I).

## Lesson 6

[This lesson](https://course.fast.ai/videos/?lesson=6),
[youtube](https://www.youtube.com/watch?v=hkBa9pU-H48),
[notebook](https://colab.research.google.com/drive/1FUlv0jkxSiVwmU73kFHY5bSNgSc2Nr3I).

## Lesson 7

[This lesson](https://course.fast.ai/videos/?lesson=7),
[youtube](https://www.youtube.com/watch?v=9spwoDYwW_I),
[notebook](https://colab.research.google.com/drive/1FUlv0jkxSiVwmU73kFHY5bSNgSc2Nr3I).

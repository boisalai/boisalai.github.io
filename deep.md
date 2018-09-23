<link rel="stylesheet" href="/stylesheets/main.css">

# Références utiles sur l'apprentissage automatique

## Courses

- [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- [Fast.ai](http://www.fast.ai/)
- [CS229: Machine Learning](http://cs229.stanford.edu/)
  - [Resources for CS229 - Machine Learning](https://stanford.edu/~shervine/teaching/cs-229.html)
  - [Machine Learning cheatsheets for Stanford's CS 229](https://github.com/afshinea/stanford-cs-229-machine-learning)
- [CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/)
- [Kaggle Courses](https://www.kaggle.com/learn/overview)
- [Over 200 of the Best Machine Learning, NLP, and Python Tutorials — 2018 Edition](https://medium.com/machine-learning-in-practice/over-200-of-the-best-machine-learning-nlp-and-python-tutorials-2018-edition-dd8cf53cb7dc)

## Books

- [Deep Learning](http://www.deeplearningbook.org/)
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
- [Deep Learning with Python, by Francois Chollet](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) (Python, Keras) 

## Articles

- [What are you reading](https://www.reddit.com/r/MachineLearning/comments/8tnnez/d_machine_learning_wayr_what_are_you_reading_week/) 

## Deep Neural Networks

### Learning Rates

- [Understanding Learning Rates and How It Improves Performance in Deep Learning](https://towardsdatascience.com/understanding-learning-rates-and-how-it-improves-performance-in-deep-learning-d0d4059c1c10),
- [Setting the learning rate of your neural network](https://www.jeremyjordan.me/nn-learning-rate/)
- [Exploring Stochastic Gradient Descent with Restarts (SGDR)](https://medium.com/38th-street-studios/exploring-stochastic-gradient-descent-with-restarts-sgdr-fa206c38a74e)
- Weight decay
- Cosine annealing learning rate

### Activation functions

- ReLU
- Softmax (single label)
- Sigmoid (multi label)
- Tanh

### Regularization

- Dropout
- [L2 Regularization](https://jamesmccaffrey.wordpress.com/2017/02/19/l2-regularization-and-back-propagation/)

### Optimization (gradient descent optimization algorithms)

- [An overview of gradient descent optimization algorithms](http://ruder.io/optimizing-gradient-descent/)
- [Optimization for Deep Learning Highlights in 2017](http://ruder.io/deep-learning-optimization-2017/)
- [Coursera, Mini Batch Gradient Descent](https://www.youtube.com/watch?v=4qJaSmvhxi8)
- [Coursera, Understanding Mini-Batch Gradient Dexcent](https://www.youtube.com/watch?v=-_4Zi8fCZO4)
- Momentum
  - [Coursera, Gradient Descent With Momentum](https://www.youtube.com/watch?v=k8fTYJPd3_I)
- Adam, AdamW
  - [Fixing Weight Decay Regularization in Adam](https://arxiv.org/pdf/1711.05101.pdf)
  - [Coursera](https://www.youtube.com/watch?v=JXQT_vxqwIs)
- Adagrad
- Stochastic Gradient Descent (SGD)
- Nesterov-SGD
- RMSProp
  - [Coursera](https://www.youtube.com/watch?v=_e-LFe_igno)
- XGBoost

### Transfer Learning

### Metrics

- [Accuracy, Precision, Recall or F1?](https://towardsdatascience.com/accuracy-precision-recall-or-f1-331fb37c5cb9)
- [Indicateurs principaux](http://stanford.edu/~shervine/l/fr/teaching/cs-229/pense-bete-machine-learning-petites-astuces)
- [Root Mean Square Percentage Error (RMSPE)](https://www.kaggle.com/c/rossmann-store-sales)

### Validation set

- [How (and why) to create a good validation set](http://www.fast.ai/2017/11/13/validation-sets/)

### Building blocks

- Epoch
- Minibatch
- Fully connected layer
- Batch normalization
- Dropout
- Activations
  - [Initialization Of Deep Networks Case of Rectifiers](http://www.jefkine.com/deep/2016/08/08/initialization-of-deep-networks-case-of-rectifiers/)
- LSTM
  - [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
  - [GRU (Gated Recurrent Unit](https://towardsdatascience.com/understanding-gru-networks-2ef37df6c9be)
  - [Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling](https://arxiv.org/pdf/1412.3555v1.pdf)
  - https://www.topbots.com/exploring-lstm-tutorial-part-1-recurrent-neural-network-deep-learning/
  - https://www.topbots.com/exploring-lstm-tutorial-part-2-recurrent-neural-network-deep-learning/
- Embedding vector
  - Voir ce [video](https://www.youtube.com/watch?v=J99NV9Cr75I&feature=youtu.be) de fast.ai autour de 45:00.
  - [Entity Embeddings of Categorical Variables](https://arxiv.org/abs/1604.06737)
  - PCA to simplify them down to just 3 vectors. See this [video](https://www.youtube.com/watch?v=sHcLkfRrgoQ&feature=youtu.be) at 20:34.

### Convolutional Neural Networks (CNN)

- [Visualizing and Understanding Convolutional Networks](https://arxiv.org/abs/1311.2901)
- [CS231n: Convolutional Neural Networks for Visual Recognition](http://vision.stanford.edu/teaching/cs231n/)
- Stride
- Max pooling
  - De nos jours, on n'utiliserait plus "maxpool" mais plutôt "stride 2 convolution".
- Average pooling
  - ```nn.AvgPool2d(kernel_size=7, stride=7, padding=0)```
- Adaptive max pooling
  - http://forums.fast.ai/t/ideas-behind-adaptive-max-pooling/12634/3
  - ```nn.AdaptiveAvgPool2d(1)```

### Recurrent neural network (RNN)

### Natural Language Processing (NLP)

- [Deep Learning, NLP, and Representations](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [NLP's ImageNet moment has arrived](http://ruder.io/nlp-imagenet/)
- [Archived: CS224n: Natural Language Processing with Deep Learning (2016-2017)](http://web.stanford.edu/class/cs224n/archive/WWW_1617/index.html)

### Generative Adversarial Network (GAN)

- [Ian Goodfellow: Generative Adversarial Networks (NIPS 2016 tutorial)](https://www.youtube.com/watch?v=HGYYEUSm-0Q)

### Deep Reinforcement Learning

### Bayesian Deep Learning

### Popular Model Architectures (pretrained)

- [Neural Network Architectures](https://towardsdatascience.com/neural-network-architectures-156e5bad51ba)
- ResNets
  - http://torch.ch/blog/2016/02/04/resnets.html
  - https://arxiv.org/pdf/1512.03385.pdf
- ResNet-18
- ResNet-34
- [ResNet-50 Pre-trained Model for Keras](https://www.kaggle.com/keras/resnet50)
- ResNet-152
- ResNet-200
- [Decoding the ResNet architecture](http://teleported.in/posts/decoding-resnet-architecture/)
- [ResNeXt-50](https://github.com/facebookresearch/ResNeXt)
- DenseNets
- WavsNets?
- AlexNet
- InceptionV3
- SqueezeNet
- GoogLeNet
- VGG-16
- VGG-19

## Data Cleaning / Features Engineering

- [Structured and times series data](https://www.youtube.com/watch?v=gbceqO8PpBg&feature=youtu.be) between 25:10 and ??
- [Structured Deep Learning](https://towardsdatascience.com/structured-deep-learning-b8ca4138b848), with embeddings

## Common image transformations

- Normalize
- Scale
- CenterCrop
- Pad
- RandomCrop
- RandomFlip

## Kaggle

- [Dog Breed Identification](https://www.kaggle.com/c/dog-breed-identification)
- [Planet: Understanding the Amazon from Space](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space)
- [Corporación Favorita Grocery Sales Forecasting](https://www.kaggle.com/c/favorita-grocery-sales-forecasting)
- [Rossmann Store Sales](https://www.kaggle.com/c/rossmann-store-sales)
- [Plant Seedlings Classification](https://www.kaggle.com/c/plant-seedlings-classification/leaderboard)
- [Jeremy Howard](https://www.kaggle.com/jhoward)
- [Rachael Tatman](https://www.kaggle.com/rtatman/kernels)

## Popular datasets

- CIFAR-10
  - [The CIFAR-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html)
  - ```wget http://pjreddie.com/media/files/cifar.tgz```
- CIFAR-100
- COCO
- LSUN
- MNIST
  - [The MNIST Database of handwritten digits](http://yann.lecun.com/exdb/mnist/)
  - [pytorch/examples/.../mnist](https://github.com/pytorch/examples/blob/master/mnist/main.py)

## Tools

### virtualenv

The [virtualenv environment manager](https://virtualenv.pypa.io/en/latest/) creates an isolated corner of your computer where all the Python tools you use to build an application are sealed off. We will use it to store all of the tools needed for the analysis in this class.

- http://www.firstpythonnotebook.org/prerequisites/virtualenv.html
- [Chapter 1: Hello virtualenv](http://www.firstpythonnotebook.org/virtualenv/index.html)

Mais je crois que conda vient avec sa propre machine virtuelle. À vérifier.

### Conda

- https://conda.io/docs/index.html

### Git

[Git](https://git-scm.com/) is a version control program for saving the changes you make to files over time. 

### Python

- [Learning Python: From Zero to Hero](https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567)
- [Python Dictionary Comprehension Tutorial](https://www.datacamp.com/community/tutorials/python-dictionary-comprehension)

### Numpy

- [Python Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial)

### Pendas

### Scipy

- [Scipy Lecture Notes](http://www.scipy-lectures.org/)

### Matplotlib

### Seaborn

- [Home page](https://seaborn.pydata.org/)

### Anaconda

Pour mettre à jour Anaconda:

```bash
conda update conda
conda update anaconda
```

### Jupyter

- [Jupyter Notebook Commands & Shortcuts](https://github.com/reshamas/fastai_deeplearn_part1/blob/master/tools/jupyter_notebook.md)
- [A gallery of interesting Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)

### Google Colab

### Hadoop

- [Extending Hadoop for Data Science: Streaming, Spark, Storm, and Kafka](https://www.lynda.com/Hadoop-tutorials/Extending-Hadoop-Data-Science-Streaming-Spark-Storm-Kafka/516574-2.html)

### Spark

### Shell Scripting

- https://github.com/ujjwalkarn/DataSciencePython

## AI Framework

### Pytorch

- [https://pytorch.org/](https://pytorch.org/)
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
- https://github.com/ritchieng/the-incredible-pytorch
- [PyTorch Tutorial](http://web.cs.ucdavis.edu/~yjlee/teaching/ecs289g-winter2018/Pytorch_Tutorial.pdf)
- [PyTorch Tutorial](https://github.com/yunjey/pytorch-tutorial/blob/master/README.md)
- [Source code](https://github.com/RedditSota/state-of-the-art-result-for-machine-learning-problems)
- https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html
- [jcjohnson/pytorch_finetune.py](https://gist.github.com/jcjohnson/6e41e8512c17eae5da50aebef3378a4c)
- [pytorch-tutorial](https://github.com/yunjey/pytorch-tutorial). This repository provides tutorial code for deep learning researchers to learn PyTorch.

Pour installer PyTorch, faire ```conda install pytorch torchvision -c pytorch```. 

- Learning Rate Scheduler
  - torch.optim.lr_scheuler
    - StepLR: LR is delayed by gamma every step_size epochs
    - MultiStepLR: LR is delayed by gamma once the number of epoch reaches milestones.
    - ExponentialLR
    - CosineAnnealingLR
    - ReduceLROnPlateau

### TensorFlow

- [TensorFlow in Anaconda](https://www.anaconda.com/blog/developer-blog/tensorflow-in-anaconda/)
- https://tf.wiki/en/preface.html et https://github.com/snowkylin/TensorFlow-cn 

### TensorboardX

### MXNet

### Keras

### AutoML

- [Cloud AutoML](https://cloud.google.com/automl/)

### Auto Keras

- [Auto Keras](https://autokeras.com/)

### Open Neural Network Exchange (ONNX)

An open source format to move models between tools.

- https://onnx.ai/

## Cloud

### AWS

- See [video](http://course.fast.ai/lessons/lesson2.html) between 1:59:17 to 2:07:29.
- [AWS fastami GPU Image Setup](https://github.com/reshamas/fastai_deeplearn_part1/blob/master/tools/aws_ami_gpu_setup.md)

### Google Cloud Platform


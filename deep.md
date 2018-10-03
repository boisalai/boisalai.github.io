<link rel="stylesheet" href="/stylesheets/main.css">

# Alain Boisvert, MBA

## Références utiles sur l'apprentissage automatique

## Guides

### Courses

- IVADO
  - [École d’été francophone en apprentissage profond 2017](https://ivado.ca/formations/ecole-dete-francophone-apprentissage-profond/)
  - [École IVADO/MILA en apprentissage profond (2e édition)](https://ivado.ca/formations/ecole-ivado-mila-apprentissage-profond/)
- Coursera
  - [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
  - [Neural Networks for Machine Learning](https://www.coursera.org/learn/neural-networks), Geoffrey Hinton, Professor
- Udacity
  - [Udacity, AI programming with Python](https://www.udacity.com/course/ai-programming-python-nanodegree--nd089)
- [Fast.ai](http://www.fast.ai/)
  - [Practical Deep Learning For Coders, Part 1](http://course.fast.ai/)
  - [Cutting Edge Deep Learning For Coders, Part 2](http://course.fast.ai/part2.html)
  - [Introduction to Machine Learning for Coders](http://course.fast.ai/ml)
  - [Hiromi Suenaga](https://medium.com/@hiromi_suenaga)
- CS224n
  - [CS224n Videos](https://www.youtube.com/watch?v=OQQ-W_63UgQ&list=PL3FW7Lu3i5Jsnh1rnUwq_TcylNr7EkRe6)
  - [CS224n Reddit](https://www.reddit.com/r/CS224n/)
- CS229
  - [CS229: Machine Learning](http://cs229.stanford.edu/)
  - [Resources for CS229 - Machine Learning](https://stanford.edu/~shervine/teaching/cs-229.html)
  - [Machine Learning cheatsheets for Stanford's CS 229](https://github.com/afshinea/stanford-cs-229-machine-learning)
- CS294
  - [CS294-112 at UC Berkeley, Deep Reinforcement Learning](http://rail.eecs.berkeley.edu/deeprlcourse/)
  - [CS 294: Fairness in Machine Learning](https://fairmlclass.github.io/#statistical)
- CS231n
  - [CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/)
  - http://cs231n.github.io/
  - http://cs231n.github.io/neural-networks-2/#datapre
  - http://cs231n.github.io/neural-networks-3/#sanitycheck
- [Over 200 of the Best Machine Learning, NLP, and Python Tutorials — 2018 Edition](https://medium.com/machine-learning-in-practice/over-200-of-the-best-machine-learning-nlp-and-python-tutorials-2018-edition-dd8cf53cb7dc)

### Books

- [Deep Learning](http://www.deeplearningbook.org/)
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)
- [Deep Learning with Python, by Francois Chollet](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) (Python, Keras)
- [The Matrix Cookbook](http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/3274/pdf/imm3274.pdf)
- [Python Machine Learning (2nd Ed.) Code Repository](https://github.com/rasbt/python-machine-learning-book-2nd-edition)
- [Interpretable Machine Learning](https://christophm.github.io/interpretable-ml-book/)

### Articles

- [What are you reading](https://www.reddit.com/r/MachineLearning/comments/8tnnez/d_machine_learning_wayr_what_are_you_reading_week/)
- [The Matrix Calculus You Need For Deep Learning](http://explained.ai/matrix-calculus/index.html)
- [MONTRÉAL.AI | Montréal Artificial Intelligence](https://montrealartificialintelligence.com/academy/#0-Getting-Started)
- https://blog.goodaudience.com/2018-new-years-resolution-learn-deep-learning-42c63f0bc87d

### References

- [Machine Learning Cheatsheet](https://ml-cheatsheet.readthedocs.io/en/latest/index.html)

### Conferences

- [CVPR 2018](http://cvpr2018.thecvf.com/)

## Concepts

### classification, regression, unsupervised methods

### Learning Rates

- [Understanding Learning Rates and How It Improves Performance in Deep Learning](https://towardsdatascience.com/understanding-learning-rates-and-how-it-improves-performance-in-deep-learning-d0d4059c1c10),
- [Setting the learning rate of your neural network](https://www.jeremyjordan.me/nn-learning-rate/)
- [Exploring Stochastic Gradient Descent with Restarts (SGDR)](https://medium.com/38th-street-studios/exploring-stochastic-gradient-descent-with-restarts-sgdr-fa206c38a74e)
- Weight decay
- Cosine annealing learning rate

### Backpropagation

- [CS231n Introduction to backpropagation](http://cs231n.github.io/optimization-2/)

### Activation functions

- ReLU
- Softmax (single label)
- Sigmoid (multi label)
- Tanh

### Data augmentation

### Regularization

Regularization refers to imposing constraints on our neural network in order to prevent overfitting or otherwise discourage undesirable properties.

- Dropout
- Batch Normalization
  - [Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift](https://arxiv.org/pdf/1502.03167.pdf)
- Weight/Bias
- [L1 Regularization]
- [L2 Regularization](https://jamesmccaffrey.wordpress.com/2017/02/19/l2-regularization-and-back-propagation/)
- Data augmentation (see below)

### Optimization (gradient descent optimization algorithms)

- [An overview of gradient descent optimization algorithms](http://ruder.io/optimizing-gradient-descent/)
- [Optimization for Deep Learning Highlights in 2017](http://ruder.io/deep-learning-optimization-2017/)
- [Coursera, Mini Batch Gradient Descent](https://www.youtube.com/watch?v=4qJaSmvhxi8)
- [Coursera, Understanding Mini-Batch Gradient Dexcent](https://www.youtube.com/watch?v=-_4Zi8fCZO4)
- [Practical Recommendations for Gradient-Based Training of Deep Architectures, Yoshua Bengio, Version 2, Sept. 16th, 2012](https://arxiv.org/pdf/1206.5533v2.pdf)
- [ptimizing convolutional networks (CS231n)](https://cs231n.github.io/neural-networks-3/) by Andrej Karpathy
- Stochastic Gradient Descent (SGD)
- Momentum
  - [Coursera, Gradient Descent With Momentum](https://www.youtube.com/watch?v=k8fTYJPd3_I)
  - [Why Momentum Really Works](https://distill.pub/2017/momentum/)
  - Nesterov-SGD
  - Nesterov accelerated gradient descent (NAG)
- Adaptive methods
  - Adam, AdamW (adaptive moment estimation)
    - [Fixing Weight Decay Regularization in Adam](https://arxiv.org/pdf/1711.05101.pdf)
    - [Coursera](https://www.youtube.com/watch?v=JXQT_vxqwIs)
    - [AdamW and Super-convergence is now the fastest way to train neural nets](http://www.fast.ai/2018/07/02/adam-weight-decay/)
  - AdaGrad
  - AdaDelta
  - RMSProp
    - [Coursera](https://www.youtube.com/watch?v=_e-LFe_igno)
- XGBoost

### Transfer Learning

### Loss Functions and Metrics

- [Loss Functions](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html)
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
- Embedding vector
  - Voir ce [video](https://www.youtube.com/watch?v=J99NV9Cr75I&feature=youtu.be) de fast.ai autour de 45:00.
  - [Entity Embeddings of Categorical Variables](https://arxiv.org/abs/1604.06737)
  - PCA to simplify them down to just 3 vectors. See this [video](https://www.youtube.com/watch?v=sHcLkfRrgoQ&feature=youtu.be) at 20:34.

### Convolutional Neural Networks (CNN)

Liens:

- [Visualizing and Understanding Convolutional Networks](https://arxiv.org/pdf/1311.2901v3.pdf)
- [CS231n: Convolutional Neural Networks for Visual Recognition](http://vision.stanford.edu/teaching/cs231n/)
  - [Convolutional Neural Networks (CNNs / ConvNets)](https://cs231n.github.io/convolutional-networks/)
- [Deep Learning for Computer Vision (Andrej Karpathy, OpenAI)](https://www.youtube.com/watch?v=u6aEYuemt0M)
- [Convolutional neural networks](https://ml4a.github.io/ml4a/convnets/)
- [A guide to convolution arithmetic for deep learning](https://arxiv.org/pdf/1603.07285.pdf)

Notions:

- Layers used to build ConvNets
  - INPUT (ex. 32x32x3)
  - Convolution Layer (CONV)
  - Activation function (RELU)
  - Pooling Layer (POOL)
  - Fully-Connected Layer (FC)
- Output size = (W-F+2P)/S+1, where W = input size, F = filter size (or kernel size), P = zero-padding, S = stride
- The Conv Layer:
  - Accepts a volume of size W1×H1×D1
  - Requires four hyperparameters:
    - Number of filters K,
    - their spatial extent F,
    - the stride S,
    - the amount of zero padding P.
  - Produces a volume of size W2×H2×D2 where:
    - W2=(W1−F+2P)/S+1
    - H2=(H1−F+2P)/S+1 (i.e. width and height are computed equally by symmetry)
    - D2=K
- The pooling layer:
  - Max pooling
  - Average pooling
    - ```nn.AvgPool2d(kernel_size=7, stride=7, padding=0)```
  - Adaptive max pooling
    - http://forums.fast.ai/t/ideas-behind-adaptive-max-pooling/12634/3
    - ```nn.AdaptiveAvgPool2d(1)```
  - Accepts a volume of size W1×H1×D1
  - Requires two hyperparameters:
    - their spatial extent F,
    - the stride S,
  - Produces a volume of size W2×H2×D2 where:
    - W2=(W1−F)/S+1
    - H2=(H1−F)/S+1
    - D2=D1
  - Introduces zero parameters since it computes a fixed function of the input.
  - Note that it is not common to use zero-padding for Pooling layers.
    - It seems likely that future architectures will feature very vew to no pooling layers.

### Recurrent Neural Network (RNN)

- [A Beginner's Guide to LSTMs](https://skymind.ai/wiki/lstm)
- [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
- [GRU (Gated Recurrent Unit](https://towardsdatascience.com/understanding-gru-networks-2ef37df6c9be)
- [Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling](https://arxiv.org/pdf/1412.3555v1.pdf)
- https://www.topbots.com/exploring-lstm-tutorial-part-1-recurrent-neural-network-deep-learning/
- https://www.topbots.com/exploring-lstm-tutorial-part-2-recurrent-neural-network-deep-learning/
- [Composing Music With Recurrent Neural Networks](http://www.hexahedria.com/2015/08/03/composing-music-with-recurrent-neural-networks/)

### Natural Language Processing (NLP)

- [Deep Learning, NLP, and Representations](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [NLP's ImageNet moment has arrived](http://ruder.io/nlp-imagenet/)
- [CS224n: Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/)
  - https://www.youtube.com/watch?v=OQQ-W_63UgQ&feature=youtu.be
- [Archived: CS224n: Natural Language Processing with Deep Learning (2016-2017)](http://web.stanford.edu/class/cs224n/archive/WWW_1617/index.html)
- [Neural Approaches to Conversational AI](https://arxiv.org/abs/1809.08267)
- [A Review of the Neural History of Natural Language Processing](http://blog.aylien.com/a-review-of-the-recent-history-of-natural-language-processing/)

### Variational autoencoders (VAEs)

### Generative Adversarial Networks (GANs)

- [Ian Goodfellow: Generative Adversarial Networks (NIPS 2016 tutorial)](https://www.youtube.com/watch?v=HGYYEUSm-0Q)
- [Introduction to GANs, NIPS 2016 | Ian Goodfellow, OpenAI](https://www.youtube.com/watch?v=9JpdAg6uMXs)
- [Teaching Machines to Draw](https://tools.google.com/seedbank/seed/5729313835974656)

### Deep Reinforcement Learning

- Deep Q-network (DQN)
- [Human-level control through deep reinforcement learning](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf)

### Bayesian Deep Learning

### Hinton’s Capsule Networks

- [Understanding Hinton’s Capsule Networks](https://medium.com/ai%C2%B3-theory-practice-business/understanding-hintons-capsule-networks-part-i-intuition-b4b559d1159b)

### Popular Model Architectures (pretrained)

- [Neural Network Architectures](https://towardsdatascience.com/neural-network-architectures-156e5bad51ba)
- [Key Deep Learning Architectures for Visual Object Recognition](https://github.com/pechyonkin/key-dl-architectures)
- LeNet (1998)
- AlexNet (2012)
- ZFNet (2013)
- GoogLeNet (2014)
- Inception (2014)
- VGG (2014)
  - VGG-16
    - https://www.kaggle.com/keras/vgg16
  - VGG-19
- InceptionV2, InceptionV3 (2015)
- ResNet (2015)
  - http://torch.ch/blog/2016/02/04/resnets.html
  - https://arxiv.org/pdf/1512.03385.pdf
  - [Decoding the ResNet architecture](http://teleported.in/posts/decoding-resnet-architecture/)
  - ResNet-18
  - ResNet-34
    - [Deep Residual Learning for Image Recognition](https://www.kaggle.com/pytorch/resnet34/home)
  - ResNet-50
    - [ResNet-50 Pre-trained Model for Keras](https://www.kaggle.com/keras/resnet50)
  - ResNet-152
  - ResNet-200
  - [ResNeXt-50](https://github.com/facebookresearch/ResNeXt)
- InceptionV4 (2016)
- DenseNet (2016)
- Xception (2016)
- MobileNet (2017)
- NASNet (2017)
- SE-ResNet (2017)
- MobileNetV2 (2018)
- Others
  - WavsNets
    - [Sample Efficient Adaptive Text-to-Speech](https://arxiv.org/abs/1809.10460)
      - [Example imitated utterances for each approach](https://sample-efficient-adaptive-tts.github.io/demo/)
  - SqueezeNet
  - GoogLeNet

## Features Engineering

- [Structured and times series data](https://www.youtube.com/watch?v=gbceqO8PpBg&feature=youtu.be) between 25:10 and ??
- [Structured Deep Learning](https://towardsdatascience.com/structured-deep-learning-b8ca4138b848), with embeddings

## Data Augmentation Approaches

- Normalize
- Scale
- CenterCrop
- Pad
- RandomCrop
- RandomFlip

## Ensemble Methods

## Kaggle

- [Dog Breed Identification](https://www.kaggle.com/c/dog-breed-identification)
- [Planet: Understanding the Amazon from Space](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space)
- [Corporación Favorita Grocery Sales Forecasting](https://www.kaggle.com/c/favorita-grocery-sales-forecasting)
- [Rossmann Store Sales](https://www.kaggle.com/c/rossmann-store-sales)
- [Plant Seedlings Classification](https://www.kaggle.com/c/plant-seedlings-classification/leaderboard)
- [Jeremy Howard](https://www.kaggle.com/jhoward)
- [Rachael Tatman](https://www.kaggle.com/rtatman/kernels)

## Fun Projects

- [PaintsTransfer-Euclid](https://github.com/lllyasviel/style2paints)
- [ML4A](https://github.com/ml4a/ml4a-guides)
- [Collection of Interactive Machine Learning Examples](https://tools.google.com/seedbank/)
  - Neural Style Transfer with tf.keras, Variational auto-encoder for music, Neural Translation with Attention.
- [Neural Style Transfer: Creating Art with Deep Learning using tf.keras and eager execution](https://medium.com/tensorflow/neural-style-transfer-creating-art-with-deep-learning-using-tf-keras-and-eager-execution-7d541ac31398)
- [Tinker With a Neural Network Right Here in Your Browser](http://playground.tensorflow.org)
- [The Sound of Pixels](http://sound-of-pixels.csail.mit.edu/)

## Popular datasets

- ImageNet
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

### Virtualenv

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
- [Learn X in Y minutes (Where X=python3) — Louie Dinh](https://www.kaggle.com/keras/vgg16)

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

### Google Colab

- [Colab: An easy way to learn and use TensorFlow](https://medium.com/tensorflow/colab-an-easy-way-to-learn-and-use-tensorflow-d74d1686e309)

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
- [PyTorch Tutorial](https://pytorch.org/tutorials/intrewq      termediate/seq2seq_translation_tutorial.html)
- [PyTorch Tutorial](http://web.cs.ucdavis.edu/~yjlee/teaching/ecs289g-winter2018/Pytorch_Tutorial.pdf)
- [PyTorch Tutorial](https://github.com/yunjey/pytorch-tutorial/blob/master/README.md)
- [Source code](https://github.com/RedditSota/state-of-the-art-result-for-machine-learning-problems)
- https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html
- [jcjohnson/pytorch_finetune.py](https://gist.github.com/jcjohnson/6e41e8512c17eae5da50aebef3378a4c)
- [pytorch-tutorial](https://github.com/yunjey/pytorch-tutorial). This repository provides tutorial code for deep learning researchers to learn PyTorch.
- [Practical PyTorch](https://github.com/spro/practical-pytorch)
- [PyTorch Tutorial for Deep Learning Researchers](https://github.com/yunjey/pytorch-tutorial)
- [How to code The Transformer in Pytorch](https://towardsdatascience.com/how-to-code-the-transformer-in-pytorch-24db27c8f9ec)

Pour installer PyTorch, faire ```conda install pytorch torchvision -c pytorch```.

### fastai

- [docs](http://docs.fast.ai/)

### scikit-learn

### TensorFlow

- [Get Started with TensorFlow](https://www.tensorflow.org/tutorials/)
- [TensorFlow in Anaconda](https://www.anaconda.com/blog/developer-blog/tensorflow-in-anaconda/)
- https://tf.wiki/en/preface.html et https://github.com/snowkylin/TensorFlow-cn
- [A Concise Handbook of TensorFlow](https://tf.wiki/)
- [Train your first neural network: basic classification](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/keras/basic_classification.ipynb#scrollTo=jYysdyb-CaWM)

### TensorboardX

### MXNet

### Keras

### AutoML

- [Cloud AutoML](https://cloud.google.com/automl/)

### AutoKeras

- [AutoKeras](https://autokeras.com/)
- [AutoKeras: The Killer of Google’s AutoML](https://towardsdatascience.com/autokeras-the-killer-of-googles-automl-9e84c552a319)

### Open Neural Network Exchange (ONNX)

An open source format to move models between tools.

- https://onnx.ai/

## Environment Development

### Jupyter

- [Jupyter Notebook Commands & Shortcuts](https://github.com/reshamas/fastai_deeplearn_part1/blob/master/tools/jupyter_notebook.md)
- [Jupyter Python Notebook Keyboard Shortcuts and Text Snippets for Beginners](http://maxmelnick.com/2016/04/19/python-beginner-tips-and-tricks.html)
- [A gallery of interesting Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)

### JupyterLab

- [Installation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)

Ce [livre](https://mlbook.explained.ai/prep.html#sec:3.2) explique les instructions pour installer JupyterLab.

```
conda install -c conda-forge jupyterlab
jupyter serverextension enable --py jupyterlab --sys-prefix

cd /Users/YOURID 
mkdir mlbook
cd mlbook
mkdir src
cd src
mkdir data

jupyter lab
```

### PyCharm

- [Download](https://www.jetbrains.com/pycharm/)

### VS Code

- [Use Visual Studio Code To Develop Python Programs](https://medium.com/the-artificial-impostor/use-visual-studio-code-to-develop-python-programs-717d849c7106)
- [Get Productive with Python in Visual Studio Code](https://www.youtube.com/watch?time_continue=5&v=6YLMWU-5H9o)

## 90. Cloud and buidling DL Computer

### 90.1. AWS

- See [video](http://course.fast.ai/lessons/lesson2.html) between 1:59:17 to 2:07:29.
- [AWS fastami GPU Image Setup](https://github.com/reshamas/fastai_deeplearn_part1/blob/master/tools/aws_ami_gpu_setup.md)
- [How to use AWS for your Deep Learning models](https://medium.com/@sanwal5961/how-to-use-aws-for-your-deep-learning-models-b721fdedcb53)
- [Jupyter Notebooks on AWS EC2 in 15 (mostly easy) steps](https://medium.com/@alexjsanchez/python-3-notebooks-on-aws-ec2-in-15-mostly-easy-steps-2ec5e662c6c6)
- [Hedge Your Own Funds: Run Monte Carlo Simulations on Amazon EC2 Spot Fleets: Lab Guide](https://github.com/aws-samples/ec2-spot-montecarlo-workshop)
- [Howto: Automated AWS spot instance provisioning with persisting of data](https://medium.com/@radekosmulski/automated-aws-spot-instance-provisioning-with-persisting-of-data-ce2b32bdc102)
- [Analyzing 4 Million Yelp Reviews with Python on AWS](http://www.developintelligence.com/blog/2017/02/analyzing-4-million-yelp-reviews-python-aws-ec2-instance/)
- [(guide) Install Fastai in any AWS region](https://medium.com/@pierre_guillou/guide-install-fastai-in-any-aws-region-8f4fe29132e5)

### 90.2. Google Cloud Platform

### 90.3. Building Deep Learning Computer

- [Why building your own Deep Learning Computer is 10x cheaper than AWS](https://medium.com/the-mission/why-building-your-own-deep-learning-computer-is-10x-cheaper-than-aws-b1c91b55ce8c)
- [RTX 2080 Ti Deep Learning Benchmarks](https://lambdalabs.com/blog/2080-ti-deep-learning-benchmarks/)

[Home](README.md) | [Accueil](README.md)
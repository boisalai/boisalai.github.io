import os
"""
http://www.scipy-lectures.org/_downloads/ScipyLectures-simple.pdf
https://pypi.org/

The Best of the Best Practices (BOBP) Guide for Python
https://gist.github.com/sloria/7001839
"""
import sys

import matplotlib.pyplot as plt
import matplotlib as mpl
import pandas as pd
import numpy as np
import scipy as sp


def test1():
    msg = "Hello World"
    print(msg)
    print(os.listdir('.'))


def test2():
    print(sys.platform)


def complex(real=0.0, imag=0.0):
    """Form a complex number.

    Keyword arguments:
    real -- the real part (default 0.0)
    imag -- the imaginary part (default 0.0)
    """
    if imag == 0.0 and real == 0.0:
        return complex_zero
    return 0


def filter_name(name):
    try:
        name = name.encode('ascii')
    except UnicodeError as e:
        if name == 'Gaël':
            print('OK, Gaël')
        else:
            raise e
    return name


class Student(object):
    def __init__(self, name):
        self.name = name

        def set_age(self, age):
            self.age = age
        
        def set_major(self, major):
            self.major = major


def test3():
    anna = Student('anna')
    anna.set_age(21)
    anna.set_major('physics')


def test4():
    image = np.random.rand(30, 30)
    plt.imshow(image, cmap=plt.cm.hot)
    plt.colorbar()


def test5():
    x = np.linspace(0, 2, 200)
    plt.plot(x, np.sin(x))
    plt.savefig("myfig.png")
    print(os.getcwd())


def test6():
    print("Path at terminal when executing this file")
    print(os.getcwd() + "\n")

    print("This file path, relative to os.getcwd()")
    print(__file__ + "\n")

    print("This file full path (following symlinks)")
    full_path = os.path.realpath(__file__)
    print(full_path + "\n")

    print("This file directory and name")
    path, filename = os.path.split(full_path)
    print(path + ' --> ' + filename + "\n")

    print("This file directory only")
    print(os.path.dirname(full_path))


def test7():
    a = np.array([[4, 3, 5], [1, 2, 1]])
    print(a)
    b = np.sort(a, axis=1)
    print(b)

     
if __name__ == '__main__':
    # print_a() is only executed when the module is run directly.
    test7()

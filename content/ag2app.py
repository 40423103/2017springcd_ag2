import sys

sys.path.append("./../40423103/data/add")
import add

sum = add.add(1,2)

print("a+b=",sum)

sys.path.append("./../40423149/data/minus")
import minus

sum = minus.minus(1,2)

print("a-b=",sum)

sys.path.append("./../40423104/data/times")
import times

sum = times.times(1,2)

print("a*b=",sum)

sys.path.append("./../40423101/data/divide")
import divide

sum = divide.divide(1,2)

print("a/b=",sum)
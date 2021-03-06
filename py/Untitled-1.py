print("Hello, World!")

if 5 > 2:
    print("Five is greater than two!")
#if you skip indentation, the code wont work. Give spaces

x = 5
y = "Hello"

print(x)
print(y)

"""
this is a comment
"""

x = 4 #x is of type int 
x = "Sally" #x is not of type str
print(x)

x = str(3)  #x will be '3'
y = int(3)  #x will be 3
z = float(3) #x will be 3.0

print(x)
print(y)
print(z)

x = 5
y = "John"
print(type(x))
print(type(y))

a = 4
A = "Mel"
print(a)
print(A)

x, y, z = "Orange", "Banana", "Apple"
print(x)
print(y)
print(z)


x = y = z = "Cherry"
print(x)
print(y)
print(z)

fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

x = "awesome"
print("Python is " + x)

x = "Python is "
y = "awesome"
z = x + y
print(z)

x = 5 
y = 10
print(x + y)

x = "great"
def myfunc():
    print("Python is " + x)
myfunc()

x = "awesome"
def myfunc():
    x = "fantastic"
    print("Python is " + x)
myfunc()
print("Python is " + x)

def myfunc():
    global x
    x = "ok"
myfunc()
print("python is " + x)

x = "meh"
def myfunc():
    global x
    x = "maybe ok"
myfunc()
print("Python is " + x)
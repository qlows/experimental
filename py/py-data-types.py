"""
Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
"""

x = 5 
print(type(x))


#str
x = "Hello"

#display x:
print(x)

#display the data type of x:
print(type(x))


#int
x = 20
print(x)
print(type(x))




#float
x = 20.3
print(x)
print(type(x))


#complex
x = 1j
print(x)
print(type(x))


#class list
x = ["apple", "banana"]
print(type(x))


#tuple
x = ("apple", "banana")
print(type(x))



#range
x = range(6,5)
print(type(x))



#dict
x = {"name" : "John", "age" : "35"}
print(x)
print(type(x))


#set
x = {"apple", "banana"}
print(type(x))


#frozenset
x = frozenset({"apple", "banana"})
print(x)
print(type(x))



#bool
x = True
print(type(x))


#bytes
x = b"hello"
print(x)
print(type(x))



#bytearray
x = bytearray(5)
print(x)
print(type(x))




#memoryview
x = memoryview(bytes(5))
print(x)
print(type(x))



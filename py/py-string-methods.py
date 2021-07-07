#capitalize method (upper case the first letter)
txt = "hello, and welcome to my world."
x = txt.capitalize()
print(x)

#casefold method (make string lower case)
txt = "Hello, And Welcome To My World"
x = txt.casefold()
print(x)

#center method (will center the align the string, using a specified character)
txt = "banana"
x = txt.center(20)
print(x)

txt = "banana"
x = txt.center(20, "A")
print(x)

#count method (returns the number of time a specified value appears in the string)
txt = "I love apples, apples are my favourite fruit"
x = txt.count("apple")
print(x)

txt = "I love apples, apples are my favourite fruit"
x = txt.count("apple", 10, 24) #search from position
print(x)

#encode method (if no encode is specified, UTF-8 will be used)
txt = "My name is Ståle"
x = txt.encode()
print(x)

#endswith method
txt = "Hello, Welcome to my world."
x = txt.endswith(".")
print(x)

#expandtabs method (sets tab sizes to whitespaces)
txt = "H\te\tl\tl\to"
x = txt.expandtabs(2)
print(x)

#find method
txt = "Hello, welcome to my world."
x = txt.find("welcome")
print(x)

#format method (converts to two-decimal format)
txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49))


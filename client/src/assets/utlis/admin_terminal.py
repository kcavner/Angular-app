cases = ["admin","user"]

def input_func():
    input_str = input("Are you an admin or user?")
    if input_str == cases[0]:
        print("hello admin")
    if input_str == cases[1]:
        print("hello user")

input_func()
    
    
    
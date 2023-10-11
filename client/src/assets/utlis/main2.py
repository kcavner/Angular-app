import random

v1 = []
v2 = []
map = []

def randVex():
    vexArr = []
    for _ in range(3):
        vexArr.append(random.randint(0, 20))
    return vexArr

def fill():
    for _ in range(8000):
        num = randVex()
        cloneCheck(num)
        v1.clear()

def cloneCheck(vex):
    for i in range(len(map)):
        if map[i] == vex:
            return
    map.append(list(vex))  # Append a copy of vex to map if it's not found

# fill()
# print(len(map) /8000 * 100)

print(randVex())
    
# randVex(v1);
# randVex(v2);
# print(v1,v2)
# result = magnitude(v1, v2)
# formatted_result = "{:.3f}".format(result)
# print(formatted_result)

# def magnitude(vex1,vex2):
#     dx = vex1[0] - vex2[0];
#     dy = vex1[1] - vex2[1];
#     dz = vex1[2] - vex2[2];
#     vector = [dx,dy,dz];
#     magnitude = math.sqrt(dx**2 + dy**2 + dz**2);
#     return magnitude

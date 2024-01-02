line = 5
for i in range(0,line):
    for j in range(line-1-i, 0, -1):
        print(" ", end="")
    for star in range(0, 2*i+1):
        print("*", end="")
    print("")
    if i == line-1:
        for j in range(line-2, 0, -1):
            print(" ", end="")    
        print("|_|")


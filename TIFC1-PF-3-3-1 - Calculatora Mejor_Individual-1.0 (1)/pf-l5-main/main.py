# main.py
def addmultiplenumbers(numbers):
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    result = 1
    for num in numbers:
        result *= num
    return result

def isiteven(num):
    return (isinstance(num, int) or num.is_integer()) and num % 2 == 0

def isitaninteger(num):
    return isinstance(num, int) or num.is_integer()

def main():
    print("¡Hola aprendices!")

if __name__ == "__main__":
    main()

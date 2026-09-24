# calculadora_basica.py

def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    if b == 0:
        return "Error: División entre cero no permitida."
    return a / b

def modulo(a, b):
    if b == 0:
        return "Error: Módulo con divisor cero no permitido."
    return a % b

def suma_tres(a, b, c):
    return a + b + c

def operaciones_libres(expresion):
    try:
        return eval(expresion)
    except Exception as e:
        return f"Error en la expresión: {e}"

def mostrar_menu():
    print("\n=== Calculadora ===")
    print("1. Sumar dos números")
    print("2. Restar dos números")
    print("3. Multiplicar dos números")
    print("4. Dividir dos números")
    print("5. Módulo de dos números")
    print("6. Sumar tres números")
    print("7. Expresión libre (ej. 2+4-3, 4*5+1/3)")
    print("8. Salir")

def main():
    while True:
        mostrar_menu()
        opcion = input("Selecciona una opción: ").strip()

        if opcion == "1":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            print("Resultado:", suma(a, b))

        elif opcion == "2":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            print("Resultado:", resta(a, b))

        elif opcion == "3":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            print("Resultado:", multiplicacion(a, b))

        elif opcion == "4":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            print("Resultado:", division(a, b))

        elif opcion == "5":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            print("Resultado:", modulo(a, b))

        elif opcion == "6":
            a = float(input("Primer número: "))
            b = float(input("Segundo número: "))
            c = float(input("Tercer número: "))
            print("Resultado:", suma_tres(a, b, c))

        elif opcion == "7":
            expresion = input("Escribe tu expresión (ej. 2+4-3): ")
            print("Resultado:", operaciones_libres(expresion))

        elif opcion == "8":
            print("Saliendo... ¡Hasta luego!")
            break

        else:
            print("Opción inválida. Intenta de nuevo.")

if __name__ == "__main__":
    main()

import math

def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        raise ZeroDivisionError("No se puede dividir entre 0.")
    return a / b

def potencia(a, b):
    return a ** b

def raiz(a):
    if a < 0:
        raise ValueError("No se puede calcular la raíz cuadrada de un número negativo.")
    return math.sqrt(a)

def pedir_numero(prompt="Ingresa un número: "):
    while True:
        try:
            return float(input(prompt).strip())
        except ValueError:
            print("Entrada inválida. Ingresa un número válido.")

def pedir_dos_numeros():
    a = pedir_numero("Primer número: ")
    b = pedir_numero("Segundo número: ")
    return a, b

def mostrar_menu():
    print("\n" + "="*40)
    print("Calculadora - Elige una opción")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Potencia (a^b)")
    print("6. Raíz cuadrada")
    print("7. Salir")
    print("="*40)

def ejecutar_opcion(opcion):
    match opcion:
        case "1":
            a, b = pedir_dos_numeros()
            print(f"Resultado: {sumar(a, b)}")
        case "2":
            a, b = pedir_dos_numeros()
            print(f"Resultado: {restar(a, b)}")
        case "3":
            a, b = pedir_dos_numeros()
            print(f"Resultado: {multiplicar(a, b)}")
        case "4":
            a, b = pedir_dos_numeros()
            try:
                print(f"Resultado: {dividir(a, b)}")
            except ZeroDivisionError as e:
                print("Error:", e)
        case "5":
            a, b = pedir_dos_numeros()
            print(f"Resultado: {potencia(a, b)}")
        case "6":
            a = pedir_numero("Número para raíz cuadrada: ")
            try:
                print(f"Resultado: {raiz(a)}")
            except ValueError as e:
                print("Error:", e)
        case "7":
            print("Saliendo. ¡Hasta luego!")
            return False
        case _:
            print("Opción no válida. Elige un número del 1 al 7.")
    return True

def main():
    while True:
        mostrar_menu()
        opcion = input("Selecciona una opción: ").strip()
        continuar = ejecutar_opcion(opcion)
        if not continuar:
            break

if __name__ == "__main__":
    main()

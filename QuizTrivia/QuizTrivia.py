import requests
import random

"""
    Obtiene `num` preguntas desde la API de OpenTDB y regresa el JSON.
    Debe llamarse exactamente trivia_fetch y recibir el parámetro num.
    """
def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"
    response = requests.get(url)
    trivia = response.json()
    return trivia

"""
    Obtiene `num` preguntas desde la API de OpenTDB y regresa el JSON.
    Debe llamarse exactamente trivia_fetch y recibir el parámetro num.
    """
def _decode_entities(text):
    if not isinstance(text, str):
        return text
    replacements = {
        "&quot;": '"',
        "&#039;": "'",
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&eacute;": "é",
        "&aacute;": "á",
        "&iacute;": "í",
        "&oacute;": "ó",
        "&uacute;": "ú",
        "&ntilde;": "ñ"
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text

"""
    Pide al usuario que elija una opción entre 1 y num_options.
    Maneja entradas inválidas y permite salir con 'q'.
    """
def _get_user_choice(num_options):
    while True:
        choice = input(f"Tu respuesta (1-{num_options}, o 'q' para salir): ").strip()
        if choice.lower() == 'q':
            return None
        if not choice.isdigit():
            print("Por favor ingresa un número válido.")
            continue
        n = int(choice)
        if 1 <= n <= num_options:
            return n - 1
        print(f"Ingresa un número entre 1 y {num_options}.")

def main():
    try:
        cantidad = int(input("¿Cuántas preguntas quieres? ").strip())
        if cantidad <= 0:
            print("Ingresa un número mayor que 0.")
            return
    except ValueError:
        print("Entrada inválida. Ingresa un número entero.")
        return

    try:
        trivia = trivia_fetch(cantidad)
    except Exception as e:
        print("Error al obtener preguntas:", e)
        return

    results = trivia.get("results", [])
    if not results:
        print("No se obtuvieron preguntas. Intenta de nuevo más tarde.")
        return

    score = 0
    total = len(results)

    for idx, item in enumerate(results, start=1):
        question = _decode_entities(item.get("question", ""))
        correct = _decode_entities(item.get("correct_answer", ""))
        incorrect = [ _decode_entities(x) for x in item.get("incorrect_answers", []) ]

        # Preparar opciones y mezclarlas
        options = incorrect + [correct]
        random.shuffle(options)
        correct_index = options.index(correct)

        print("\n" + "-"*60)
        print(f"Pregunta {idx}/{total}:")
        print(question)
        for i, opt in enumerate(options, start=1):
            print(f"  {i}. {opt}")

        user_choice = _get_user_choice(len(options))
        if user_choice is None:
            print("Has salido del quiz.")
            break

        if user_choice == correct_index:
            print("Correcto")
            score += 1
        else:
            print(f"Incorrecto. La respuesta correcta era: {correct}")

    print("\n" + "="*60)
    print(f"Puntaje final: {score} de {idx if user_choice is None else total}")
    print("Gracias por jugar.")

if __name__ == "__main__":
    main()

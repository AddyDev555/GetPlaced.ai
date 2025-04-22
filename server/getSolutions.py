import json
import google.generativeai as genai

# 🔐 Configure your Gemini API key
genai.configure(api_key="AIzaSyCk03OuBh1W_-IKvMfWD54UByiXAmYexYw")

model = genai.GenerativeModel("gemini-1.5-flash")

def get_gemini_solution(question_data):
    question = question_data["Question"]
    options = [question_data[key] for key in ["Option A", "Option B", "Option C", "Option D", "Option E"] if question_data.get(key)]
    answer = question_data["Answer"].upper()

    prompt = (
        f"You're an aptitude tutor. Provide me the solution of the following question:\n\n"
        f"Question: {question}\n"
        f"Options:\n"
    )
    for idx, opt in zip(["A", "B", "C", "D", "E"], options):
        prompt += f"{idx}. {opt}\n"
    prompt += f"\nCorrect Answer: Option {answer}\n"

    response = model.generate_content(prompt)
    return response.text.strip()

def solve_and_save_realtime_with_gemini(json_file_path):
    with open(json_file_path, "r") as file:
        questions = json.load(file)

    for i, q in enumerate(questions):
        if "Solution" not in q or not q["Solution"]:  # Avoid redoing
            print(f"Solving Question {i+1} with Gemini...")
            try:
                solution = get_gemini_solution(q)
                questions[i]["Solution"] = solution
                # Save immediately
                with open(json_file_path, "w") as file:
                    json.dump(questions, file, indent=4)
                print("✔️ Saved.\n")
            except Exception as e:
                print(f"❌ Error: {e}")

# ✅ Run with your file path
solve_and_save_realtime_with_gemini("datasets/IndiaBix_Arithmetic_Aptitude.json")
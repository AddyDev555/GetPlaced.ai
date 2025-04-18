import json
import os
import google.generativeai as genai

# Configure Gemini Flash model
genai.configure(api_key="AIzaSyCk03OuBh1W_-IKvMfWD54UByiXAmYexYw")
model = genai.GenerativeModel("models/gemini-1.5-flash-latest")

# Load questions
file_path = "datasets\IndiaBix_Arithmetic_Aptitude.json"
with open(file_path, "r", encoding="utf-8") as f:
    questions = json.load(f)

# Loop through questions
for idx, q in enumerate(questions):
    # Skip if solution already exists and is not empty or an error
    if q.get("Solution") and q["Solution"] != "Error generating solution.":
        continue

    question_text = q.get("Question", "")
    options = "\n".join([
        f"A. {q.get('Option A', '')}",
        f"B. {q.get('Option B', '')}",
        f"C. {q.get('Option C', '')}",
        f"D. {q.get('Option D', '')}",
        f"E. {q.get('Option E', '')}" if q.get("Option E") else ""
    ])

    prompt = f"""Solve the following aptitude question and explain briefly:

{question_text}
{options}

Give the correct answer and explanation in one paragraph."""

    try:
        response = model.generate_content(prompt)
        solution = response.text.strip()
        questions[idx]["Solution"] = solution
        print(f"✅ Solved: {question_text[:50]}...")

        # Save immediately after solution is added
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(questions, f, indent=4)

    except Exception as e:
        print(f"❌ Error with question: {question_text[:50]}... -> {e}")
        questions[idx]["Solution"] = "Error generating solution."

print("✅ Completed all questions.")




import json

file_path = "datasets/IndiaBix_Arithmetic_Aptitude.json"  # Update path if needed

with open(file_path, "r", encoding="utf-8") as f:
    questions = json.load(f)

solved = []
unsolved = []

for q in questions:
    solution = q.get("Solution", "").strip()
    if solution and solution.lower() != "error generating solution.":
        solved.append(q["Question"])
    else:
        unsolved.append(q["Question"])

print(f"✅ Solved: {len(solved)}")
print(f"❌ Unsolved or errored: {len(unsolved)}")
print(f"📚 Total: {len(questions)}\n")

# # Optional: Print the actual unsolved questions
# print("🔍 Unsolved Questions Preview:\n")
# for i, q_text in enumerate(unsolved, 1):
#     print(f"{i}. {q_text}")

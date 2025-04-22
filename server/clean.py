import json
import re

def clean_solution(entry):
    solution = entry.get("Solution", "")
    
    # Remove options, subtitles, and extra explanations if present
    # Keep only the main steps and final answer
    # Simplify and reformat Gemini-style
    lines = solution.split("\n")
    cleaned_lines = []

    for line in lines:
        # Skip options and extra headings
        if re.match(r"Option [A-D]:", line) or "Answer:" in line or "Option" in line:
            continue
        if line.strip().startswith("*") or line.strip().startswith("-"):
            line = line.replace("*", "").replace("-", "").strip()
        cleaned_lines.append(line.strip())

    # Remove empty lines
    cleaned_lines = [line for line in cleaned_lines if line]

    # Extract final year using regex (if available)
    final_year = re.search(r"t\s*=\s*2001\s*\+\s*(\d+)", solution)
    if final_year:
        year = 2001 + int(final_year.group(1))
        final_answer = f"\n\n🟩 Final Answer: {year}"
        cleaned_lines.append(final_answer)

    return "\n".join(cleaned_lines)

# Example usage
with open("datasets/IndiaBix_Arithmetic_Aptitude.json", "r") as f:
    data = json.load(f)

# Process each question
for item in data:
    item["Solution"] = clean_solution(item)

# Save cleaned data
with open("datasets/IndiaBix_Arithmetic_Aptitude.json", "w") as f:
    json.dump(data, f, indent=2)

print("✔️ Cleaned solutions saved to cleaned_output.json")

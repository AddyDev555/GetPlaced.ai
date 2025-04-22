import json

# Load your JSON data from a file or string
with open('datasets/IndiaBix_Arithmetic_Aptitude.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Remove the "Solution" key from each object if it exists
for item in data:
    item.pop("Solution", None)  # Safely removes the key if present

# Optionally, save the cleaned data back to a file
with open('IndiaBix_Arithmetic_Aptitude.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

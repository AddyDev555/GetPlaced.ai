import json

# Path to your file
file_path = r'C:\Users\OJAS\Desktop\Projects\NextJs Projects\GetPlaced.ai\server\datasets\LearnTheta.json'

# Load the JSON data from the file
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Map option names to letters
option_keys = {
    "Option A": "a",
    "Option B": "b",
    "Option C": "c",
    "Option D": "d"
}

# Update the 'Answer' field
for item in data:
    correct_answer_value = item["Answer"]
    for option_key, option_letter in option_keys.items():
        if item.get(option_key) == correct_answer_value:
            item["Answer"] = option_letter
            break

# Save the updated data back into the file
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("File updated successfully!")

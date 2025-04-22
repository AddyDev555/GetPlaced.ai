import json
import re

def clean_invalid_json(file_path, cleaned_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        raw_data = file.read()

    # Replace NaN with null
    cleaned_data = re.sub(r'\bNaN\b', 'null', raw_data)

    # Save cleaned file
    with open(cleaned_path, 'w', encoding='utf-8') as cleaned_file:
        cleaned_file.write(cleaned_data)

    print(f"✅ Cleaned file saved as: {cleaned_path}")

# Example usage:
clean_invalid_json('datasets/Arithmetic.json', 'datasets/cleaned.json')

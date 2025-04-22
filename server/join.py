import json

def join_json_files(file1_path, file2_path, output_path):
    # Load data from both files
    with open(file1_path, 'r', encoding='utf-8') as f1:
        data1 = json.load(f1)

    with open(file2_path, 'r', encoding='utf-8') as f2:
        data2 = json.load(f2)

    # Combine both lists
    combined_data = data1 + data2

    # Write to output file
    with open(output_path, 'w', encoding='utf-8') as out:
        json.dump(combined_data, out, indent=4, ensure_ascii=False)

    print(f"✅ Files merged and saved to '{output_path}'.")

# Example usage:
join_json_files('datasets/IndiaBix_Arithmetic_Aptitude.json', 'datasets/PP.json', 'datasets/Arithmetic.json')

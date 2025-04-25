import os
import csv
import json

csv_folder = 'server\datasets\Convert' 
output_json_file = 'output.json'

all_data = []

for filename in os.listdir(csv_folder):
    if filename.endswith('.csv'):
        topic = os.path.splitext(filename)[0] 
        topic = topic.split('_')[1]
        file_path = os.path.join(csv_folder, filename)

        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                row['Topic'] = topic
                all_data.append(row)

with open(output_json_file, 'w', encoding='utf-8') as json_file:
    json.dump(all_data, json_file, ensure_ascii=False, indent=2)

print(f"JSON file created with {len(all_data)} entries.")

import pandas as pd

def excel_to_json(excel_file_path, json_file_path):
    df = pd.read_excel(excel_file_path)
    df.to_json(json_file_path, orient='records', indent=2)
    print(f"✅ Successfully converted '{excel_file_path}' to '{json_file_path}'.")

# Example usage
excel_to_json('datasets/placementpreperation_Questions.xlsx', 'datasets/data.json')

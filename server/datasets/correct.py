# import json


# topic_subtopic_map = {
#     "Profit, Loss and Partnership": "Understand profit/loss calculations and partnership ratios.",
#     "Blood Relations": "Identify relationships based on family tree logic.",
#     "Direction Sense": "Track positions and directions based on movement instructions.",
#     "Averages, Mixture and Alligations": "Solve problems on averages and mixtures using alligation rule.",
#     "Calendar and Clocks": "Calculate days, dates, and clock angles.",
#     "Speed, Distance and Time": "Solve problems on movement and relative speeds.",
#     "Permutation Combination": "Count arrangements and selections using permutations and combinations.",
#     "Coding Decoding": "Interpret patterns in letter/number codes and decode messages.",
#     "AlphaNumeric Series": "Recognize patterns in mixed letter-number sequences.",
#     "Seating Arrangements": "Determine positions based on circular/linear seating logic.",
#     "Mensuration": "Calculate areas, volumes, and surface areas of geometric figures.",
#     "Number System": "Understand divisibility, remainders, and number properties.",
#     "Algebra": "Solve equations, expressions, and algebraic identities.",
#     "Time and Work": "Compute work efficiency, time taken, and combined efforts."
# }

# topic_subtopic_map = {
#     "Clock": "Solve problems involving angles and positions of clock hands.",
#     "Decimal Fraction": "Work with decimal-based numbers and their arithmetic operations.",
#     "Probability": "Calculate the likelihood of events occurring using basic probability.",
#     "Area": "Find areas of 2D shapes like triangles, circles, and quadrilaterals.",
#     "Calendar": "Determine days, dates, and calendar-based patterns.",
#     "Percentage": "Convert and calculate values using percentage increases and decreases.",
#     "H.C.F and L.C.M": "Find highest common factor and least common multiple of numbers.",
#     "Simple Interest": "Calculate interest earned over time using the simple interest formula.",
#     "Ratio and Proportion": "Solve problems involving comparative quantities and scaling.",
#     "Odd Man Out and Series": "Identify the element that breaks the pattern in a sequence.",
#     "Problems on Ages": "Use logical equations to determine present, past, or future ages.",
#     "Compound Interest": "Calculate interest earned on interest over time using compounding.",
#     "Problems On Trains": "Calculate train speeds, times, and distances including platform/passenger problems.",
#     "Time and Work": "Determine work done by individuals or groups over time.",
#     "Inequalities": "Solve and interpret mathematical inequalities involving variables.",
#     "Average": "Calculate mean values and apply average-based logic.",
#     "Boats and Streams": "Solve upstream and downstream speed problems.",
#     "Functions": "Understand mappings and relationships between input and output values.",
#     "Profit and Loss": "Compute profit or loss from selling items at given prices.",
#     "Races and Games": "Analyze time and distance in competitive scenarios.",
#     "Time And Distance": "Solve problems on motion, speed, and time relationships.",
#     "Numbers": "Understand number theory basics including types and properties of numbers."
# }


# file_path = r'C:\Users\OJAS\Desktop\Projects\NextJs Projects\GetPlaced.ai\server\datasets\ambitionbox.json'

# with open(file_path, 'r', encoding='utf-8') as f:
#     data = json.load(f)


# # unique_topics = {item['Topic'] for item in data}
# # print(unique_topics)

# # for item in data:
# #     topic = item.get('Topic')
# #     if topic in topic_subtopic_map:
# #         item['Subtitle'] = topic_subtopic_map[topic]

# # with open(file_path, 'w', encoding='utf-8') as f:
# #     json.dump(data, f, ensure_ascii=False, indent=2)

# # print("Subtitles added successfully.")
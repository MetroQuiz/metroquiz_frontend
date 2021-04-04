import json
data = json.loads(open('map.json').read())

for stat in data.keys():
    all_n = []
    for s in data[stat]['neighbours']['change']:
         all_n.append({'to' : s, 'type' : 'change'})
    for s in data[stat]['neighbours']['ground_change']:
        all_n.append({'to' : s, 'type' : 'ground_change'})
    for s in data[stat]['neighbours']['span']:
        all_n.append({'to' : s, 'type' : 'span'})
    data[stat]['neighbours'] = all_n
print(data)

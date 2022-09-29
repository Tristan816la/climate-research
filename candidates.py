ERROR_FILE = "errors4.txt"
FILE = "initial4.csv"
CANDIDATE_FILE = "public_candidates.txt"

candidates = []

with open(FILE, 'r') as f:
    lines = f.readlines()
    for line in lines:
        number, _ = line.split(',"')
        candidates.append(number)

with open(ERROR_FILE, 'r') as f:
    lines = f.readlines()
    for line in lines:
        number = line.strip()
        candidates.append(number)

with open(CANDIDATE_FILE, 'w') as f:
    for i, candidate in enumerate(candidates):
        if i != len(candidates) - 1:
            f.write(candidate + ",")
        else:
            f.write(candidate)

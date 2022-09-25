FILE = "initial2.csv"
WRITE_FILE = "cleaned.csv"


with open(FILE, "r") as f, open(WRITE_FILE, "w") as w:
    lines = f.readlines()
    for l in lines:
        s = l.split(',"')
        if len(s) == 2:
            if s[0].isdigit():
                w.write(f'{s[0]},{s[1]}')

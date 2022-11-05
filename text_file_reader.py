reciept_text: str = "187475 jvouwphv 1084 794023753 hopg848h5g 8 5 nrj 8 123456789"
#"Target 10/10/2022 4:50 PM Expires 10/26/22 Clothing 071189724 HUVOE BNUOVEW NF $8.60 283745832 JVUEFHVI NF $4.90"

#Approach 1

DPCI_LENGTH: int = 9
dpci_list: list[int] = list()
"""
temp_str: str = ""
for character in reciept_text:   
    if ord(character) >= 48 and ord(character) <= 57:
        temp_str += character
        if len(temp_str) == DPCI_LENGTH:
            dpci_list.append(temp_str)
    else:
        temp_str = ""
print(dpci_list)
"""

#Approach 2
word_list: list[str] = list()
temp_str: str = ""
for character in reciept_text:
    if character == " ":
        word_list.append(temp_str)
        temp_str = ""
    else:
        temp_str += character
word_list.append(temp_str)
print(word_list)


for item in word_list:
    if len(item) == DPCI_LENGTH and item.isnumeric():
        dpci_list.append(item)

print(dpci_list)
#Then sort through word list to uncover DPCIs only using numerical only and 9 digit only filters



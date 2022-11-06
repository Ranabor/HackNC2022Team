from dpci_lookup import dpci_title_lookup

reciept_text: str = "7806387 74925479984747 9879475"
#"Target 10/10/2022 4:50 PM Expires 10/26/22 Clothing 071189724 HUVOE BNUOVEW NF $8.60 283745832 JVUEFHVI NF $4.90"

#Approach 1

DPCI_LENGTH: int = 9
#dpci_list: list[int] = list()

def dpci_code_reader(reciept_codes: str) -> list[str]:
    """This function will turn the reciept codes into the appropriate 9 digit DPCI codes that we need to identify products."""
    temp_str: str = ""
    dpci_list: list[int] = list()
    for character in reciept_codes:
        if character.isnumeric():
            temp_str += character
            if len(temp_str) == DPCI_LENGTH:
                dpci_list.append(temp_str)
                temp_str = ""
        else:
            temp_str = ""
    return dpci_list

def cost_reader(reciept_costs: str) -> list[str]:

    cost_list: list[str] = list()
    dollar_sign_detected = False
    decimal_detected = False
    count = 0
    temp_str: str = ""
    for character in reciept_costs:
        if count > 0:
            temp_str += character
            count -= 1
        elif character == "$":
            dollar_sign_detected = True
            decimal_detected = False
            cost_list.append(temp_str)
            temp_str = ""
        elif character == ".":
            temp_str += "."
            decimal_detected = True
            dollar_sign_detected = False
            count = 2
        elif dollar_sign_detected and character.isnumeric():
            temp_str += character
    cost_list.pop(0)
    cost_list.append(temp_str)
    return cost_list
    

def product_dictionary(reciept_codes: str, reciept_costs: str) -> dict[str : list[str]]:
    dpci_list: list[str] = dpci_code_reader(reciept_codes)
    costs_list: list[str] = cost_reader(reciept_costs)
    product_dict: dict[str : list[str]] = dict()
    for i in range(len(dpci_list)):
        product_dict[dpci_list[i]] = [dpci_title_lookup(dpci_list[i]), costs_list[i]]
    return product_dict

codes: str = "057101346086134358"
costs: str = "$1099.99$23.893"
print(product_dictionary(codes, costs))

        


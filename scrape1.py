# import requests
# from bs4 import BeautifulSoup
# import pandas as pd


# def titleAndPrice(url):
#     url = "https://www.amazon.com/GymCope-Anti-Tear-Cushioning-Non-Slip-Exercise/dp/B0921F1T2P/ref=sr_1_3_sspa?brr=1&pd_rd_r=4b40f0a8-f2d8-44dc-9a98-413c64d3fa34&pd_rd_w=P9ZJI&pd_rd_wg=RS7zW&pf_rd_p=9875e817-188b-48a2-986d-8146749644ac&pf_rd_r=AGWBT5KT04TYKGPZASKA&qid=1642452438&rd=1&rnid=3407731&s=sporting-goods&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVjhWTk0xQU5WWldPJmVuY3J5cHRlZElkPUEwODE0MzYwMTdMTDZSNDVST08yMiZlbmNyeXB0ZWRBZElkPUEwODQ4MDM0MlE4WEtVUjFKMUdLMiZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
#     headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0", "Accept-Encoding": "gzip, deflate",
#                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT": "1", "Connection": "close", "Upgrade-Insecure-Requests": "1"}
#     response = requests.get(url, headers=headers)
#     html = response.text
#     soup = BeautifulSoup(html, features="lxml")
#     title = soup.find("span", id="productTitle").text.strip()
#     whole_price = soup.find("span", class_="a-price-whole").text
#     fraction_price = soup.find("span", class_="a-price-fraction").text
#     final_price = float(whole_price + fraction_price)
#     return title, final_price


# print("titleAndPrice(url)")
# # df = pd.DataFrame([[title, final_price]],columns=['Title', 'Price'])
print("afciuefbdcf")
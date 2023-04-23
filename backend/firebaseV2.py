from firebase_config import db
from flask import Flask, jsonify, request
from firebase_admin import firestore
import json
# from flask_ngrok import run_with_ngrok

app = Flask(__name__)
# run_with_ngrok(app)

users = db.collection("users")
# number = "9350244300"


@app.route("/setNumber")
def setGlobalNumber():
    # global number
    number = request.args.get("number")
    # number = number[3:]
    print("User Number : " + str(number))
    return "DONE"


class UserData:
    def __init__(self, number, company):
        self.party_transaction_Dict = []
        self.partyNamesAndTotal = []
        self.itemNames = []
        self.salesData = []
        self.SaleTransactions = []
        self.PurchaseTransactions = []
        self.date_data_Sale = []
        self.purchase_data = []
        self.date_data_purchase = []
        self.purchaseBalance = 0
        self.Balance = 0
        self.stock_value = 0
        self.purchaseAmountGlobal = 0
        self.companyID = None
        self.partyID = None
        self.company_name = " "
        self.number = number
        self.total_item_qty = 0
        self.doc_id = None
        self.companies_list = []
        self.company = company
        self.receive_list = []
        self.pay_list = []
        self.purchase_item_list = []
        self.getCompanyNames()
        self.getData()

    def getCompanyNames(self):
        global users
        docs = users.stream()
        print("GETCOMPANYFUNCTION" + str(self.number))
        for doc in docs:
            # print("In the Loop")
            if doc.to_dict()["number"] == str(self.number):
                self.doc_id = doc.id
                company = db.collection("users", doc.id, "company")
                companyDocs = company.stream()
                for doc_C in companyDocs:
                    print(str(doc_C.to_dict()["name"]))
                    self.companies_list.append({"Name": str(doc_C.to_dict()["name"])})

    def getData(self):
        # global docs
        global users
        docs = users.stream()
        # print("HERE")
        # print(self.number)
        for doc in docs:
            # print("In the Loop")
            if doc.to_dict()["number"] == str(self.number):
                print("Found Record...")
                self.doc_id = doc.id
                company = db.collection("users", doc.id, "company")
                companyDocs = company.stream()

                for doc_C in companyDocs:
                    # print('{} => {} '.format(doc_C.id, doc_C.to_dict()))
                    self.companyID = doc_C.id
                    self.company_name = str(doc_C.to_dict()["name"])
                    # print("Setting company name :  " + str(doc_C.to_dict()["name"]))
                    if self.company_name == self.company:
                        print("Company Found")
                        parties = db.collection(
                            "users", doc.id, "company", doc_C.id, "parties"
                        )
                        partiesDocs = parties.stream()
                        i = 0
                        j = 0
                        for doc_P in partiesDocs:
                            # print('{} => {} '.format(doc_P.id, doc_P.to_dict()))
                            self.partyID = doc_P.id
                            partyTransactions = db.collection(
                                "users",
                                doc.id,
                                "company",
                                doc_C.id,
                                "parties",
                                doc_P.id,
                                "PartyDetails",
                            )
                            partyTransactionsDocs = partyTransactions.stream()

                            temp = []
                            total_amount = 0
                            sales_amount = 0
                            purchase_amount = 0
                            pendingBalance = 0
                            pendingBalancePurchase = 0
                            for doc_T in partyTransactionsDocs:
                                # print('{} => {} '.format(doc_T.id, doc_T.to_dict()))
                                temp.append(doc_T.to_dict())
                                # print(str(i) + "  " + str(doc_T.to_dict()["Type"]))
                                # Balance = Balance + doc_T.to_dict()["Balance"]
                                if doc_T.to_dict()["Type"] == "Sale":
                                    sales_amount = (
                                        sales_amount + doc_T.to_dict()["Total"]
                                    )
                                    self.salesData.append(int(doc_T.to_dict()["Total"]))
                                    self.date_data_Sale.append(i)

                                    self.Balance = (
                                        self.Balance + doc_T.to_dict()["Balance"]
                                    )
                                    i = i + 1

                                    self.SaleTransactions.append(
                                        {
                                            "Balance": doc_T.to_dict()["Balance"],
                                            "Total": doc_T.to_dict()["Total"],
                                            "Date": doc_T.to_dict()["Date"],
                                            "Item": doc_T.to_dict()["Item"],
                                            "Number": doc_T.to_dict()["Number"],
                                            "Payment_Type": "Cash",
                                            "Transaction_Type": doc_T.to_dict()["Type"],
                                            "PartyName": doc_P.to_dict()["PartyName"],
                                            "Invoice_No": 0,
                                        }
                                    )
                                    pendingBalance = pendingBalance + int(
                                        doc_T.to_dict()["Balance"]
                                    )

                                else:
                                    purchase_amount = (
                                        purchase_amount + doc_T.to_dict()["Total"]
                                    )
                                    self.purchaseAmountGlobal = (
                                        self.purchaseAmountGlobal
                                        + doc_T.to_dict()["Total"]
                                    )
                                    self.purchase_data.append(doc_T.to_dict()["Total"])
                                    self.date_data_purchase.append(j)
                                    self.purchaseBalance = (
                                        self.purchaseBalance
                                        + doc_T.to_dict()["Balance"]
                                    )
                                    j = j + 1
                                    self.PurchaseTransactions.append(
                                        {
                                            "Balance": doc_T.to_dict()["Balance"],
                                            "Total": doc_T.to_dict()["Total"],
                                            "Date": doc_T.to_dict()["Date"],
                                            "Item": doc_T.to_dict()["Item"],
                                            "Number": doc_T.to_dict()["Number"],
                                            "Payment_Type": "Cash",
                                            "Transaction_Type": doc_T.to_dict()["Type"],
                                            "PartyName": doc_P.to_dict()["PartyName"],
                                            "Invoice_No": 0,
                                        }
                                    )
                                    pendingBalancePurchase = (
                                        pendingBalancePurchase
                                        + int(doc_T.to_dict()["Balance"])
                                    )

                                    self.purchase_item_list.append(
                                        {
                                            "Item": doc_T.to_dict()["Item"],
                                            "Price": doc_T.to_dict()["Total"],
                                        }
                                    )
                            if pendingBalance != 0:
                                self.receive_list.append(
                                    {
                                        "Balance": pendingBalance,
                                        "PartyName": doc_P.to_dict()["PartyName"],
                                    }
                                )
                            if pendingBalancePurchase != 0:
                                self.pay_list.append(
                                    {
                                        "Balance": pendingBalance,
                                        "PartyName": doc_P.to_dict()["PartyName"],
                                    }
                                )
                            total_amount = sales_amount - purchase_amount
                            self.party_transaction_Dict.append(
                                [doc_P.to_dict()["PartyName"], temp]
                            )
                            self.partyNamesAndTotal.append(
                                {
                                    "Name": doc_P.to_dict()["PartyName"],
                                    "Amount": total_amount,
                                }
                            )
                        ###############################
                        items = db.collection(
                            "users", doc.id, "company", doc_C.id, "items"
                        )
                        itemDocs = items.stream()

                        for doc_I in itemDocs:
                            self.itemNames.append(
                                {
                                    "Name": doc_I.to_dict()["ItemName"],
                                    "Units": doc_I.to_dict()["Units"],
                                }
                            )
                            self.total_item_qty = self.total_item_qty + int(
                                doc_I.to_dict()["Units"]
                            )
                            print(
                                int(doc_I.to_dict()["Units"])
                                * int(doc_I.to_dict()["Sale_Price"])
                            )
                            self.stock_value = self.stock_value + int(
                                doc_I.to_dict()["Units"]
                            ) * int(doc_I.to_dict()["Sale_Price"])
                        break
                else:
                    print("Record Not found...")


@app.route("/getTransactions")
def getPartyTransactions():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    # global party_transaction_Dict
    party_transaction_Dict = userData.party_transaction_Dict
    source = request.args.get("partyName")
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    for i in range(len(party_transaction_Dict)):
        if party_transaction_Dict[i][0] == str(source):
            temp = jsonify(party_transaction_Dict[i][1])
    return temp


@app.route("/getCompanyList")
def getCompaniesNames():
    number = request.args.get("number")
    userData = UserData(number, " ")
    return userData.companies_list


@app.route("/getReceiveList")
def getReceiveList():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return userData.receive_list


@app.route("/getPayList")
def getPayList():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return userData.pay_list


@app.route("/getPurchaseItemList")
def getPurchaseItemList():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return userData.purchase_item_list


@app.route("/getSalesTransactions")
def getSaleTransactions():
    number = request.args.get("number")
    # global party_transaction_Dict
    company = request.args.get("company")
    userData = UserData(number, company)
    data = userData.SaleTransactions
    return data


@app.route("/getTotalItemQty")
def getItemQuantity():
    number = request.args.get("number")
    # global party_transaction_Dict
    company = request.args.get("company")
    userData = UserData(number, company)
    data = userData.total_item_qty
    return str(data)


@app.route("/getPartyNames")
def getPartyNames():
    number = request.args.get("number")
    # global party_transaction_Dict
    company = request.args.get("company")
    userData = UserData(number, company)
    partyNamesAndTotal = userData.partyNamesAndTotal
    # source = request.args.get('partyName')
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    # for i in range(len(party_transaction_Dict)):
    #      if(party_transaction_Dict[i][0] == str(source)):
    #           temp = jsonify(party_transaction_Dict[i][1])
    temp = jsonify(partyNamesAndTotal)
    print("Temp  : " + str(temp))
    return temp


@app.route("/getPartyDetails")
def getPartyDetails():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    party_name = request.args.get("partyName")
    party_ref = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "parties"
    ).where("PartyName", "==", str(party_name))

    partyDoc = party_ref.get()
    for doc in partyDoc:
        json_data = {
            "PartyName": doc.to_dict()["PartyName"],
            "Email": doc.to_dict()["Email"],
            "GSTIN": doc.to_dict()["GSTIN"],
            "Number": doc.to_dict()["PhoneNumber"],
            "Address": doc.to_dict()["Address"],
        }
    print(json_data)
    return json_data


@app.route("/getItemNames")
def getItemNames():
    number = request.args.get("number")
    # global party_transaction_Dict
    company = request.args.get("company")
    userData = UserData(number, company)
    itemNames = userData.itemNames
    # source = request.args.get('partyName')
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    # for i in range(len(party_transaction_Dict)):
    #      if(party_transaction_Dict[i][0] == str(source)):
    #           temp = jsonify(party_transaction_Dict[i][1])
    temp = jsonify(itemNames)
    print("Temp  : " + str(temp))
    return temp


@app.route("/getSalesData")
def getSalesData():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    salesData = userData.salesData
    return salesData


@app.route("/getSalesDate")
def getSalesDate():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    date_data_Sale = userData.date_data_Sale
    print(date_data_Sale)
    return date_data_Sale


@app.route("/getPurchaseData")
def getPurchaseData():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return userData.purchase_data


@app.route("/getPurchaseDate")
def getPurchaseDate():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return userData.date_data_purchase


@app.route("/getBalance")
def getBalance():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return str(userData.Balance)


@app.route("/getPurchaseBalance")
def getPurchaseBalance():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return str(userData.purchaseBalance)


@app.route("/getPurchaseAmount")
def getPurchaseAmount():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return str(userData.purchaseAmountGlobal)


@app.route("/getTotalSalesAmount")
def getTotalSalesAmount():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    return str(sum(userData.salesData))


@app.route("/getCompanyName")
def getCompanyName():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    #  print(company_name)
    # name_json = {"name" : }
    return {"name": userData.company_name}


@app.route("/addData")
def addData():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    data = request.args.get("balance")
    db.collection(
        "users",
        userData.doc.id,
        "company",
        userData.companyID,
        "parties",
        userData.partyID,
        "PartyDetails",
    ).add({"Balance": data, "Date": None, "Type": "Sale", "Number": 20, "Total": 2200})
    return "Done"


@app.route("/addParty")
def addPartyData():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    name = request.args.get("name")
    gstin = request.args.get("gstin")
    pnumber = request.args.get("pnumber")
    email = request.args.get("email")
    address = request.args.get("address")
    db.collection(
        "users", userData.doc_id, "company", userData.companyID, "parties"
    ).add(
        {
            "PartyName": str(name),
            "GSTIN": str(gstin),
            "PhoneNumber": str(pnumber),
            "Email": str(email),
            "Address": str(address),
        }
    )
    print("ADDED NEW PARTY DETAILS...")
    return "Done"


@app.route("/addItem")
def addItemData():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    name = request.args.get("name")
    sale_price = request.args.get("SalePrice")
    wholesale_price = request.args.get("WholesalePrice")

    db.collection("users", userData.doc_id, "company", userData.companyID, "items").add(
        {
            "ItemName": str(name),
            "Sale_Price": str(sale_price),
            "Wholesale_Price": str(wholesale_price),
            "Units": 0,
        }
    )
    print("ADDED NEW Item DETAILS...")
    return "Done"


@app.route("/test")
def test():
    return "Test Endpoint"


@app.route("/addPurchaseData", methods=["POST"])
def addPurchaseData():
    print("Adding Purchase Data")

    # userData = UserData(number)
    # data = request.form.get("item")
    data = request.form.to_dict(flat=False)
    # data = request.get_json()
    userData = UserData(str(data["userNumber"]))
    print("Invoice No : " + str(data["invoice-no"]))
    partyRef = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "parties"
    ).where("PartyName", "==", str(data["party-name-dropdown"][0]))

    partydocs = partyRef.get()

    for doc in partydocs:
        print(str(data["party-name-dropdown"][0]))
        if (str(doc.to_dict()["PartyName"]), "==", str(data["party-name-dropdown"][0])):
            print("condition Satisfied")
            db.collection(
                "users",
                userData.doc_id,
                "company",
                userData.companyID,
                "parties",
                str(doc.id),
                "PartyDetails",
            ).add(
                {
                    # "Item": data["item"][0],
                    # "Quantity": data["qty"][0],
                    # "Price": data["price"][0],
                    # "Amount": data["amount"][0],
                    "Item": data["item"][0],
                    "Number": int(data["qty"][0]),
                    "Price": int(data["price"][0]),
                    "Total": int(data["amount"][0]),
                    "Type": "Purchase",
                    "Balance": 100,
                    "Date": firestore.SERVER_TIMESTAMP,
                }
            )

    item_ref = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "items"
    ).where("ItemName", "==", str(data["item"][0]))
    # item_ref.update({"Units": 10})
    items = item_ref.get()
    for doc in items:
        key = doc.id
        if doc.to_dict()["ItemName"] == str(data["item"][0]):
            db.collection(
                "users", userData.doc_id, "company", userData.companyID, "items"
            ).document(key).update({"Units": firestore.Increment(int(data["qty"][0]))})

    return jsonify(data)


@app.route("/addSaleData", methods=["POST"])
def addSaleData():
    print("Adding Purchase Data")

    userData = UserData(number)
    # data = request.form.get("item")
    data = request.form.to_dict(flat=False)
    # data = request.get_json()
    userData = UserData(str(data["userNumber"]))
    print("Invoice No : " + str(data["invoice-no"]))
    partyRef = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "parties"
    ).where("PartyName", "==", str(data["party-name-dropdown"][0]))

    partydocs = partyRef.get()

    for doc in partydocs:
        print(str(data["party-name-dropdown"][0]))
        if (str(doc.to_dict()["PartyName"]), "==", str(data["party-name-dropdown"][0])):
            print("condition Satisfied")
            db.collection(
                "users",
                userData.doc_id,
                "company",
                userData.companyID,
                "parties",
                str(doc.id),
                "PartyDetails",
            ).add(
                {
                    # "Item": data["item"][0],
                    # "Quantity": data["qty"][0],
                    # "Price": data["price"][0],
                    # "Amount": data["amount"][0],
                    "Item": data["item"][0],
                    "Number": int(data["qty"][0]),
                    "Price": int(data["price"][0]),
                    "Total": int(data["amount"][0]),
                    "Type": "Sale",
                    "Balance": 100,
                    "Date": firestore.SERVER_TIMESTAMP,
                }
            )

    item_ref = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "items"
    ).where("ItemName", "==", str(data["item"][0]))
    # item_ref.update({"Units": 10})
    items = item_ref.get()
    for doc in items:
        key = doc.id
        if doc.to_dict()["ItemName"] == str(data["item"][0]):
            db.collection(
                "users", userData.doc_id, "company", userData.companyID, "items"
            ).document(key).update({"Units": firestore.Increment(-int(data["qty"][0]))})

    return jsonify(data)


@app.route("/getStockValue")
def StockValue():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    print("Stock Value : " + str(userData.stock_value))
    return str(userData.stock_value)


@app.route("/testName")
def testfunction():
    name = request.args.get("name")
    print(name)
    return str(name)


@app.route("/updateCompanyInfo")
def UpdateCompanyInfo():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    b_name = request.args.get("b_name")
    b_gstin = request.args.get("b_gstin")
    b_number = request.args.get("b_number")
    b_email = request.args.get("b_email")

    db.collection("users", userData.doc_id, "company").document(
        userData.companyID
    ).update({"name": b_name, "GSTIN": b_gstin, "PhoneNo": b_number, "Email": b_email})


@app.route("/updateCompanyName")
def UpdateCompanyName():
    number = request.args.get("number")
    company = request.args.get("company")
    userData = UserData(number, company)
    b_name = request.args.get("b_name")

    db.collection("users", userData.doc_id, "company").document(
        userData.companyID
    ).update({"name": b_name})

    return "Updated Company Name"


@app.route("/getJsonData")
def getJsonData():
    data = request.args.get("json_data")
    number = request.args.get("number")
    company = request.args.get("company")
    data = json.loads(data)
    print(data[0]["item"])
        ##Data Upload Code
    # data = request.get_json()
    userData = UserData(number,company)
    partyRef = db.collection(
        "users", userData.doc_id, "company", userData.companyID, "parties"
    ).where("PartyName", "==", str(data[0]["party_name_dropdown"]))

    partydocs = partyRef.get()

    for doc in partydocs:
        print(str(data[0]["party_name_dropdown"]))
        if (str(doc.to_dict()["PartyName"]), "==", str(data[0]["party_name_dropdown"])):
            print("condition Satisfied")
            for i in range(len(data)):
                db.collection(
                    "users",
                    userData.doc_id,
                    "company",
                    userData.companyID,
                    "parties",
                    str(doc.id),
                    "PartyDetails",
                ).add(
                    {
                        # "Item": data["item"][0],
                        # "Quantity": data["qty"][0],
                        # "Price": data["price"][0],
                        # "Amount": data["amount"][0],
                        "Item": data[i]["item"],
                        "Number": int(data[i]["qty"]),
                        "Price": int(data[i]["price"]),
                        "Total": int(data[i]["amount"]),
                        "Type": "Sale",
                        "Balance": 100,
                        "Date": firestore.SERVER_TIMESTAMP,
                    }
                )
    for i in range(len(data)):
        item_ref = db.collection(
            "users", userData.doc_id, "company", userData.companyID, "items"
        ).where("ItemName", "==", str(data[i]["item"]))
        # item_ref.update({"Units": 10})
        items = item_ref.get()
        for doc in items:
            key = doc.id
            if doc.to_dict()["ItemName"] == str(data[i]["item"]):
                db.collection(
                    "users", userData.doc_id, "company", userData.companyID, "items"
                ).document(key).update({"Units": firestore.Increment(-int(data[i]["qty"]))})

    return "True"

if __name__ == "__main__":
    app.run(port="8001")

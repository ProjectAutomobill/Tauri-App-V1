from firebase_config import db
from flask import Flask, jsonify, request

app = Flask(__name__)

users = db.collection("users")
number = None


@app.route("/setNumber")
def setGlobalNumber():
    global number
    number = request.args.get("number")
    print("User Number : " + str(number))
    return True


class UserData:
    def __init__(self, number):
        self.party_transaction_Dict = []
        self.partyNamesAndTotal = []
        self.salesData = []
        self.date_data_Sale = []
        self.purchase_data = []
        self.date_data_purchase = []
        self.purchaseBalance = 0
        self.Balance = 0
        self.purchaseAmountGlobal = 0
        self.companyID = None
        self.partyID = None
        self.company_name = " "
        self.number = number
        self.getData()

    def getData(self):
        # global docs
        global users
        docs = users.stream()
        print("HERE")
        for doc in docs:
            print("In the Loop")
            if doc.to_dict()["number"] == str(self.number):
                print("Found Record...")
                company = db.collection("users", doc.id, "company")
                companyDocs = company.stream()

                for doc_C in companyDocs:
                    # print('{} => {} '.format(doc_C.id, doc_C.to_dict()))
                    self.companyID = doc_C.id
                    self.company_name = str(doc_C.to_dict()["name"])
                    print("Setting company name :  " + str(doc_C.to_dict()["name"]))
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

                        for doc_T in partyTransactionsDocs:
                            # print('{} => {} '.format(doc_T.id, doc_T.to_dict()))
                            temp.append(doc_T.to_dict())
                            print(str(i) + "  " + str(doc_T.to_dict()["Type"]))
                            # Balance = Balance + doc_T.to_dict()["Balance"]
                            if doc_T.to_dict()["Type"] == "Sale":
                                sales_amount = sales_amount + doc_T.to_dict()["Total"]
                                self.salesData.append(int(doc_T.to_dict()["Total"]))
                                self.date_data_Sale.append(i)

                                self.Balance = self.Balance + doc_T.to_dict()["Balance"]
                                i = i + 1
                            else:
                                purchase_amount = (
                                    purchase_amount + doc_T.to_dict()["Total"]
                                )
                                self.purchaseAmountGlobal = (
                                    self.purchaseAmountGlobal + doc_T.to_dict()["Total"]
                                )
                                self.purchase_data.append(doc_T.to_dict()["Total"])
                                self.date_data_purchase.append(j)
                                self.purchaseBalance = (
                                    self.purchaseBalance + doc_T.to_dict()["Balance"]
                                )
                                j = j + 1

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
            else:
                print("Record Not found...")


@app.route("/getTransactions")
def getPartyTransactions():
    global number
    userData = UserData(number)
    # global party_transaction_Dict
    party_transaction_Dict = userData.party_transaction_Dict
    source = request.args.get("partyName")
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    for i in range(len(party_transaction_Dict)):
        if party_transaction_Dict[i][0] == str(source):
            temp = jsonify(party_transaction_Dict[i][1])
    return temp


@app.route("/getPartyNames")
def getPartyNames():
    global number
    # global party_transaction_Dict
    userData = UserData(number)
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


@app.route("/getSalesData")
def getSalesData():
    global number
    userData = UserData(number)
    salesData = userData.salesData
    return salesData


@app.route("/getSalesDate")
def getSalesDate():
    global number
    userData = UserData(number)
    date_data_Sale = userData.date_data_Sale
    print(date_data_Sale)
    return date_data_Sale


@app.route("/getPurchaseData")
def getPurchaseData():
    global number
    userData = UserData(number)
    return userData.purchase_data


@app.route("/getPurchaseDate")
def getPurchaseDate():
    global number
    userData = UserData(number)
    return userData.date_data_purchase


@app.route("/getBalance")
def getBalance():
    global number
    userData = UserData(number)
    return str(userData.Balance)


@app.route("/getPurchaseBalance")
def getPurchaseBalance():
    global number
    userData = UserData(number)
    return str(userData.purchaseBalance)


@app.route("/getPurchaseAmount")
def getPurchaseAmount():
    global number
    userData = UserData(number)
    return str(userData.purchaseAmountGlobal)


@app.route("/getTotalSalesAmount")
def getTotalSalesAmount():
    global number
    userData = UserData(number)
    return str(sum(userData.salesData))


@app.route("/getCompanyName")
def getCompanyName():
    global number
    userData = UserData(number)
    #  print(company_name)
    # name_json = {"name" : }
    return {"name": userData.company_name}


@app.route("/addData")
def addData():
    global number
    userData = UserData(number)
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
    global number
    userData = UserData(number)
    name = request.args.get("name")
    gstin = request.args.get("gstin")
    pnumber = request.args.get("pnumber")
    email = request.args.get("email")
    address = request.args.get("address")
    db.collection(
        "users", userData.doc.id, "company", userData.companyID, "parties"
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


if __name__ == "__main__":
    app.run(port="8001")

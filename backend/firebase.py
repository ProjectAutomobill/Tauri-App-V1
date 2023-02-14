from firebase_config import db
from flask import Flask, jsonify, request


app = Flask(__name__)

users = db.collection('users')
docs = users.stream()


#=====================Output Vars==========================
party_transaction_Dict = []
partyNamesAndTotal = []
salesData = []
date_data_Sale = []
purchase_data = []
date_data_Purchase = []
purchaseBalance = 0
Balance = 0
purchaseAmountGlobal = 0
companyID = None
partyID = None
company_name = " "

for doc in docs:
    # print('{} => {} '.format(doc.id, doc.to_dict()))

    if(doc.to_dict()['number'] == '9350244300'):
        print("Found Record...")
        company = db.collection('users',doc.id,'company')
        companyDocs = company.stream()

        for doc_C in companyDocs:
            # print('{} => {} '.format(doc_C.id, doc_C.to_dict()))
            companyID = doc_C.id
            company_name = str(doc_C.to_dict()["name"])
            print("Setting company name :  " + str(doc_C.to_dict()["name"]))
            parties = db.collection('users',doc.id,'company',doc_C.id,'parties')
            partiesDocs = parties.stream()
            i = 0
            j = 0
            for doc_P in partiesDocs:
                # print('{} => {} '.format(doc_P.id, doc_P.to_dict()))
                partyID = doc_P.id 
                partyTransactions = db.collection('users',doc.id,'company',doc_C.id,'parties',doc_P.id,'PartyDetails')
                partyTransactionsDocs = partyTransactions.stream()

                temp = []
                total_amount = 0
                sales_amount = 0
                purchase_amount = 0
                
                for doc_T in partyTransactionsDocs:
                    # print('{} => {} '.format(doc_T.id, doc_T.to_dict()))
                    temp.append(doc_T.to_dict())
                    print(str(i) + "  "+ str(doc_T.to_dict()["Type"]))
                    # Balance = Balance + doc_T.to_dict()["Balance"]
                    if(doc_T.to_dict()["Type"] == "Sale"):
                         
                         sales_amount = sales_amount + doc_T.to_dict()["Total"]
                         salesData.append(int(doc_T.to_dict()["Total"]))
                         date_data_Sale.append(i)
                         Balance = Balance + doc_T.to_dict()["Balance"]
                         i = i+1
                    else:
                         purchase_amount = purchase_amount + doc_T.to_dict()["Total"]
                         purchaseAmountGlobal = purchaseAmountGlobal + doc_T.to_dict()["Total"]
                         purchase_data.append( doc_T.to_dict()["Total"])
                         date_data_Purchase.append(j)
                         purchaseBalance = purchaseBalance + doc_T.to_dict()["Balance"]
                         j = j+1
                         
                total_amount = sales_amount - purchase_amount
                party_transaction_Dict.append([doc_P.to_dict()['PartyName'],temp])
                partyNamesAndTotal.append({"Name" : doc_P.to_dict()['PartyName'], "Amount" : total_amount})
    else:
        print("Record Not found...")

@app.route('/getTransactions')
def getPartyTransactions():
    global party_transaction_Dict
    source = request.args.get('partyName')
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    for i in range(len(party_transaction_Dict)):
         if(party_transaction_Dict[i][0] == str(source)):
              temp = jsonify(party_transaction_Dict[i][1])
    return temp


@app.route('/getPartyNames')
def getPartyNames():
    global party_transaction_Dict
    # source = request.args.get('partyName')
    # party_transaction_Dict = jsonify(party_transaction_Dict[str(source)])
    temp = None
    # for i in range(len(party_transaction_Dict)):
    #      if(party_transaction_Dict[i][0] == str(source)):
    #           temp = jsonify(party_transaction_Dict[i][1])
    temp = jsonify(partyNamesAndTotal)
    return temp

@app.route('/getSalesData')
def getSalesData():
     return salesData

@app.route('/getSalesDate')
def getSalesDate():
     return date_data_Sale

@app.route('/getPurchaseData')
def getPurchaseData():
     return purchase_data


@app.route('/getPurchaseDate')
def getPurchaseDate():
     return date_data_Purchase

@app.route('/getBalance')
def getBalance():
     return str(Balance)

@app.route('/getPurchaseBalance')
def getPurchaseBalance():
     return str(purchaseBalance)

@app.route('/getPurchaseAmount')
def getPurchaseAmount():
     return str(purchaseAmountGlobal)

@app.route('/getTotalSalesAmount')
def getTotalSalesAmount():
     return str(sum(salesData))


@app.route('/getCompanyName')
def getCompanyName():
     print(company_name)
     # name_json = {"name" : }
     return {"name" : company_name}


@app.route('/addData')
def addData():
     data = request.args.get('balance')
     db.collection('users',doc.id,'company',companyID,'parties',partyID,'PartyDetails').add({
          "Balance" : data,
          "Date" : None,
          "Type" : "Sale",
          "Number" : 20,
          "Total" : 2200
     })
     return "Done"

@app.route('/addParty')
def addPartyData():
     name = request.args.get('name')
     gstin = request.args.get('gstin')
     pnumber = request.args.get('pnumber')
     db.collection('users',doc.id,'company',companyID,'parties').add({
          "PartyName" : str(name),
          "GSTIN" : str(gstin),
          "PhoneNumber" : str(pnumber)
     })
     print("ADDED NEW PARTY DETAILS...")
     return "Done"
if __name__ == '__main__':
	app.run(debug=True,port=8001)

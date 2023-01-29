from firebase_config import db
from flask import Flask, jsonify, request


app = Flask(__name__)

users = db.collection('users')
docs = users.stream()


#=====================Output Vars==========================
party_transaction_Dict = []


for doc in docs:
    # print('{} => {} '.format(doc.id, doc.to_dict()))

    if(doc.to_dict()['number'] == '9350244300'):
        print("Found Record...")
        company = db.collection('users',doc.id,'company')
        companyDocs = company.stream()

        for doc_C in companyDocs:
            # print('{} => {} '.format(doc_C.id, doc_C.to_dict()))

            parties = db.collection('users',doc.id,'company',doc_C.id,'parties')
            partiesDocs = parties.stream()

            for doc_P in partiesDocs:
                # print('{} => {} '.format(doc_P.id, doc_P.to_dict()))
                
                partyTransactions = db.collection('users',doc.id,'company',doc_C.id,'parties',doc_P.id,'PartyDetails')
                partyTransactionsDocs = partyTransactions.stream()

                temp = []
                for doc_T in partyTransactionsDocs:
                    # print('{} => {} '.format(doc_T.id, doc_T.to_dict()))
                    temp.append(doc_T.to_dict())

                party_transaction_Dict.append([doc_P.to_dict()['PartyName'],temp])
    
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

if __name__ == '__main__':
	app.run(debug=True,port=8001)

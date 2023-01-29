import firebase_admin
from firebase_admin import credentials,firestore

cred = credentials.Certificate("E:/TauriApplication/TauriAppTest/frontend/backend/database/autotekk-db957-29105cecf105.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

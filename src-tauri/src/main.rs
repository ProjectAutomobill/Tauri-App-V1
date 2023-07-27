#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use reqwest;
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};




fn main() {
  //...................................
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
  let menu = Menu::new()
    .add_native_item(MenuItem::Copy)
    .add_item(CustomMenuItem::new("hide", "Hide"))
    .add_submenu(submenu);
  //...................................
  tauri::Builder::default()
  .menu(menu)
    .invoke_handler(tauri::generate_handler![get_companies_name,component_did_mount,purchase_balance,purchase_amount,total_sales_amount,get_stock_value,get_stock_qty,get_receive_list,get_pay_list,get_purchase_item_list,get_purchase_graph_data,get_purchase_graph_date,get_sale_graph_data,get_sale_graph_date,get_parties_details,get_party_names,get_party_transactions,change_business_name,add_party_details,get_item_details,add_item_details,get_company_name,get_parties_name,new_sale_data,new_purchase_data,get_sales_transaction,get_low_stock_data,get_item_transactions,add_paymentin_details,get_paymentIn_data,get_paymentOut_data, new_sale_order_data, get_sale_order_data,add_paymentOut_details,new_eq_data,general_setting,update_eq])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// static url:&str = "http://13.200.29.224:443/";
static url:&str = "http://127.0.0.1:8001/";

#[tauri::command]
async fn get_companies_name(number : String) -> String {
   
  // let url_link = concat!(url,"getCompanyList?number=",&number.to_string());
   let resp = match reqwest::get( url.to_owned() + &"getCompanyList?number=".to_owned() + &number).await {
    // let resp = match reqwest::get(url_link).await {

    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}
// getSaleOrderData
#[tauri::command]
async fn get_sale_order_data(number : String, company : String) -> String {
   
  let mut a = String::from(url.to_owned() + &"getSaleOrderData?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn component_did_mount(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getBalance?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn purchase_balance(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPurchaseBalance?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn purchase_amount(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPurchaseAmount?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn total_sales_amount(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getTotalSalesAmount?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_stock_value(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getStockValue?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_stock_qty(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getTotalItemQty?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_receive_list(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getReceiveList?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_pay_list(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPayList?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_purchase_item_list(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPurchaseItemList?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_purchase_graph_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPurchaseData?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_purchase_graph_date(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPurchaseDate?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_sale_graph_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getSalesData?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_sale_graph_date(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getSalesDate?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_parties_details(number : String, company : String, party_name : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPartyDetails?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&partyName=");
 
  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&party_name);

  a.push_str(&b);
  a.push_str(&c);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_party_names(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPartyNames?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command(rename_all = "snake_case")]
async fn get_party_transactions(number : String, company : String, selected_name : String) -> String{
  let mut a = String::from(url.to_owned() + &"getTransactions?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&selected_name);

  a.push_str(&b);
  a.push_str(&c);
  println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command(rename_all = "snake_case")]
async fn get_item_transactions(number : String, company : String, selected_name : String) -> String{
  let mut a = String::from(url.to_owned() + &"getItemTransactions?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&itemName=");
  
  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&selected_name);

  a.push_str(&b);
  a.push_str(&c);
  println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn change_business_name(number : String, company : String, bNameVal : String) -> String{
  let mut a = String::from(url.to_owned() + &"updateCompanyName?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&b_name=");

  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&bNameVal);

  a.push_str(&b);
  a.push_str(&c);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn add_party_details(number : String, company : String, name : String, gstin : String, pnumber : String, email : String, address : String) -> String{
  let mut a = String::from(url.to_owned() + &"addParty?number=");
  a.push_str(&number);
  
  let mut b = String::from("&company=");
  b.push_str(&company);

  let mut c = String::from("&name=");
  c.push_str(&name);

  let mut d = String::from("&gstin=");
  d.push_str(&gstin);

  let mut e = String::from("&pnumber=");
  e.push_str(&pnumber);

  let mut f = String::from("&email=");
  f.push_str(&email);

  let mut g = String::from("&address=");
  g.push_str(&address);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
  a.push_str(&f);
  a.push_str(&g);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_item_details(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getItemNames?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}



#[tauri::command]
async fn add_item_details(number : String, company : String, name : String, salePrice : String, wholesalePrice : String, stockQuantity : String) -> String{
  let mut a = String::from(url.to_owned() + &"addItem?number=");
  a.push_str(&number);
  
  let mut b = String::from("&company=");
  b.push_str(&company);

  let mut c = String::from("&name=");
  c.push_str(&name);

  let mut d = String::from("&SalePrice=");
  d.push_str(&salePrice);

  let mut e = String::from("&WholesalePrice=");
  e.push_str(&wholesalePrice);
  
  let mut f = String::from("&stockQuantity=");
  f.push_str(&stockQuantity);

  // let mut f = String::from("&email=");
  // f.push_str(&email);

  // let mut g = String::from("&address=");
  // g.push_str(&address);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
  a.push_str(&f);
  // a.push_str(&f);
  // a.push_str(&g);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_company_name(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getCompanyName?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_parties_name(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPartyNames?number=");
  let mut b = String::from("&company=");

  a.push_str(&number);
  b.push_str(&company);

  a.push_str(&b);

  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn new_sale_data(number : String, company : String, jsonData : String, totalPrice : String, recievedPrice : String){
 
  let mut a = String::from(url.to_owned() + &"getJsonData?json_data=");
  let mut b = String::from("&company=");
  let mut c = String::from("&number=");
  let mut d = String::from("&totalAmount=");
  let mut e = String::from("&receivedAmount=");
   
  a.push_str(&jsonData);
  b.push_str(&company);
  c.push_str(&number);
  d.push_str(&totalPrice);
  e.push_str(&recievedPrice);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", jsonData);
// resp.into()
}

#[tauri::command]
async fn new_sale_order_data(number : String, company : String, jsonData : String){
 
  let mut a = String::from(url.to_owned() + &"addSaleOrderData?json_data=");
  let mut b = String::from("&company=");
  let mut c = String::from("&number=");
   
  a.push_str(&jsonData);
  b.push_str(&company);
  c.push_str(&number);

  a.push_str(&b);
  a.push_str(&c);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", jsonData);
// resp.into()
}


#[tauri::command]
async fn new_purchase_data(number : String, company : String, jsonData : String, totalPrice : String, recievedPrice : String){
 
  let mut a = String::from(url.to_owned() + &"uploadNewPurchaseData?json_data=");
  let mut b = String::from("&company=");
  let mut c = String::from("&number=");
  let mut d = String::from("&totalAmount=");
  let mut e = String::from("&receivedAmount=");
   
  a.push_str(&jsonData);
  b.push_str(&company);
  c.push_str(&number);
  d.push_str(&totalPrice);
  e.push_str(&recievedPrice);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", jsonData);
// resp.into()
}

#[tauri::command]
async fn new_eq_data(number : String, company : String, jsonData : String, totalPrice : String, recievedPrice : String){
 
  let mut a = String::from(url.to_owned() + &"addEQData?json_data=");
  let mut b = String::from("&company=");
  let mut c = String::from("&number=");
  let mut d = String::from("&totalAmount=");
  let mut e = String::from("&receivedAmount=");
   
  a.push_str(&jsonData);
  b.push_str(&company);
  c.push_str(&number);
  d.push_str(&totalPrice);
  e.push_str(&recievedPrice);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", jsonData);
// resp.into()
}

async fn check_eq_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"checkEQData?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn general_setting(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"settings/general?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_sales_transaction(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getSalesTransactions?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn get_low_stock_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getLowStockData?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn add_paymentin_details(number : String, company : String,jsondata : String){

let mut a = String::from(url.to_owned() + &"/addPaymentInData?json_data=");
let mut b = String::from("&company=");
let mut c = String::from("&number=");
 
a.push_str(&jsondata);
b.push_str(&company);
c.push_str(&number);

a.push_str(&b);
a.push_str(&c);
let resp = match reqwest::get(a).await {
  Ok(resp) => resp.text().await.unwrap(),
  Err(err) => panic!("Error: {}", err)
};
println!("{}", jsondata);
// jsondata.into()
}

#[tauri::command]
async fn add_paymentOut_details(number : String, company : String,jsondata : String){

let mut a = String::from(url.to_owned() + &"/addPaymentOutData?json_data=");
let mut b = String::from("&company=");
let mut c = String::from("&number=");
 
a.push_str(&jsondata);
b.push_str(&company);
c.push_str(&number);

a.push_str(&b);
a.push_str(&c);
let resp = match reqwest::get(a).await {
  Ok(resp) => resp.text().await.unwrap(),
  Err(err) => panic!("Error: {}", err)
};
println!("{}", jsondata);
// jsondata.into()
}

#[tauri::command]
async fn get_paymentIn_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPaymentInData?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}


#[tauri::command]
async fn get_paymentOut_data(number : String, company : String) -> String{
  let mut a = String::from(url.to_owned() + &"getPaymentOutData?number=");
  let mut b = String::from("&company=");
  // let mut c = String::from("&partyName=");
  
  a.push_str(&number);
  b.push_str(&company);
  // c.push_str(&partyName);

  a.push_str(&b);
  // a.push_str(&c);
  // println!("{}", &a);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn update_eq(number : String, company : String, value : String) -> String{
  let mut a = String::from(url.to_owned() + &"settings/general/Update/eq?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&value=");

  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&value);

  a.push_str(&b);
  a.push_str(&c);
  let resp = match reqwest::get(a).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}
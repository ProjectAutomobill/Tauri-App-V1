#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use reqwest;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_companies_name,component_did_mount,purchase_balance,purchase_amount,total_sales_amount,get_stock_value,get_stock_qty,get_receive_list,get_pay_list,get_purchase_item_list,get_purchase_graph_data,get_purchase_graph_date,get_sale_graph_data,get_sale_graph_date,get_parties_details,get_party_names,get_party_transactions,change_business_name,add_party_details,get_item_details,add_item_details,get_company_name,get_parties_name,new_sale_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn get_companies_name(number : String) -> String {

   let resp = match reqwest::get("http://127.0.0.1:8001/getCompanyList?number=".to_owned() + &number).await {
    Ok(resp) => resp.text().await.unwrap(),
    Err(err) => panic!("Error: {}", err)
};
println!("{}", resp);
resp.into()
}

#[tauri::command]
async fn component_did_mount(number : String, company : String) -> String{
  let mut a = String::from("http://127.0.0.1:8001/getBalance?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPurchaseBalance?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPurchaseAmount?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getTotalSalesAmount?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getStockValue?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getTotalItemQty?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getReceiveList?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPayList?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPurchaseItemList?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPurchaseData?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPurchaseDate?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getSalesData?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getSalesDate?number=");
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
async fn get_parties_details(number : String, company : String, partyName : String) -> String{
  let mut a = String::from("http://127.0.0.1:8001/getPartyDetails?number=");
  let mut b = String::from("&company=");
  let mut c = String::from("&partyName=");
 
  a.push_str(&number);
  b.push_str(&company);
  c.push_str(&partyName);

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
  let mut a = String::from("http://127.0.0.1:8001/getPartyNames?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getTransactions?number=");
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

#[tauri::command]
async fn change_business_name(number : String, company : String, bNameVal : String) -> String{
  let mut a = String::from("http://127.0.0.1:8001/updateCompanyName?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/addParty?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getItemNames?number=");
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
async fn add_item_details(number : String, company : String, name : String, salePrice : String, wholesalePrice : String) -> String{
  let mut a = String::from("http://127.0.0.1:8001/addItem?number=");
  a.push_str(&number);
  
  let mut b = String::from("&company=");
  b.push_str(&company);

  let mut c = String::from("&name=");
  c.push_str(&name);

  let mut d = String::from("&SalePrice=");
  d.push_str(&salePrice);

  let mut e = String::from("&WholesalePrice=");
  e.push_str(&wholesalePrice);

  // let mut f = String::from("&email=");
  // f.push_str(&email);

  // let mut g = String::from("&address=");
  // g.push_str(&address);

  a.push_str(&b);
  a.push_str(&c);
  a.push_str(&d);
  a.push_str(&e);
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
  let mut a = String::from("http://127.0.0.1:8001/getCompanyName?number=");
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
  let mut a = String::from("http://127.0.0.1:8001/getPartyNames?number=");
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
async fn new_sale_data(number : String, company : String, jsonData : String){
 
  let mut a = String::from("http://127.0.0.1:8001/getJsonData?json_data=");
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
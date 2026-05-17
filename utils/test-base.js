const base = require('@playwright/test');


exports.customtest = base.test.extend(

{
testDataForOrder : {
    username: "sheikhseraj2@gmail.com",
    password: "PlayWright@1",
    productName: "ZARA COAT 3"

}




}

)
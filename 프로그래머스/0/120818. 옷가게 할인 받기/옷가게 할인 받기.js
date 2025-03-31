function solution(price) {
    
    if(price>=500000)
        {
            price=Math.floor(price-price/100*20)
            return price;
        }
    if(price>=300000)
        {
            price=Math.floor(price-price/100*10)
            return price;
        }
    if(price>=100000)
         {
            price=Math.floor(price-price/100*5)
            return price;
        }
    return price;
    
    
}
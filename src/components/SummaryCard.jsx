import React from 'react';
import reactDom from 'react-dom'

var customStyle = {
    color:"",
}
var currentCost = "31,654.85";
var budgetCost = "20,001";
if(currentCost>budgetCost){
    customStyle.color="red"
}else{
    customStyle.color="green"
}

const Header = () => (
    <div className='summaryContainer'>
        <div className='summaryCost'>
            <div className='logo'>
                <div className="logoImg">
                    <img src='https://s3-alpha-sig.figma.com/img/ea96/258b/6b70e496abd40a341fbaaca06b982675?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dk2jaaG92jXi~jvTM8hSjXWPGBH0gg4HVnk8X-Z6Yocw7PnlI3ppFtZiYuigMttoFqcZXf~bdU1yVBmGDhlbSXFET2QjTTO1l8oO-Fgt9zcGS7uuelEteQ3G3X7fIJNsj3EFg0Qy2LG96hJUR8DNXzRTJ6y369KFWTwlH~sstIsOfCS2oXFV4w3mPcUq5iuXfFX-uSiOYMYWoPMy9cW6FrjDyVgSg26R5X17KPBJ8WKS6Ju2sERhiqcNesQxuXaMfb4Yav5UZBxyETlz2NnxlEO91d71W~2IY8SildkezliDIr45nfAWJ05ITOe~mIYckqatoJrvGVHw1JqxGOtYPw__' alt='logo'/>
                </div>
                <div className='logoHeader'>
                    <h2>Snowflaxe ML/AI</h2>
                </div>
            </div>
            <div className='costs'>
                <div className='currentCost'>
                    <h5>TOTAL COST</h5>
                     <h6> (per Month)</h6>
                    <h1 style={customStyle}>${currentCost}</h1>
                </div>
                <div className='budgetCost'>
                    <h5>BUDGET COST</h5>
                    <h6>(Per Month)</h6>
                    <h3>${budgetCost}</h3>
                </div>
            </div>
        </div>
    </div>
);

export default Header;

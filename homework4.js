//1

const stars = function(num,symbol) {
	if(num<=0) {
		return "";
	}
	return symbol + stars(num-1,symbol);
};

const typeprint = function(SpaceNum,StarNum) {
	if (StarNum<=0) {
		return "";
	}
	console.log(stars(SpaceNum," ")+ stars(StarNum,"*"));
	return typeprint(SpaceNum+1,StarNum-2);
};
const triangleStars=function(n) {
	typeprint(0,2*n-1);
};

triangleStars();

//2

const pow = function(base,n) {
	if(n<=0) {
		return 1;
	}
	return base * pow(base, n-1);
};
pow();

//3

const reverse = function(str) {
	const k=str.length;
	const reverse = function(k){
		if(k<=0){
		return "";
		}
		return str[k-1]+reverse(k-1);

	};
	return reverse(k);
};
reverse();

//4


  const checkerboard= function(n) {
  	const typeOfPrint = function(num, isSpace) {
		if (num===0) {
		return "";
		} 
		if(isSpace) {
		return "" + typeOfPrint(num-1,!isSpace);
      
		} else {
		return '*' + typeOfPrint(num,!isSpace);
  		}     
     
	}; 
  	const tab = function(num1,num2,bool){
  		console.log(typeOfPrint(num2,bool));
    	if (num1===1) {
      	return "";
    	}
    	return tab(num1-1,num2,!bool);
    };
 
  	return tab(n,n,false);
 
};
  checkerboard();
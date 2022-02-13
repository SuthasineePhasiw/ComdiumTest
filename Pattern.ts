// 3.1
function starOne(n:number){
    let star:string = "";
    for(let i = 1; i <= n; i++){
        console.log(star+='*')
    }
}
starOne(3);

// 3.2
function starTwo(n:number){
    let star : string = "";
    for(let i = 1; i <= n; i++){
     for(let j = 0; j < n-i; j++){
          star += " ";
      }
      for(let k = 0; k < i ; k++){
          star += "*";    
      }
      star += "\n";
  }
  console.log(star);
}
starTwo(9);

// 3.3
function starThree(n:number){
    let star : string = "";
    for(let i = 0; i < n; i++){
       for(let j = 1; j <= n-i; j++){
            star += " "
       }for(let k = 0; k < 2 * i - 1; k++){
            if(i === 1){
               star += "*";
           }else{
               if(k === 0 || k === 2 * i -2){
                    star += "*";
               }else {
                    star += " ";
                }
           }
       }star += "\n"
   }console.log(star);
}
starThree(9);   

//3.4
function starFour(n:number){
    let star:string = "";
    for(let i = 0; i <= n + 1; i++){
        for(let j = 0; j <= n + 1; j++){
            if(i == j || i + j == n + 1){
                star += '*'
            }else {
                star += ' ';
            }
        }
        star += '\n';
    }
    console.log(star);    
}
starFour(5);

// 3.5
function starFive(n:number){
    let star:string = "";
    for (let i = 1; i <= n; i++){
        for(let j = n; j > i; j--){
            star += " ";
        }for(let k = 0; k < i*2-1; k++){
            star += "*";
        }star += "\n";
    }for (let i = 1; i <= n-1; i++){
       for(let j = 0; j < i; j++){
           star += " ";
        }for(let k = (n-i) * 2 - 1; k > 0; k--){
           star += "*";
        }star += "\n";
   }console.log(star);
}
starFive(10);

//3.6
function starSix(n:number){
    let star:string = "";
    let k :number = n;
    let p : number = 1;
    if(n == 1){
        star += '+';
    } else {
        for(let i:number = 0; i < n; i++){
            for(let a:number = 1; a < k; a++){
                star += 'A';
            } 
            if (i == 0){
                star += '+';
            } else{
                star += '+';
                for(let e:number = 0; e < p; e++){
                    star += 'E';   
                } 
                p += 2
                star += '+';
            } 
            for(let b:number = 1; b < k; b++){
                star += 'B';
            } 
            star += '\n';
            k -= 1;
        } 
        for(let j:number = 1; j < n; j++){
            for(let c:number = -2; c < k - 1 ; c++){
                star += 'C';
            } 
            if(j == n - 1){
                star += '+'
            } else{
                p -= 2;
                star += '+';
                for (let e: number = 1; e < p - 1; e++){
                    star += 'E';
                }
                star += '+';
                k += 1;
            }
            for(let d:number = 0; d < j; d++){
                star += 'D';
            } 
            star += '\n';
        }
    } 
    console.log(star);
    
}
starSix(2);
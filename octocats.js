//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocats (n,a){}
  this.name = n;
  this.arms = a;

  this.slap = function(){}
    for(s=0;s<this.arms;s++)
      console.log("SLAP");
    }
  }

}









//Write your 3 new octocat objects below here.
var mycat = new Octocat("James",7)
var gangstacat = Octocat("Jeff",100)
var flemdogcat = Octocat("Eric",9000)
